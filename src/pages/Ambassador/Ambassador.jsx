import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../../components/OptimizedImage';
import { setPageMeta } from '../../utils/seo';
import './Ambassador.css';

export default function Ambassador() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Ambassador, Transylvanian Symphony Foundation',
      'Discover Samuel Asongo’s role as an ambassador for the Transylvanian Symphony Foundation and his work connecting music education with underserved communities.',
      'Samuel Asongo TSF, Transylvanian Symphony Foundation ambassador, Samuel Asongo ambassador, music education outreach',
      '/Samuel as an Ambasodor at Trasylvanian Symphony Foundation.jpg',
      '/ambassador'
    );
  }, []);

  return (
    <div className="ambassador-page">
    
      <section className="ambassador-hero">
        <div className="container">
          <h1>TSF Ambassador</h1>
          <p className="subtitle">Representing the Transylvanian Symphony Foundation through music education and cultural exchange.</p>
        </div>
      </section>

      <section className="ambassador-intro">
        <div className="container-sm">
          <h2>My Role</h2>
          <p>
            As an ambassador for the Transylvanian Symphony Foundation, I help connect the worlds of classical music, community education, and refugee empowerment. My work emphasizes bringing high-quality artistic experiences to communities that often lack access to them.
          </p>
          <p>
            This role allows me to advocate for educational access, cultural exchange, and the transformational power of performance and music literacy.
          </p>
        </div>
      </section>

      <section className="ambassador-focus">
        <div className="container">
          <h2>Key Responsibilities</h2>
          <div className="focus-grid">
            <div className="focus-card">
              <h3>Music Outreach</h3>
              <p>Connecting students to performance opportunities and classical music education.</p>
            </div>
            <div className="focus-card">
              <h3> Cultural Exchange</h3>
              <p>Bridging local and international artistic communities through shared experience.</p>
            </div>
            <div className="focus-card">
              <h3>Community Development</h3>
              <p>Supporting community building through concerts, workshops, and educational events.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ambassador-cta">
        <div className="container-sm text-center">
          <h2>Collaborate With Me</h2>
          <p>If you are interested in music education partnerships or community arts engagement, I would be happy to connect.</p>
          <Link to="/contact"  className="btn-auvd">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
