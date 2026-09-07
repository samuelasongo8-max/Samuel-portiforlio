import { useEffect } from 'react';
import { setPageMeta } from '../../utils/seo';
import './Development.css';

export default function Development() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Full-Stack Web Developer',
      'See Samuel Asongo’s full-stack web development work built with React, Node.js, and modern, accessible web technologies.',
      'Samuel Asongo full-stack web developer, React developer, Node.js developer, web development, Samuel Asongo development',
      '/Samuel as a Fulstack developer.jpg',
      '/development'
    );
  }, []);

  const techStack = {
    frontend: ['React', 'HTML5 & CSS3', 'JavaScript/ES6+', 'Responsive Design', 'Vite', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Authentication & Security', 'Server-side Logic'],
    database: ['MongoDB', 'PostgreSQL', 'Database Design', 'Query Optimization'],
    tools: ['Git & GitHub', 'VS Code', 'NPM/Yarn', 'Vercel', 'DevTools & Debugging', 'Testing Frameworks']
  };

  const principles = [
    {
      title: 'User-Centric Design',
      description: 'Every application is built with the end-user in mind, prioritizing usability and accessibility.'
    },
    {
      title: 'Responsive & Mobile-First',
      description: 'Applications work beautifully on all devices, from mobile phones to large desktop screens.',
      color: 'blue'
    },
    {
      title: 'Performance Optimized',
      description: 'Fast loading times, efficient rendering, and optimized code for the best user experience.'
    },
    {
      title: 'Accessible by Default',
      description: 'WCAG compliance and semantic HTML ensure applications are usable by everyone.',
      color: 'orange'
    },
    {
      title: 'Clean Code Architecture',
      description: 'Well-organized, maintainable code that follows industry best practices and design patterns.'
    },
    {
      title: 'Security First',
      description: 'Protection against common vulnerabilities and best practices for data security and privacy.',
      color: 'green'
    }
  ];

  const services = [
    {
      title: 'Websites & Web Apps',
      description: 'Custom responsive websites and single-page applications tailored to your needs and goals.',
      color: 'blue'
    },
    {
      title: 'Interactive Experiences',
      description: 'Engaging, interactive user experiences that combine beautiful design with smooth functionality.'
    },
    {
      title: 'Mobile-Responsive Design',
      description: 'Applications that work seamlessly across all devices and screen sizes.'
    },
    {
      title: 'Performance Optimization',
      description: 'Fast-loading, efficient applications that provide excellent user experience.',
      color: 'orange'
    },
    {
      title: 'Accessible Applications',
      description: 'Inclusive design ensuring your application is usable by everyone, regardless of abilities.',
      color: 'green'
    },
    {
      title: 'Custom Solutions',
      description: 'Bespoke solutions to solve unique organizational challenges and opportunities.'
    }
  ];

  return (
    <div className="development-page">
      {/* Hero Section */}
      <section className="development-hero">
        <div className="container">
          <h1>Web Development</h1>
          <p className="subtitle">
            Full-stack web developer creating responsive, accessible, and performant applications.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="dev-intro">
        <div className="dev-intro-bordered">
          <svg
            className="dev-intro-border-svg"
            viewBox="0 0 700 380"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="none"
              stroke="#ea580c"
              strokeWidth="4"
              strokeLinejoin="round"
              d="M82 45 C60 44 45 34 50 20 C55 7 78 7 91 18 C102 28 94 43 80 44 C70 45 64 38 68 31 C72 24 84 27 87 35 L615 35 C616 27 628 24 632 31 C636 38 630 45 620 44 C606 43 598 28 609 18 C622 7 645 7 650 20 C655 34 640 44 618 45 L618 75 L628 83 L618 91 L618 135 L628 143 L618 151 L618 198 L628 206 L618 214 L618 260 L628 268 L618 276 L618 315 C640 316 655 326 650 340 C645 353 622 353 609 342 C598 332 606 317 620 316 C630 315 636 322 632 329 C628 336 616 333 613 325 L87 325 C84 333 72 336 68 329 C64 322 70 315 80 316 C94 317 102 332 91 342 C78 353 55 353 50 340 C45 326 60 316 82 315 L82 276 L72 268 L82 260 L82 214 L72 206 L82 198 L82 151 L72 143 L82 135 L82 91 L72 83 L82 75 Z"
            />
            </svg>
            <svg
              className="dev-intro-scroll-cap dev-intro-scroll-cap-top"
              viewBox="0 0 700 70"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="#ea580c"
                strokeWidth="4"
                strokeLinejoin="round"
                d="M20 52 C12 38 22 18 45 18 C70 18 86 34 78 48 C72 58 55 57 50 46 C46 37 57 30 67 36 C90 44 120 38 150 40 L550 40 C580 38 610 44 633 36 C643 30 654 37 650 46 C645 57 628 58 622 48 C614 34 630 18 655 18 C678 18 688 38 680 52"
              />
            </svg>
            <svg
              className="dev-intro-scroll-cap dev-intro-scroll-cap-bottom"
              viewBox="0 0 700 70"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="#ea580c"
                strokeWidth="4"
                strokeLinejoin="round"
                d="M20 18 C12 32 22 52 45 52 C70 52 86 36 78 22 C72 12 55 13 50 24 C46 33 57 40 67 34 C90 26 120 32 150 30 L550 30 C580 32 610 26 633 34 C643 40 654 33 650 24 C645 13 628 12 622 22 C614 36 630 52 655 52 C678 52 688 32 680 18"
              />
            </svg>
          <div className="dev-intro-content">
            <div className="container-sm">
              <h2>About My Development Work</h2>
              <p>
                I'm a self-taught and formally trained full-stack web developer specializing in modern JavaScript frameworks and responsive web design. I build applications that are not just functional, but delightful to use, with a focus on accessibility and performance.
              </p>
              <p>
                My development journey began as a way to solve real problems in my community. Now, I use technology to build tools that help organizations reach more people, streamline their operations, and create meaningful social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <h2>Tech Stack</h2>
          <div className="tech-spreadsheet">
            <table className="tech-ledger">
              <thead>
                <tr><th scope="col">Frontend</th></tr>
              </thead>
              <tbody>
                {techStack.frontend.map((tech, index) => (
                  <tr key={index}><td>{tech}</td></tr>
                ))}
              </tbody>
            </table>

            <table className="tech-ledger">
              <thead>
                <tr><th scope="col">Backend</th></tr>
              </thead>
              <tbody>
                {techStack.backend.map((tech, index) => (
                  <tr key={index}><td>{tech}</td></tr>
                ))}
              </tbody>
            </table>

            <table className="tech-ledger">
              <thead>
                <tr><th scope="col">Database</th></tr>
              </thead>
              <tbody>
                {techStack.database.map((tech, index) => (
                  <tr key={index}><td>{tech}</td></tr>
                ))}
              </tbody>
            </table>

            <table className="tech-ledger">
              <thead>
                <tr><th scope="col">Tools & Services</th></tr>
              </thead>
              <tbody>
                {techStack.tools.map((tech, index) => (
                  <tr key={index}><td>{tech}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="principles">
        <div className="container">
          <h2>Development Principles</h2>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div key={index} className={`principle-card ${principle.color ? `principle-card-${principle.color}` : ''}`}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container-sm">
          <h2>What I Can Build</h2>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className={`service-item ${service.color ? `service-item-${service.color}` : ''}`}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dev-cta">
        <div className="container-sm text-center">
          <h2>Ready to Build Something Amazing?</h2>
          <p>
            Whether you need a new website, an internal tool, or a complete web application, let's talk about your vision and how I can bring it to life.
          </p>
          <a href="/contact" className="btn">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}