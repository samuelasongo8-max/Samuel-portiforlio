import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../../components/OptimizedImage';
import { setPageMeta, addStructuredData, getPersonSchema } from '../../utils/seo';
import './About.css';

export default function About() {
  useEffect(() => {
    setPageMeta(
      'About Samuel Asongo | Artist, Educator & Developer',
      'Learn about Samuel Asongo’s background as an artist, educator, developer, and community leader working in Kakuma Refugee Camp, Kenya.',
      'About Samuel Asongo, Samuel Asongo biography, Samuel Asongo Kenya, Kakuma refugee camp, AUVD',
      '/Samuel Asongo.png',
      '/about'
    );
    addStructuredData(getPersonSchema());
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>My Journey</h1>
          <p className="hero-subtitle">
            From personal passion to social impact, my work is grounded in belief in human potential and creative expression.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <OptimizedImage src="/Samuel Asongo.png" alt="Samuel Asongo in a professional portrait" width="640" height="800" />
            </div>
            <div className="story-text">
              <h2>Who Am I?</h2>
              <p>
                I'm Samuel Asongo, a multi-disciplinary creator and social impact leader based in Kakuma Refugee Camp, Kenya. My life's work is centered on a simple yet powerful belief: that art, music, and technology can transform lives and build community, especially for those facing the greatest challenges.
              </p>
              <p>
                I grew up understanding the power of creative expression as both a personal tool for healing and a catalyst for community change. These experiences shaped my commitment to making arts and music education accessible to vulnerable populations.
              </p>
              <p>
                Today, I work across four interconnected domains: as a visual artist exploring identity and resilience, as a music educator empowering students through performance and theory, as a full-stack developer building solutions that serve communities, and as the CEO of AUVD (Art and Unity for Vulnerable Development) — an organization dedicated to integrated community transformation.
              </p>
              <p>
                I'm also proud to serve as an Ambassador for the Transylvanian Symphony Foundation, bringing classical music education and performance opportunities to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="timeline">
        <div className="container">
          <h2>Professional Journey</h2>
          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-marker">👨‍🎨</div>
              <div className="timeline-content">
                <h3>Artist & Visual Creator</h3>
                <p className="timeline-meta">Ongoing</p>
                <p>
                  Exploring themes of identity, resilience, and community through painting, drawing, and contemporary mixed media. My work has been exhibited in community galleries and contributes to social awareness campaigns.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🎵</div>
              <div className="timeline-content">
                <h3>Music Educator & Conductor</h3>
                <p className="timeline-meta">2015 - Present</p>
                <p>
                  Founded and directed music education programs serving 150+ students across 4 weekly classes. Managed team of 11 instructors and coordinated 120+ musical instruments. Developed curriculum combining Western classical tradition with local musical heritage.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">💻</div>
              <div className="timeline-content">
                <h3>Full-Stack Web Developer</h3>
                <p className="timeline-meta">2018 - Present</p>
                <p>
                  Self-taught and formally trained in modern web development. Specialize in React, Node.js, and responsive design. Developed applications serving educational and community development organizations.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🌍</div>
              <div className="timeline-content">
                <h3>CEO & Founder, AUVD</h3>
                <p className="timeline-meta">2020 - Present</p>
                <p>
                  Founded Art and Unity for Vulnerable Development to scale impact across Kakuma Refugee Camp. AUVD integrates arts, music, youth development, and technology to create sustainable community transformation.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🎼</div>
              <div className="timeline-content">
                <h3>Transylvanian Symphony Foundation Ambassador</h3>
                <p className="timeline-meta">2022 - Present</p>
                <p>
                  Ambassador bringing classical music education and performance opportunities to communities in Kakuma. Facilitate exchange between international musicians and local students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🎨 Creativity</h3>
              <p>
                I believe creative expression is fundamental to human dignity and social transformation.
              </p>
            </div>
            <div className="value-card">
              <h3>🤝 Community</h3>
              <p>
                True change happens together. I'm committed to community-centered, participatory approaches.
              </p>
            </div>
            <div className="value-card">
              <h3>♿ Accessibility</h3>
              <p>
                Quality education and creative opportunities should be available to all, regardless of circumstances.
              </p>
            </div>
            <div className="value-card">
              <h3>🚀 Innovation</h3>
              <p>
                I embrace technology and modern approaches to reach more people and create sustainable impact.
              </p>
            </div>
            <div className="value-card">
              <h3>🌱 Sustainability</h3>
              <p>
                Building systems and capacities that endure, creating lasting change within communities.
              </p>
            </div>
            <div className="value-card">
              <h3>✨ Excellence</h3>
              <p>
                I strive for excellence in everything I do, serving as a model of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container-sm text-center">
          <h2>Let's Work Together</h2>
          <p>
            Whether you're interested in collaboration, partnership, commissioning work, or simply connecting around shared values, I'm always open to meaningful conversations.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn">
              See My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
