import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Experience.css';

export default function Experience() {
  useEffect(() => {
    setPageMeta('experience');
  }, []);

  const roles = [
    {
      title: 'CEO & Founder, AUVD',
      period: '2025 - Present',
      description: 'Leads a multidisciplinary nonprofit focused on arts, music, youth development, and community empowerment.'
    },
    {
      title: 'Artist & Visual Creator',
      period: 'Ongoing',
      description: 'Creates visual work focused on identity, resilience, and community storytelling.'
    },
    {
      title: 'Music Educator & Conductor',
      period: '2025 - Present',
      description: 'Develops and delivers music education programs serving more than 150 students.'
    },
    {
      title: 'Full-Stack Web Developer',
      period: '2026 - Present',
      description: 'Builds responsive, accessible web applications for education and community-oriented initiatives.'
    },
    {
      title: 'TSF Ambassador',
      period: '2024 - Present',
      description: 'Represents the Transylvanian Symphony Foundation and supports music education outreach.'
    }
  ];

  return (
    <div className="experience-page">
      <section className="experience-hero">
        <div className="container">
          <h1>Samuel Asongo’s Professional Experience</h1>
          <p className="subtitle">A cross-disciplinary career rooted in creativity, learning, and community impact.</p>
        </div>
      </section>

      <section className="experience-list">
        <div className="container">
          <div className="timeline">
            {roles.map((role, index) => (
              <div key={index} className="timeline-item">
        
                <div className="timeline-card">
                  <h3>{role.title}</h3>
                  <p className="timeline-period">{role.period}</p>
                  <p>{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-approach">
        <div className="container-sm">
          <h2>Creative Leadership Across Fields</h2>
          <p>
            Samuel’s experience brings together community leadership, music
            education, visual arts, and web development. Across these roles, the
            common goal is to create useful opportunities for people to learn,
            express ideas, and take part in community life.
          </p>
          <p>
            As founder of Art and Unity for Vulnerable Development, Samuel leads
            an organization focused on arts, music, youth development, and
            community empowerment. His music education work includes developing
            programs serving more than 150 students, while his creative practice
            uses visual storytelling to explore identity and resilience.
          </p>
          <p>
            His technology work adds a practical digital perspective: building
            responsive, accessible web applications for education and
            community-oriented initiatives. The TSF ambassador role connects
            this local work with music education outreach and cultural exchange.
            Together, these experiences shape a collaborative approach grounded
            in creativity, learning, and service.
          </p>
          <p>
            Samuel is open to conversations about creative projects, education
            partnerships, technology work, and community initiatives. Visit the
            contact page to share a project idea or discuss a possible
            collaboration.
          </p>
          <p>
            This experience is not limited to one discipline. Program leadership
            calls for clear communication and collaboration; teaching requires
            patience and an understanding of different learning needs; and
            digital development depends on practical problem-solving. Bringing
            these perspectives together helps Samuel approach projects with
            both creative curiosity and attention to the people who will use or
            participate in them.
          </p>
        </div>
      </section>

      <section className="experience-cta">
        <div className="container-sm text-center">
          <h2>Interested in Working Together?</h2>
          <p>I am open to meaningful collaborations across art, education, technology, and social impact.</p>
          <Link to="/contact"  className="btn-auvd">Start a Conversation</Link>
        </div>
      </section>
    </div>
  );
}
