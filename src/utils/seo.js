import { pageSeo } from './pageSeo';
import { getPageSchema } from './schemaData';

const defaultImage = '/og-image.jpg';
const getSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL;
  const origin = configuredUrl || window.location.origin;
  return origin.replace(/\/+$/, '');
};

const updateMeta = (selector, attribute, value, content) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const updateCanonical = (url) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
};

export const addStructuredData = (schema) => {
  let script = document.head.querySelector('script[data-seo-schema]');

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoSchema = 'true';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

export const setPageMeta = (pageKey, { robots = 'index, follow' } = {}) => {
  const page = pageSeo[pageKey];
  if (!page) {
    throw new Error(`Unknown SEO page key: ${pageKey}`);
  }

  const { title, description, image = defaultImage, ogType = 'website' } = page;
  const path = page.path || window.location.pathname;
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${path}`;
  const imageUrl = new URL(image, `${siteUrl}/`).href;

  document.title = title;
  updateMeta('meta[name="description"]', 'name', 'description', description);
  updateMeta('meta[name="robots"]', 'name', 'robots', robots);
  updateMeta('meta[name="googlebot"]', 'name', 'googlebot', robots);

  updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
  updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
  updateMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
  updateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  updateMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
  updateMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
  updateMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
  updateMeta(
    'meta[property="og:image:alt"]',
    'property',
    'og:image:alt',
    'Samuel Asongo, artist, music educator, and full-stack developer'
  );
  updateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  updateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
  if (robots.includes('noindex')) {
    document.head.querySelector('link[rel="canonical"]')?.remove();
  } else {
    updateCanonical(canonicalUrl);
  }

  if (robots.includes('noindex')) {
    document.head.querySelector('script[data-seo-schema]')?.remove();
    return;
  }

  addStructuredData(getPageSchema(siteUrl, path));
};

export { getPageSchema };
