import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import fetch from 'node-fetch';

const distPath = resolve(process.cwd(), 'dist');
const sitemapPath = resolve(distPath, 'sitemap.xml');
const suppliedOrigin = process.env.SEO_AUDIT_ORIGIN;
let server;

const getSitemapUrls = async () => {
  const sitemap = await readFile(sitemapPath, 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    match[1].trim()
  );

  if (urls.length < 12) {
    throw new Error(`Expected at least 12 sitemap URLs; found ${urls.length}.`);
  }

  return urls;
};

const startStaticServer = async () => {
  server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url || '/', 'http://localhost');
      const decodedPath = decodeURIComponent(requestUrl.pathname);
      let filePath = resolve(distPath, `.${decodedPath}`);

      if (filePath !== distPath && !filePath.startsWith(`${distPath}${sep}`)) {
        response.writeHead(400).end('Invalid path');
        return;
      }

      if ((await stat(filePath).catch(() => null))?.isDirectory()) {
        filePath = resolve(filePath, 'index.html');
      }

      const body = await readFile(filePath);
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      });
      response.end(body);
    } catch {
      response.writeHead(404).end('Not found');
    }
  });

  await new Promise((resolveListen, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolveListen);
  });

  return `http://127.0.0.1:${server.address().port}`;
};

const readPage = async (url, origin) => {
  const pageUrl = new URL(url);
  const fetchUrl = new URL(`${pageUrl.pathname}${pageUrl.search}`, origin);
  const response = await fetch(fetchUrl);

  if (!response.ok) {
    throw new Error(`${fetchUrl} returned HTTP ${response.status}`);
  }

  return response.text();
};

const check = (html, pattern) => pattern.test(html);

try {
  const urls = await getSitemapUrls();
  const origin = suppliedOrigin || await startStaticServer();
  const rows = [];

  for (const url of urls) {
    const html = await readPage(url, origin);
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || '';
    const description =
      html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || '';
    const h1Count = [...html.matchAll(/<h1(?:\s[^>]*)?>/gi)].length;
    const canonical = html.match(
      /<link\s+rel="canonical"\s+href="([^"]*)"/i
    )?.[1];
    const expectedUrl = new URL(url).href;
    const pageChecks = {
      title: title.length >= 50 && title.length <= 60,
      description: description.length >= 150 && description.length <= 160,
      h1: h1Count === 1,
      canonical: canonical === expectedUrl,
      'og:image': check(
        html,
        /<meta\s+property="og:image"\s+content="https:\/\/[^"]+"/i
      ),
      'JSON-LD': check(
        html,
        /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i
      ),
    };

    rows.push({
      URL: url,
      Title: `${pageChecks.title ? '✅' : '❌'} ${title.length} chars`,
      Description: `${pageChecks.description ? '✅' : '❌'} ${description.length} chars`,
      H1: `${pageChecks.h1 ? '✅' : '❌'} ${h1Count}`,
      Canonical: `${pageChecks.canonical ? '✅' : '❌'} ${
        canonical ? 'present' : 'missing'
      }`,
      'og:image': pageChecks['og:image'] ? '✅' : '❌',
      'JSON-LD': pageChecks['JSON-LD'] ? '✅' : '❌',
    });

    if (Object.values(pageChecks).some((passed) => !passed)) {
      rows[rows.length - 1].Failed = Object.entries(pageChecks)
        .filter(([, passed]) => !passed)
        .map(([name]) => name)
        .join(', ');
    }
  }

  console.table(rows);
  if (rows.some((row) => row.Failed)) {
    process.exitCode = 1;
  } else {
    console.log(`SEO audit passed for ${rows.length} sitemap URLs.`);
  }
} catch (error) {
  console.error(`SEO audit failed: ${error.message}`);
  process.exitCode = 1;
} finally {
  if (server) {
    await new Promise((resolveClose, reject) =>
      server.close((error) => error ? reject(error) : resolveClose())
    );
  }
}
