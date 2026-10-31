import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pageSeo } from '../src/utils/pageSeo.js';

const distPath = resolve(process.cwd(), 'dist');
const rootMarker = '<div id="root"></div>';
const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { hmr: false, middlewareMode: true },
});

try {
  const { default: AppContent } = await vite.ssrLoadModule('/src/App.server.jsx');
  const routes = [
    ...Object.values(pageSeo).filter((page) => page.path !== null),
    { ...pageSeo.notFound, path: '/__not-found' },
  ];

  await Promise.all(
    routes.map(async (page) => {
      const outputPath = page.path === '/__not-found'
        ? resolve(distPath, '404.html')
        : page.path === '/'
          ? resolve(distPath, 'index.html')
          : resolve(distPath, page.path.slice(1), 'index.html');
      const html = await readFile(outputPath, 'utf8');

      if (!html.includes(rootMarker)) {
        throw new Error(`Missing React root in ${outputPath}.`);
      }

      const renderedApp = renderToString(
        createElement(
          StaticRouter,
          { location: page.path },
          createElement(AppContent)
        )
      );
      const renderedHtml = html.replace(
        rootMarker,
        `<div id="root">${renderedApp}</div>`
      );

      await mkdir(resolve(outputPath, '..'), { recursive: true });
      await writeFile(outputPath, renderedHtml, 'utf8');
    })
  );
} finally {
  await vite.close();
}
