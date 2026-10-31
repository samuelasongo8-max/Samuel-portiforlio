import React from 'react';
import '../styles/Impact.css';

const Impact: React.FC = () => {
  const impactStats = [
    { number: '10,000+', label: 'Lives Impacted' },
    { number: '50+', label: 'Countries Served' },
    { number: '500+', label: 'Volunteers' },
    { number: '95%', label: 'Aid Distribution Rate' },
  ];

  const initiatives = [
    {
      title: 'Emergency Relief',
      description: 'Rapid response to humanitarian crises',
      icon: '🚑',
    },
    {
      title: 'Education Programs',
      description: 'Quality education for displaced youth',
      icon: '📚',
    },
    {
      title: 'Healthcare Support',
      description: 'Medical assistance and wellness programs',
      icon: '⚕️',
    },
    {
      title: 'Skills Training',
      description: 'Vocational training for sustainable livelihoods',
      icon: '🛠️',
    },
  ];

  return (
    <div className="impact-page">
      <section className="impact-hero">
        <h1>Our Impact</h1>
        <p>Making a difference in communities worldwide</p>
      </section>

      <section className="impact-stats">
        <div className="stats-grid">
          {impactStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-initiatives">
        <h2>Our Key Initiatives</h2>
        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <div className="initiative-icon">{initiative.icon}</div>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-stories">
        <h2>Real Stories, Real Impact</h2>
        <p>Every number represents a life changed, a family supported, a community transformed.</p>
        <button className="cta-button">Read Our Stories</button>
      </section>
    </div>
  );
};

export default Impact;
