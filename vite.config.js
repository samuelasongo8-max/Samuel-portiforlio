import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pageSeo, publicRoutes } from './src/utils/pageSeo.js';
import { getPageSchema } from './src/utils/schemaData.js';

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

const updateMetaTag = (html, attribute, name, content) => {
  const tag = `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*\\/?>`,
    'i'
  );

  if (!pattern.test(html)) {
    throw new Error(`Missing ${attribute}="${name}" tag in index.html.`);
  }

  return html.replace(pattern, tag);
};

const removeMetaTag = (html, attribute, name) =>
  html.replace(
    new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*\\/?>`, 'i'),
    ''
  );

const validateGoogleIds = (env) => {
  const googleVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
  const ga4Id = env.VITE_GA4_ID?.trim();
  const gtmId = env.VITE_GTM_ID?.trim();

  if (googleVerification && !/^[A-Za-z0-9_-]+$/.test(googleVerification)) {
    throw new Error('VITE_GOOGLE_SITE_VERIFICATION contains unsupported characters.');
  }
  if (ga4Id && !/^G-[A-Z0-9]+$/.test(ga4Id)) {
    throw new Error('VITE_GA4_ID must look like G-XXXXXXXXXX.');
  }
  if (gtmId && !/^GTM-[A-Z0-9]+$/.test(gtmId)) {
    throw new Error('VITE_GTM_ID must look like GTM-XXXXXXX.');
  }

  return { googleVerification, ga4Id, gtmId };
};

const analyticsBootstrap = ({ ga4Id, gtmId }) => {
  const setup = [];

  if (ga4Id) {
    setup.push(`
  if (!window.__ga4Initialized) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ${JSON.stringify(ga4Id)}, { send_page_view: false });
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=${ga4Id}';
    document.head.appendChild(gaScript);
    window.__ga4Initialized = true;
  }`);
  }

  if (gtmId) {
    setup.push(`
  if (!window.__gtmInitialized) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
    document.head.appendChild(gtmScript);
    window.__gtmInitialized = true;
  }`);
  }

  return `(() => {${setup.join('\n')}\n})();\n`;
};

const buildPageHtml = (template, page, siteUrl, routeStyles = []) => {
  const canonicalUrl = siteUrl && page.path !== null
    ? `${siteUrl}${page.path}`
    : null;
  const imageUrl = siteUrl ? `${siteUrl}${page.image}` : null;
  let html = template.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`
  );
  if (page.path !== '/') {
    html = html.replace(
      /<link\s+rel="preload"\s+as="image"\s+href="\/(?:images\/optimized\/)?samuel-asongo\.webp"[^>]*\/?>/i,
      ''
    );
  }
  const routePreloadImages = {
    '/about': '/images/optimized/Kakuma%20Artist.webp',
    '/creative': '/images/optimized/creative%20Arts.webp',
    '/contact': '/images/optimized/Samuel%20Asongo%20image.webp',
    '/auvd': '/images/optimized/AUVD%20student1.webp',
    '/projects': '/images/optimized/Samuel%20project1.webp',
    '/development': '/images/optimized/Samuel%20as%20a%20Fulstack%20developer.webp',
    '/impact': '/images/optimized/AUVD%20impact.webp',
    '/ambassador': '/images/optimized/samuel%20transylvanina%20Ambasodor.webp',
  };
  const routePreloadImage = routePreloadImages[page.path];
  if (routePreloadImage) {
    html = html.replace(
      '</head>',
      `  <link rel="preload" as="image" href="${routePreloadImage}" type="image/webp" fetchpriority="high" />\n  </head>`
    );
  }
  if (routeStyles.length) {
    const stylesheetLinks = routeStyles
      .map((style) => `  <link rel="stylesheet" href="/${style}" />`)
      .join('\n');
    html = html.replace('</head>', `${stylesheetLinks}\n  </head>`);
  }

  html = updateMetaTag(html, 'name', 'description', page.description);
  if (page.path === null) {
    html = updateMetaTag(html, 'name', 'robots', 'noindex, follow');
    html = updateMetaTag(html, 'name', 'googlebot', 'noindex, follow');
  }
  html = updateMetaTag(html, 'property', 'og:title', page.title);
  html = updateMetaTag(html, 'property', 'og:description', page.description);
  html = updateMetaTag(html, 'property', 'og:type', page.ogType || 'website');
  html = canonicalUrl
    ? updateMetaTag(html, 'property', 'og:url', canonicalUrl)
    : removeMetaTag(html, 'property', 'og:url');
  html = imageUrl
    ? updateMetaTag(html, 'property', 'og:image', imageUrl)
    : removeMetaTag(html, 'property', 'og:image');
  if (!imageUrl) {
    html = ['og:image:width', 'og:image:height', 'og:image:alt'].reduce(
      (result, property) => removeMetaTag(result, 'property', property),
      html
    );
  }
  html = updateMetaTag(html, 'name', 'twitter:title', page.title);
  html = updateMetaTag(html, 'name', 'twitter:description', page.description);
  html = imageUrl
    ? updateMetaTag(html, 'name', 'twitter:image', imageUrl)
    : removeMetaTag(html, 'name', 'twitter:image');

  const canonicalTag = canonicalUrl
    ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
    : null;
  const canonicalPattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i;
  if (canonicalTag) {
    html = canonicalPattern.test(html)
      ? html.replace(canonicalPattern, canonicalTag)
      : html.replace('</head>', `  ${canonicalTag}\n  </head>`);
  } else {
    html = html.replace(canonicalPattern, '');
  }

  if (siteUrl && page.path !== null) {
    const schema = getPageSchema(siteUrl, page.path);

    html = html.replace(
      '</head>',
      () =>
        `  <script type="application/ld+json" data-seo-schema="true">${JSON.stringify(schema)}</script>\n  </head>`
    );
  }

  return html;
};

