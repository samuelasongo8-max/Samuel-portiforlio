import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../../components/OptimizedImage';
import { setPageMeta, addStructuredData, getPersonSchema } from '../../utils/seo';
import './Home.css';

const AUVD_IMAGES = [
  {
    src: '/Samuel Asongo Teaching Kids how to play Music Instruments1.jpg',
    alt: 'Samuel Asongo teaching music to students in Kakuma Refugee Camp, Kenya',
  },
  {
    src: '/Samuel Asongo Teaching Kids how to play Music Instruments2.jpg',
    alt: 'Samuel Asongo guiding a student through a music lesson in Kakuma',
  },
  {
    src: '/Samuel Asongo Teaching Kids how to play Music Instruments3.jpg',
    alt: 'Students learning musical instruments with Samuel Asongo in Kakuma',
  },
];

export default function Home() {
  const rootRef = useRef(null);
  const [activeAuvdImage, setActiveAuvdImage] = useState(0);

  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Artist, Music Educator & Full-Stack Web Developer',
      'Samuel Asongo is an artist, music educator, full-stack web developer, CEO of AUVD, and social impact leader based in Kakuma Refugee Camp, Kenya.',
      'Samuel Asongo, Samuel Asongo Kenya, Samuel Asongo Kakuma, Samuel Asongo AUVD, Samuel Asongo Artist, Samuel Asongo Music Educator, Samuel Asongo Full-Stack Web Developer, Samuel Asongo CEO',
      '/Samuel Asongo image.png',
      '/'
    );
    addStructuredData(getPersonSchema());
  }, []);

  // Drives the .home-page section > * reveal transition defined in Home.css.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = root.querySelectorAll('section');

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // AUVD image slideshow — cycles every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAuvdImage((prev) => (prev + 1) % AUVD_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page" ref={rootRef}>
      {/* Hero Section */}
      <section className="hero-section is-visible">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Samuel Asongo</h1>
              <p className="hero-subtitle">
                Creating through art. Educating through music. Building through technology.
              </p>
              <p className="hero-description">
                Artist | Music Educator | Full-Stack Developer | CEO of AUVD | TSF Ambassador
              </p>
              <p className="hero-bio">
                I'm a multi-disciplinary creator and social impact leader based in Kakuma Refugee Camp, dedicated to empowering vulnerable communities through art, music education, and technology innovation.
              </p>
              <div className="hero-cta">
                <Link to="/about" className="btn-auvd">
                  Learn My Story
                </Link>
              <Link to="/contact" className="btn-auvd">
  Let's Connect
</Link>
              </div>
            </div>
            <div className="hero-image">
              <OptimizedImage src="/Samuel Asongo image.png" alt="Samuel Asongo portrait as an artist, educator, and developer" width="720" height="900" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Areas */}
      <section className="featured-areas">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon"></div>
              <p className="area-label">CREATIVE&nbsp;&nbsp;|&nbsp;&nbsp;ARTS</p>
              <h3>Creative Arts</h3>
              <p className="area-desc">
                Visual storytelling through painting, drawing, and contemporary art
                that explores identity and community.
              </p>
              <Link to="/creative" className="area-link">
                Explore Creative Work <span aria-hidden="true">›</span>
              </Link>
            </div>

            <div className="area-card">
              <div className="area-icon"></div>
              <p className="area-label">MUSIC&nbsp;&nbsp;|&nbsp;&nbsp;EDUCATION</p>
              <h3>Music Education</h3>
              <p className="area-desc">
                Educating 150+ students across 4 classes weekly with 11 instructors
                and 120+ instruments in Kakuma.
              </p>
              <Link to="/music" className="area-link">
                Music Programs <span aria-hidden="true">›</span>
              </Link>
            </div>

            <div className="area-card">
              <div className="area-icon"></div>
              <p className="area-label">WEB&nbsp;&nbsp;|&nbsp;&nbsp;DEVELOPMENT</p>
              <h3>Web Development</h3>
              <p className="area-desc">
                Full-stack developer building responsive, accessible applications
                using modern frameworks and tools.
              </p>
              <Link to="/development" className="area-link">
                Tech Stack <span aria-hidden="true">›</span>
              </Link>
            </div>

            <div className="area-card">
              <div className="area-icon"></div>
              <p className="area-label">SOCIAL&nbsp;&nbsp;|&nbsp;&nbsp;IMPACT</p>
              <h3>Social Impact</h3>
              <p className="area-desc">
                Leading AUVD to create sustainable change through community-centered
                arts, music, and technology programs.
              </p>
              <Link to="/impact" className="area-link">
                Impact Stories <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUVD Highlight */}
      <section className="auvd-highlight">
        <div className="auvd-highlight-grid">
          <div className="auvd-highlight-image">
            <div className="auvd-slideshow">
              {AUVD_IMAGES.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`auvd-slide ${index === activeAuvdImage ? 'is-active' : ''}`}
                />
              ))}
              <div className="auvd-slideshow-dots">
                {AUVD_IMAGES.map((_, index) => (
                  <span
                    key={index}
                    className={`auvd-dot ${index === activeAuvdImage ? 'is-active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="auvd-highlight-text">
            <h2>Art and Unity for Vulnerable Development</h2>
            <div className="auvd-divider"></div>
            <p className="highlight-description">
              AUVD is my organization dedicated to empowering vulnerable
              communities particularly in Kakuma Refugee Camp through integrated
              programs in creative arts, music education, youth development, and
              women's economic empowerment.
            </p>
            <ul className="highlight-list">
              <li>150+ music students across multiple classes</li>
              <li>11 music instructors and coordinators</li>
              <li>120+ musical instruments in circulation</li>
              <li>Community art workshops and exhibitions</li>
              <li>Youth leadership programs</li>
              <li>Women's empowerment initiatives</li>
            </ul>
           <Link to="/auvd" className="btn-auvd">
  Learn About AUVD
</Link>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="quote-section">
        <div className="container-sm text-center">
          <blockquote className="quote">
            "Art is not just about creating beautiful things; it's about creating opportunities, dignity, and hope for those who have been displaced by circumstances beyond their control."
          </blockquote>
          <p className="quote-author">— Samuel Asongo</p>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="projects-preview">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Project One</h3>
              <p className="project-type">Web Application</p>
              <p>A responsive web application built with React and modern web technologies.</p>
            </div>
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Community Arts Initiative</h3>
              <p className="project-type">Creative Program</p>
              <p>An integrated community arts program combining visual and performing arts.</p>
            </div>
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Music Education Platform</h3>
              <p className="project-type">Education Technology</p>
              <p>Digital platform supporting music education delivery to students in resource-limited settings.</p>
            </div>
          </div>
          <div className="text-center mt-60">
            <Link to="/projects" className="btn-auvd">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-final">
        <div className="container-sm text-center">
          <h2>Let's Create Something Meaningful Together</h2>
          <p>Whether you're interested in collaboration, commissioning work, or just connecting, I'd love to hear from you.</p>
          <Link to="/contact"className="btn-auvd">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}