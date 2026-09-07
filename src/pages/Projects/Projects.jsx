import { useEffect, useState } from 'react';
import { setPageMeta } from '../../utils/seo';
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [heroBackground, setHeroBackground] = useState(0);
  
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Projects & Digital Work',
      'Explore Samuel Asongo’s portfolio of creative, educational, and technology projects spanning art, music, digital development, and social impact.',
      'Samuel Asongo projects, portfolio, creative projects, digital work, Samuel Asongo development projects',
      '/Samuel Asongo image.png',
      '/projects'
    );
  }, []);

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setHeroBackground((currentBackground) => (currentBackground + 1) % 4);
    }, 5000);

    return () => clearInterval(backgroundInterval);
  }, []);

  const projects = [
   
  {
    id: 1,
    status: 'upcoming',
    title: 'AUVD Community Platform',
    category: 'technology',
    description: 'Web platform in development for coordinating community programs across Kakuma Refugee Camp.',
    tech: ['React', 'Node.js', 'MongoDB'],
    outcome: 'Currently in development - goal is to improve program coordination efficiency'
  },
  {
    id: 2,
    status: 'completed',
    title: 'Music Education Portal',
    category: 'technology',
    description: 'Learning management system for music students with lesson materials and progress tracking, live at AUVD.',
    tech: ['React', 'Express', 'PostgreSQL'],
    outcome: 'Serving 150+ students with digital resources'
  },
  {
    id: 3,
    status: 'upcoming',
    title: 'Community Arts Exhibition',
    category: 'creative',
    description: 'Planned curated exhibition to feature works by artists from the Kakuma community.',
    tech: ['Curation', 'Digital Documentation'],
    outcome: 'In planning- targeting a launch to reach the community and a wider audience'
  },
  {
    id: 4,
    status: 'upcoming',
    title: 'Refugee Support Network',
    category: 'community',
    description: 'Mobile-friendly support network in development to connect resources and mentors with vulnerable youth.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    outcome: 'Currently in development'
  },
  {
    id: 5,
    status: 'upcoming',
    title: 'Music Festival Organization',
    category: 'creative',
    description: 'Community music festival concept in planning at AUVD, featuring student performances and guest artists.',
    tech: ['Event Planning', 'Community Coordination'],
    outcome: 'In planning by AUVD-no date confirmed yet'
  },
  {
    id: 6,
    status: 'upcoming',
    title: 'Nonprofit Dashboard',
    category: 'technology',
    description: 'Analytics dashboard I\'m building as a developer to help nonprofit organizations track program impact and outcomes.',
    tech: ['React', 'D3.js', 'API Integration'],
    outcome: 'In development'
  },
  {
    id: 7,
    status: 'upcoming',
    title: 'Artist Collective Website',
    category: 'creative',
    description: 'Digital portfolio and marketplace I\'m building as a developer for emerging artists in underserved communities.',
    tech: ['Next.js', 'Stripe', 'Supabase'],
    outcome: 'In development'
  },
  {
    id: 8,
    status: 'completed',
    title: 'Women Empowerment Initiative',
    category: 'community',
    description: 'Program combining skills training, mentorship, and microfinance for women in Kakuma, run by AUVD.',
    tech: ['Program Design', 'Partnership Coordination'],
    outcome: 'Empowering 200+ women with economic opportunities'
  },
  {
    id: 9,
    status: 'completed',
    title: 'Youth Leadership Program',
    category: 'community',
    description: 'Comprehensive leadership development program for youth aged 15-25 in refugee settings.',
    tech: ['Curriculum Design', 'Mentorship'],
    outcome: '100+ youth trained with 80% employment placement'
  }
];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'technology', label: 'Technology' },
    { value: 'creative', label: 'Creative' },
    { value: 'community', label: 'Community' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div
          className={`projects-hero-background projects-hero-background-one${heroBackground === 0 ? ' projects-hero-background-active' : ''}`}
          aria-hidden="true"
        />
        <div
          className={`projects-hero-background projects-hero-background-two${heroBackground === 1 ? ' projects-hero-background-active' : ''}`}
          aria-hidden="true"
        />
        <div
          className={`projects-hero-background projects-hero-background-three${heroBackground === 2 ? ' projects-hero-background-active' : ''}`}
          aria-hidden="true"
        />
        <div
          className={`projects-hero-background projects-hero-background-four${heroBackground === 3 ? ' projects-hero-background-active' : ''}`}
          aria-hidden="true"
        />
        <div className="container">
          <h1>Projects Portfolio</h1>
          <p className="subtitle">
            A selection of creative, educational, and technology projects spanning art, music, community development, and social innovation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button 
                key={cat.value}
                className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                <p className="project-outcome">
                  <strong>Outcome:</strong> {project.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>My Project Approach</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Understand</h3>
              <p>Deep dive into understanding the problem, community, and context.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design</h3>
              <p>Co-design solutions with stakeholders ensuring community input and ownership.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Create</h3>
              <p>Build solutions using appropriate tools and methodologies.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Evaluate</h3>
              <p>Measure impact and iterate based on feedback and outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="collaboration-cta">
        <div className="container-sm text-center">
          <h2>Let's Collaborate</h2>
          <p>
            I'm interested in projects that create meaningful social impact. If you have a vision that aligns with my values and expertise, let's talk.
          </p>
          <a href="/contact" className="btn-auvd">
            Propose a Project
          </a>
        </div>
      </section>
    </div>
  );
}
