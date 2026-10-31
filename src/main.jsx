import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { onCLS, onINP, onLCP, onTTFB } from 'web-vitals'
import './index.css'
import App from './App.jsx'
import { preloadRoute } from './routePages.js'
import { trackEvent } from './utils/analytics.js'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Missing React root element.')

const hydrateApp = (initialPage) => hydrateRoot(
  rootElement,
  <StrictMode>
    <App initialPage={initialPage} />
  </StrictMode>,
)

preloadRoute(window.location.pathname).then(
  hydrateApp,
  (error) => {
    console.error('Failed to preload the current route before hydration.', error)
    hydrateApp(null)
  },
)

if (import.meta.env.VITE_GA4_ID || import.meta.env.VITE_GTM_ID) {
  const reportVital = (metric) => {
    const value = metric.name === 'CLS'
      ? Math.round(metric.value * 1000)
      : Math.round(metric.value)

    trackEvent('web_vitals', metric.name, metric.rating, value)
  }

  onCLS(reportVital)
  onINP(reportVital)
  onLCP(reportVital)
  onTTFB(reportVital)
}
