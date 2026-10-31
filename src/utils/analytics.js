import { pageSeo } from './pageSeo';

const ga4Id = import.meta.env.VITE_GA4_ID?.trim();
const gtmId = import.meta.env.VITE_GTM_ID?.trim();
let gaInitialized = false;
let gtmInitialized = false;

const initializeGa4 = () => {
  if (!ga4Id || gaInitialized || typeof window === 'undefined') return;

  if (window.__ga4Initialized) {
    gaInitialized = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', ga4Id, { send_page_view: false });

  const scriptUrl = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
  if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.ga4 = ga4Id;
    script.src = scriptUrl;
    document.head.appendChild(script);
  }

  window.__ga4Initialized = true;
  gaInitialized = true;
};

const initializeGtm = () => {
  if (!gtmId || gtmInitialized || typeof window === 'undefined') return;

  if (window.__gtmInitialized) {
    gtmInitialized = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  if (!document.querySelector(`script[data-gtm="${gtmId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.gtm = gtmId;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    document.head.appendChild(script);
  }
  window.__gtmInitialized = true;

  gtmInitialized = true;
};

const initializeAnalytics = () => {
  initializeGa4();
  initializeGtm();
};

export const trackPageView = (path) => {
  if (!path || typeof window === 'undefined') return;

  initializeAnalytics();
  const page = Object.values(pageSeo).find((candidate) => candidate.path === path);
  const pageLocation = `${window.location.origin}${path}`;
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: pageLocation,
    page_title: page?.title || document.title,
  });
  if (gtmId) {
    window.dataLayer?.push({
      event: 'virtual_page_view',
      page_path: path,
      page_location: pageLocation,
      page_title: page?.title || document.title,
    });
  }
};

export const trackEvent = (category, action, label, value) => {
  if (!category || !action || typeof window === 'undefined') return;

  initializeAnalytics();
  const parameters = {
    event_category: category,
    ...(label ? { event_label: label } : {}),
    ...(Number.isFinite(value) ? { value } : {}),
  };
  window.gtag?.('event', action, parameters);
  if (gtmId) {
    window.dataLayer?.push({ event: action, ...parameters });
  }
};
