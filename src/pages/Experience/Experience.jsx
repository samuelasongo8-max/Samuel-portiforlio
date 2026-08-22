import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Experience.css';

export default function Experience() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Experience & Leadership',
      'Review Samuel Asongo’s experience across art, music education, web development, leadership, and community-centered social impact work.',
      'Samuel Asongo experience, leadership, artist, music educator, full-stack developer, AUVD CEO',
      '/Samuel Asongo.png',
      '/experience'
    );
  }, []);

  const roles = [
    {
      title: 'CEO & Founder, AUVD',
      period: '2020 - Present',
      description: 'Leads a multidisciplinary nonprofit focused on arts, music, youth development, and community empowerment.'
    },
    {
      title: 'Artist & Visual Creator',
      period: 'Ongoing',
      description: 'Creates visual work focused on identity, resilience, and community storytelling.'
    },
    {
      title: 'Music Educator & Conductor',
      period: '2015 - Present',
      description: 'Develops and delivers music education programs serving more than 150 students.'
    },
    {
      title: 'Full-Stack Web Developer',
      period: '2018 - Present',
      description: 'Builds responsive, accessible web applications for education and community-oriented initiatives.'
    },
    {
      title: 'TSF Ambassador',
      period: '2022 - Present',
      description: 'Represents the Transylvanian Symphony Foundation and supports music education outreach.'
    }
  ];

  return (
    <div className="experience-page">
      <section className="experience-hero">
        <div className="container">
          <h1>Professional Experience</h1>
          <p className="subtitle">A cross-disciplinary career rooted in creativity, learning, and community impact.</p>
        </div>
      </section>

      <section className="experience-list">
        <div className="container">
          <div className="timeline">
            {roles.map((role, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">{index + 1}</div>
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

      <section className="experience-cta">
        <div className="container-sm text-center">
          <h2>Interested in Working Together?</h2>
          <p>I am open to meaningful collaborations across art, education, technology, and social impact.</p>
          <Link to="/contact" className="btn">Start a Conversation</Link>
        </div>
      </section>
    </div>
  );
}
