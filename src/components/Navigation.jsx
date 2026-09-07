import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
           <span className="nav-tagline">Create. Educate. Empower.</span>
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about')}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          
          <li className={`nav-item dropdown ${activeDropdown === 'work' ? 'active' : ''}`}>
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown('work')}
              aria-expanded={activeDropdown === 'work'}
            >
              Work
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/creative" 
                  className={`nav-link ${isActive('/creative')}`}
                  onClick={closeMenu}
                >
                  Creative Arts
                </Link>
              </li>
              <li>
                <Link 
                  to="/music" 
                  className={`nav-link ${isActive('/music')}`}
                  onClick={closeMenu}
                >
                  Music Education
                </Link>
              </li>
              <li>
                <Link 
                  to="/development" 
                  className={`nav-link ${isActive('/development')}`}
                  onClick={closeMenu}
                >
                  Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`nav-link ${isActive('/projects')}`}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </li>

          <li className={`nav-item dropdown ${activeDropdown === 'impact' ? 'active' : ''}`}>
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown('impact')}
              aria-expanded={activeDropdown === 'impact'}
            >
              Impact
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/impact" 
                  className={`nav-link ${isActive('/impact')}`}
                  onClick={closeMenu}
                >
                  Social Impact
                </Link>
              </li>
              <li>
                <Link 
                  to="/auvd" 
                  className={`nav-link ${isActive('/auvd')}`}
                  onClick={closeMenu}
                >
                  AUVD
                </Link>
              </li>
              <li>
                <Link 
                  to="/ambassador" 
                  className={`nav-link ${isActive('/ambassador')}`}
                  onClick={closeMenu}
                >
                  TSF Ambassador
                </Link>
              </li>
            </ul>
          </li>

          <li className={`nav-item dropdown ${activeDropdown === 'more' ? 'active' : ''}`}>
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown('more')}
              aria-expanded={activeDropdown === 'more'}
            >
              More
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/experience" 
                  className={`nav-link ${isActive('/experience')}`}
                  onClick={closeMenu}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="/stories" 
                  className={`nav-link ${isActive('/stories')}`}
                  onClick={closeMenu}
                >
                  Stories
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link nav-cta ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              Let's Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
