# Samuel Asongo Portfolio

React and Vite portfolio for Samuel Asongo.

## Development

```powershell
npm install
npm run dev
```

## Production SEO setup

The production hostname is configured in `.env.production`:

```dotenv
VITE_SITE_URL=https://samuel-portiforlio.vercel.app
```

Update it if the public domain changes. The production build creates route-specific metadata and server-rendered page content, absolute canonical/social URLs, `sitemap.xml`, a Vercel `404.html`, and a `robots.txt` sitemap reference from this value. Without a configured domain, the build omits canonical URLs and the sitemap.

```powershell
npm run build
```

Page titles, descriptions, route paths, and social images are maintained in `src/utils/pageSeo.js`. New public routes should be added there to include them in prerendered metadata and the sitemap.

## Deployment requirements

`vercel.json` applies the security headers and immutable caching for hashed build assets. Vercel supplies HTTPS certificates, HTTP-to-HTTPS redirects, compression, and its CDN. After deployment, verify the site in Google Search Console and submit `/sitemap.xml`.

For a different host, configure it to:

- Redirect HTTP to HTTPS with a permanent redirect.
- Serve the generated route folders and rewrite unknown routes to the app with an actual HTTP 404 response where supported.
- Enable Brotli or gzip and long-lived immutable caching for hashed files in `dist/assets/`.
- Set security headers (HSTS only after HTTPS is enabled; `X-Content-Type-Options`, frame protection, and a CSP compatible with the app).
- Configure a CDN and edge caching if needed for your audience.

Search Console verification, GA4, and Tag Manager require real account IDs and—where required—consent configuration. They are intentionally not populated with fake IDs.

To enable these integrations, set `VITE_GOOGLE_SITE_VERIFICATION`, `VITE_GA4_ID`, and/or `VITE_GTM_ID` in the Vercel project environment, then redeploy. The build inserts valid IDs into the generated HTML and loads Google scripts asynchronously. Configure GA4 page views in either GA4 directly or through GTM, not both, to avoid duplicate counts. No analytics is sent until a real ID is configured.

`public/business-info.json` is a Google Business Profile preparation file; add verified public contact details and hours before using it. No reviews or ratings are published until genuine, permissioned testimonials and rating data are available. English is currently the only site language, so hreflang is not needed.

<!-- Set up free uptime monitoring at uptimerobot.com — downtime hurts Google rankings. -->

Set up free uptime monitoring at [UptimeRobot](https://uptimerobot.com/) — downtime can harm user experience and organic visibility.

## SEO checks and editorial content

`npm run audit` builds and prerenders every public route, runs `scripts/seo-audit.js` against the generated sitemap, and runs Lighthouse CI against the 16 current routes. Lighthouse scores are asserted at the thresholds in `.lighthouserc.json`. The local audit reports sitemap, title, description, H1, canonical, social image, and JSON-LD checks.

News articles are published at `/news` and individual `/news/<slug>` routes. Replace the starter drafts in `src/utils/newsArticles.js` with reviewed, fact-checked articles before treating them as reporting. Homepage testimonial cards are clearly marked placeholders; add real quotations and reviewer details only after receiving permission. Do not add review or aggregate-rating structured data until it reflects genuine, independently sourced reviews and complies with the search platform’s review policies.

The homepage LocalBusiness schema currently uses the Kakuma locality and the hours provided for this setup. Verify the operating hours and confirm that a public-facing local business listing is appropriate before relying on that markup. The contact email is taken from the existing contact page and should be confirmed before press-kit publication.
