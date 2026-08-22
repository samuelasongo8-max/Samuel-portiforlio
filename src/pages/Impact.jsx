import React from 'react';

const Impact = () => {
    return (
        <div>Impact</div>
    )
}

export default Impact;
import React from 'react';
import '../styles/Impact.css';

export default function Impact() {
  return (
    <div className="impact-page">
      <div className="page-header">
        <h1>Impact & Community</h1>
        <p>Making a difference in the creative community</p>
      </div>

      <section className="impact-section">
        <h2>Community Initiatives</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>Workshops & Mentorship</h3>
            <p>Leading creative workshops and mentoring emerging artists in digital media production.</p>
          </div>
          <div className="impact-card">
            <h3>Open Source Contributions</h3>
            <p>Contributing to open-source projects and sharing knowledge with the developer community.</p>
          </div>
          <div className="impact-card">
            <h3>Educational Content</h3>
            <p>Creating educational resources and tutorials for aspiring musicians and developers.</p>
          </div>
        </div>
      </section>

      <section className="impact-metrics">
        <h2>By The Numbers</h2>
        <div className="metrics-grid">
          <div className="metric">
            <h3>1000+</h3>
            <p>Students Mentored</p>
          </div>
          <div className="metric">
            <h3>50+</h3>
            <p>Workshops Led</p>
          </div>
          <div className="metric">
            <h3>100+</h3>
            <p>Open Source Commits</p>
          </div>
        </div>
      </section>
    </div>
  );
}
