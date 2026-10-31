import { Suspense, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import RelatedPages from './components/RelatedPages';
import { setPageMeta } from './utils/seo';
import { trackPageView } from './utils/analytics';

function RouteTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

function NotFound() {
  useEffect(() => {
    setPageMeta('notFound', { robots: 'noindex, follow' });
  }, []);

  return (
    <section className="not-found-page">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return to the homepage</Link>
    </section>
  );
}

export default function AppContent({ pages }) {
  const {
    Home,
    About,
    Creative,
    Music,
    Development,
    Projects,
    Impact,
    AUVD,
    Ambassador,
    Experience,
    Stories,
    Contact,
    News,
  } = pages;

  return (
    <div className="app-shell">
      <RouteTracker />
      <Navigation />
      <Layout>
        <Suspense fallback={<p className="route-loading" role="status">Loading page…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/music" element={<Music />} />
            <Route path="/development" element={<Development />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/auvd" element={<AUVD />} />
            <Route path="/ambassador" element={<Ambassador />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <RelatedPages />
      </Layout>
      <Footer />
    </div>
  );
}
