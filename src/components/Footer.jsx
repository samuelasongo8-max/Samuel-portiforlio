import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark">SA</span>
            </div>
            <p className="brand-tagline">Creating through art. Educating through music. Building through technology.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/samuel-asongo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.23-1.661-2.23-1.052 0-1.676.71-1.951 1.396-.1.244-.125.584-.125.925v5.478h-3.551s.047-8.887 0-9.806h3.551v1.391c-.009.015-.021.029-.031.042h.031v-.042c.44-.678 1.228-1.645 2.989-1.645 2.187 0 3.822 1.43 3.822 4.512v5.348zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.77-1.706 1.96-1.706 1.188 0 1.912.738 1.937 1.706 0 .948-.749 1.706-1.982 1.706zm1.581 11.597H3.715V9.646h3.203v10.806zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/samuel.asongo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 12c0 3.24-2.654 5.894-5.894 5.894S5.106 15.24 5.106 12 7.76 6.106 11 6.106s5.894 2.654 5.894 5.894zm1.646-5.894c0 .759-.615 1.375-1.375 1.375S16.79 6.865 16.79 6.106s.615-1.375 1.375-1.375 1.375.616 1.375 1.375z"/>
                </svg>
              </a>
              <a href="https://github.com/samuelasongo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:samuel@auvd.org" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/creative">Creative</Link></li>
              <li><Link to="/music">Music</Link></li>
              <li><Link to="/development">Development</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projects</h4>
            <ul>
              <li><Link to="/projects">All Projects</Link></li>
              <li><Link to="/auvd">AUVD</Link></li>
              <li><Link to="/ambassador">Ambassador</Link></li>
              <li><Link to="/impact">Social Impact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul>
              <li><Link to="/contact">Contact Me</Link></li>
              <li><Link to="/stories">Stories & Blog</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><a href="mailto:samuel@auvd.org">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Samuel Asongo. All rights reserved.</p>
          <p className="footer-message">Creating meaningful impact through art, music, and technology.</p>
        </div>
      </div>
    </footer>
  );
}