const seoAssetsPlugin = (siteUrl, googleIds) => ({
  name: 'portfolio-seo-assets',
  apply: 'build',
  transformIndexHtml(html) {
    const verification = googleIds.googleVerification
      ? `<meta name="google-site-verification" content="${escapeHtml(googleIds.googleVerification)}" />`
      : '';
    const bootstrap = googleIds.ga4Id || googleIds.gtmId
      ? '<script defer src="/analytics-bootstrap.js"></script>'
      : '';
    const gtmNoscript = googleIds.gtmId
      ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${googleIds.gtmId}" title="Google Tag Manager" width="0" height="0" hidden></iframe></noscript>`
      : '';

    return html
      .replace('<!-- SEO_GSC_VERIFICATION -->', verification)
      .replace('<!-- SEO_GA4_BOOTSTRAP -->', '')
      .replace('<!-- SEO_GTM_BOOTSTRAP -->', bootstrap)
      .replace('<!-- SEO_GTM_NOSCRIPT -->', gtmNoscript);
  },
  async writeBundle() {
    const distPath = resolve(process.cwd(), 'dist');
    const template = await readFile(resolve(distPath, 'index.html'), 'utf8');
    const manifest = JSON.parse(
      await readFile(resolve(distPath, '.vite/manifest.json'), 'utf8')
    );
    const getRouteStyles = (page) => {
      if (page.path === null) {
        return [];
      }

      const routePath = page.path.startsWith('/news/') ? '/news' : page.path;
      const routeName = routePath === '/' ? 'home' : routePath.slice(1);
      const routeEntry = Object.values(manifest).find(
        (entry) => entry.name === `page-${routeName}`
      );
      if (!routeEntry) {
        throw new Error(`Missing build manifest entry for route ${page.path}.`);
      }

      const styles = new Set();
      const visited = new Set();
      const collectStyles = (entry) => {
        if (!entry || visited.has(entry.file)) {
          return;
        }
        visited.add(entry.file);
        entry.css?.forEach((style) => styles.add(style));
        entry.imports?.forEach((imported) => collectStyles(manifest[imported]));
      };
      collectStyles(routeEntry);
      return [...styles];
    };

    if (googleIds.ga4Id || googleIds.gtmId) {
      await writeFile(
        resolve(distPath, 'analytics-bootstrap.js'),
        analyticsBootstrap(googleIds),
        'utf8'
      );
    }

    await Promise.all(
      Object.values(pageSeo)
        .filter((page) => page.path !== null)
        .map(async (page) => {
          const html = buildPageHtml(
            template,
            page,
            siteUrl,
            getRouteStyles(page)
          );
          if (page.path === '/') {
            await writeFile(resolve(distPath, 'index.html'), html, 'utf8');
            return;
          }

          const pageDirectory = resolve(distPath, page.path.slice(1));
          await mkdir(pageDirectory, { recursive: true });
          await writeFile(resolve(pageDirectory, 'index.html'), html, 'utf8');
        })
    );

    await writeFile(
      resolve(distPath, '404.html'),
      buildPageHtml(template, pageSeo.notFound, siteUrl, []),
      'utf8'
    );

    const sitemapPath = resolve(distPath, 'sitemap.xml');
    const robotsPath = resolve(distPath, 'robots.txt');
    const sitemap = siteUrl
      ? [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...publicRoutes.map((route) => {
            const priority = route === '/' ? '1.0' : route === '/contact' ? '0.6' : '0.8';
            const changefreq = route === '/' ? 'weekly' : 'monthly';
            return `  <url><loc>${siteUrl}${route}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
          }),
          '</urlset>',
          '',
        ].join('\n')
      : null;

    if (sitemap) {
      await writeFile(sitemapPath, sitemap, 'utf8');
    }

    await writeFile(
      robotsPath,
      `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /__vite/\nDisallow: /admin/\nDisallow: /login/\nDisallow: /cart/\nDisallow: /checkout/\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml` : ''}\n`,
      'utf8'
    );
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const googleIds = validateGoogleIds(env);
  const rawSiteUrl = env.VITE_SITE_URL?.trim();
  let configuredSiteUrl;

  if (rawSiteUrl) {
    const parsedSiteUrl = new URL(rawSiteUrl);
    if (
      parsedSiteUrl.protocol !== 'https:' ||
      parsedSiteUrl.pathname !== '/' ||
      parsedSiteUrl.search ||
      parsedSiteUrl.hash
    ) {
      throw new Error('VITE_SITE_URL must be an HTTPS origin without a path, query, or hash.');
    }
    configuredSiteUrl = parsedSiteUrl.origin;
  }

  return {
    plugins: [react(), seoAssetsPlugin(configuredSiteUrl, googleIds)],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
    build: {
      target: 'es2020',
      sourcemap: false,
      manifest: true,
      reportCompressedSize: true,
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor',
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/,
                priority: 20,
              },
              {
                name: 'shared',
                test: (id) => {
                  const normalizedId = id.replaceAll('\\', '/');
                  return [
                    '/src/utils/analytics.js',
                    '/src/utils/pageSeo.js',
                    '/src/utils/schemaData.js',
                    '/src/utils/seo.js',
                  ].some((modulePath) => normalizedId.includes(modulePath));
                },
                priority: 15,
              },
              {
                debugName: 'route-pages',
                name: (id) => {
                  const normalizedId = id.replaceAll('\\', '/');
                  const pagePath = normalizedId.split('/src/pages/')[1];
                  if (!pagePath) return null;
                  return `page-${pagePath.split('/')[0].toLowerCase()}`;
                },
                test: (id) =>
                  id.includes('/src/pages/') || id.includes('\\src\\pages\\'),
                priority: 10,
              },
            ],
          },
        },
      },
    },
  };
});
