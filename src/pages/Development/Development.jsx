import { useEffect } from 'react';
import OptimizedImage from '../../components/OptimizedImage';
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
    frontend: [
      { name: 'React', level: '⭐⭐⭐⭐⭐' },
      { name: 'HTML5 & CSS3', level: '⭐⭐⭐⭐⭐' },
      { name: 'JavaScript/ES6+', level: '⭐⭐⭐⭐⭐' },
      { name: 'Responsive Design', level: '⭐⭐⭐⭐⭐' },
      { name: 'Vite', level: '⭐⭐⭐⭐' },
      { name: 'TypeScript', level: '⭐⭐⭐⭐' }
    ],
    backend: [
      { name: 'Node.js', level: '⭐⭐⭐⭐' },
      { name: 'Express.js', level: '⭐⭐⭐⭐' },
      { name: 'REST APIs', level: '⭐⭐⭐⭐⭐' },
      { name: 'Authentication & Security', level: '⭐⭐⭐⭐' },
      { name: 'Server-side Logic', level: '⭐⭐⭐⭐' }
    ],
    database: [
      { name: 'MongoDB', level: '⭐⭐⭐⭐' },
      { name: 'PostgreSQL', level: '⭐⭐⭐⭐' },
      { name: 'Database Design', level: '⭐⭐⭐⭐' },
      { name: 'Query Optimization', level: '⭐⭐⭐⭐' }
    ],
    tools: [
      { name: 'Git & GitHub', level: '⭐⭐⭐⭐⭐' },
      { name: 'VS Code', level: '⭐⭐⭐⭐⭐' },
      { name: 'NPM/Yarn', level: '⭐⭐⭐⭐' },
      { name: 'Vercel', level: '⭐⭐⭐⭐' },
      { name: 'DevTools & Debugging', level: '⭐⭐⭐⭐⭐' },
      { name: 'Testing Frameworks', level: '⭐⭐⭐⭐' }
    ]
  };

  const principles = [
    {
      title: 'User-Centric Design',
      description: 'Every application is built with the end-user in mind, prioritizing usability and accessibility.'
    },
    {
      title: 'Responsive & Mobile-First',
      description: 'Applications work beautifully on all devices, from mobile phones to large desktop screens.'
    },
    {
      title: 'Performance Optimized',
      description: 'Fast loading times, efficient rendering, and optimized code for the best user experience.'
    },
    {
      title: 'Accessible by Default',
      description: 'WCAG compliance and semantic HTML ensure applications are usable by everyone.'
    },
    {
      title: 'Clean Code Architecture',
      description: 'Well-organized, maintainable code that follows industry best practices and design patterns.'
    },
    {
      title: 'Security First',
      description: 'Protection against common vulnerabilities and best practices for data security and privacy.'
    }
  ];

  return (
    <div className="development-page">
      <section className="development-hero-image">
        <div className="container">
          <OptimizedImage src="/Samuel as a Fulstack developer.jpg" alt="Samuel Asongo as a full-stack web developer working on technology projects" width="1200" height="700" />
        </div>
      </section>
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
        <div className="container-sm">
          <h2>About My Development Work</h2>
          <p>
            I'm a self-taught and formally trained full-stack web developer specializing in modern JavaScript frameworks and responsive web design. I build applications that are not just functional, but delightful to use, with a focus on accessibility and performance.
          </p>
          <p>
            My development journey began as a way to solve real problems in my community. Now, I use technology to build tools that help organizations reach more people, streamline their operations, and create meaningful social impact.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <h2>Tech Stack</h2>
          <div className="tech-categories">
            {/* Frontend */}
            <div className="tech-category">
              <h3>💻 Frontend</h3>
              <div className="tech-list">
                {techStack.frontend.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-level">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="tech-category">
              <h3>🔧 Backend</h3>
              <div className="tech-list">
                {techStack.backend.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-level">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="tech-category">
              <h3>💾 Database</h3>
              <div className="tech-list">
                {techStack.database.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-level">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="tech-category">
              <h3>🛠️ Tools & Services</h3>
              <div className="tech-list">
                {techStack.tools.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-level">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="principles">
        <div className="container">
          <h2>Development Principles</h2>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card">
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
            <div className="service-item">
              <h3>🌐 Websites & Web Apps</h3>
              <p>Custom responsive websites and single-page applications tailored to your needs and goals.</p>
            </div>
            <div className="service-item">
              <h3>🎨 Interactive Experiences</h3>
              <p>Engaging, interactive user experiences that combine beautiful design with smooth functionality.</p>
            </div>
            <div className="service-item">
              <h3>📱 Mobile-Responsive Design</h3>
              <p>Applications that work seamlessly across all devices and screen sizes.</p>
            </div>
            <div className="service-item">
              <h3>🚀 Performance Optimization</h3>
              <p>Fast-loading, efficient applications that provide excellent user experience.</p>
            </div>
            <div className="service-item">
              <h3>♿ Accessible Applications</h3>
              <p>Inclusive design ensuring your application is usable by everyone, regardless of abilities.</p>
            </div>
            <div className="service-item">
              <h3>🔧 Custom Solutions</h3>
              <p>Bespoke solutions to solve unique organizational challenges and opportunities.</p>
            </div>
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
