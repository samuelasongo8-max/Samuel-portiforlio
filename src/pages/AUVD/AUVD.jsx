import { useEffect } from 'react';
import { setPageMeta } from '../../utils/seo';
import './AUVD.css';

export default function AUVD() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | CEO of Art and Unity for Vulnerable Development',
      'Learn about AUVD, the organization founded by Samuel Asongo to support vulnerable communities through art, music, education, and technology in Kakuma.',
      'Samuel Asongo AUVD, Art and Unity for Vulnerable Development, AUVD Kakuma, Samuel Asongo CEO, social impact organization',
      '/Samuel Asongo.png',
      '/auvd'
    );
  }, []);

  return (
    <div className="auvd-page">
      <section className="auvd-hero">
        <div className="container">
          <h1>AUVD</h1>
          <p className="subtitle">
            Art and Unity for Vulnerable Development
          </p>
          <p className="tagline">
            Creating opportunities through art, music, and community-centered development
          </p>
        </div>
      </section>

      <section className="auvd-mission">
        <div className="container-sm">
          <h2>Our Mission</h2>
          <p>
            AUVD (Art and Unity for Vulnerable Development) is dedicated to empowering vulnerable populations, particularly youth and women in refugee settings, through creative expression, quality education, and sustainable development initiatives.
          </p>
          <p>
            We believe that art, music, and creative engagement are not luxuries—they are essentials for human dignity, psychological well-being, and community resilience.
          </p>
        </div>
      </section>

      <section className="auvd-focus-areas">
        <div className="container">
          <h2>Our Focus Areas</h2>
          <div className="focus-grid">
            <div className="focus-card">
              <h3>🎨 Creative Arts</h3>
              <p>Visual arts programs building cultural identity and creative expression</p>
            </div>
            <div className="focus-card">
              <h3>🎵 Music Education</h3>
              <p>Comprehensive music instruction for 150+ students with access to 120+ instruments</p>
            </div>
            <div className="focus-card">
              <h3>👥 Youth Development</h3>
              <p>Leadership training and skills development for young people</p>
            </div>
            <div className="focus-card">
              <h3>👩‍💼 Women Empowerment</h3>
              <p>Economic empowerment and skills training for women's independence</p>
            </div>
            <div className="focus-card">
              <h3>💻 Digital Skills</h3>
              <p>Technology access and digital literacy for community members</p>
            </div>
            <div className="focus-card">
              <h3>🌍 Community Partnerships</h3>
              <p>Collaboration with international organizations and local stakeholders</p>
            </div>
          </div>
        </div>
      </section>

      <section className="auvd-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Community-Centered</h3>
              <p>Solutions designed with and by community members</p>
            </div>
            <div className="value-card">
              <h3>Inclusive & Accessible</h3>
              <p>Programs accessible to all regardless of background or ability</p>
            </div>
            <div className="value-card">
              <h3>Sustainable</h3>
              <p>Building local capacity for long-term impact</p>
            </div>
            <div className="value-card">
              <h3>Culturally Respectful</h3>
              <p>Honoring diverse cultures and traditions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="auvd-get-involved">
        <div className="container-sm text-center">
          <h2>Join the Movement</h2>
          <p>
            AUVD is creating meaningful opportunities for vulnerable populations. Whether through partnership, volunteering, or support, your involvement makes a difference.
          </p>
          <a href="/contact" className="btn">
            Partner With AUVD
          </a>
        </div>
      </section>
    </div>
  );
}
