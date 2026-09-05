import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Impact.css';

export default function Impact() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Social Impact & Community Development',
      'Read about Samuel Asongo’s social impact work and the community transformation stories behind AUVD and its programs in Kakuma Refugee Camp.',
      'Samuel Asongo impact, community development, social impact, Kakuma, AUVD, refugee community',
      '/Samuel Asongo image.png',
      '/impact'
    );
  }, []);

  const stories = [
    {
      title: 'From Silence to Sound',
      person: 'Amina, 16',
      quote: 'Music gave me a voice I didn\'t know I had. Now I perform on stage and dream of becoming a music teacher.',
      impact: 'Student now performs in community concerts'
    },
    {
      title: 'Art of Hope',
      person: 'Hassan, 19',
      quote: 'Through art, I found a way to process my experiences and share my culture with others.',
      impact: 'Completed formal art training program'
    },
    {
      title: 'Leader in Making',
      person: 'Zainab, 20',
      quote: 'The youth program taught me that my voice matters and I can create change in my community.',
      impact: 'Now leads community advocacy initiatives'
    },
    {
      title: 'Business Dreams',
      person: 'Fatima, 25',
      quote: 'Women\'s empowerment training gave me business skills to support my family.',
      impact: 'Started sustainable microenterprise'
    }
  ];

  const metrics = [
    { number: '500+', description: 'Lives directly impacted annually' },
    { number: '2000+', description: 'Community members reached through programs' },
    { number: '85%', description: 'Program participant satisfaction rate' },
    { number: '70%', description: 'Youth employment placement rate' }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="container">
          <h1>Social Impact</h1>
          <p className="subtitle">
            Creating lasting change through art, music, education, and community-centered development.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-metrics">
        <div className="container">
          <div className="metrics-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-number">{metric.number}</div>
                <p className="metric-description">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="impact-vision">
        <div className="container-sm">
          <h2>Our Vision for Impact</h2>
          <p>
            We believe that every person, regardless of their circumstances, has innate creativity, talent, and potential for leadership. Our work removes barriers to accessing education, creative expression, and economic opportunity.
          </p>
          <p>
            Through integrated programs in arts, music, education, and skills training, we help individuals discover their capabilities, build confidence, and create meaningful lives—not just for themselves, but for their communities.
          </p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="stories-section">
        <div className="container">
          <h2>Stories of Transformation</h2>
          <div className="stories-grid">
            {stories.map((story, idx) => (
              <div key={idx} className="story-card">
                <blockquote className="story-quote">
                  "{story.quote}"
                </blockquote>
                <p className="story-person">— {story.person}</p>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-impact">{story.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-overview">
        <div className="container">
          <h2>Our Programs</h2>
          <div className="programs-list">
            <div className="program-overview">
              <h3>🎨 Creative Arts</h3>
              <p>Visual arts education and exhibition programs celebrating community creativity and cultural heritage.</p>
            </div>
            <div className="program-overview">
              <h3>🎵 Music Education</h3>
              <p>Comprehensive music instruction for 150+ students, building skills and confidence through performance.</p>
            </div>
            <div className="program-overview">
              <h3>👥 Youth Leadership</h3>
              <p>Developing next-generation community leaders with life skills, confidence, and advocacy experience.</p>
            </div>
            <div className="program-overview">
              <h3>👩‍💼 Women Empowerment</h3>
              <p>Economic empowerment, skills training, and mentorship supporting women's independence and dignity.</p>
            </div>
            <div className="program-overview">
              <h3>💻 Technology Access</h3>
              <p>Digital literacy and technology skills ensuring community members can thrive in digital age.</p>
            </div>
            <div className="program-overview">
              <h3>🌱 Sustainability</h3>
              <p>Building community-led systems and local capacity for long-term, sustainable impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="impact-cta">
        <div className="container-sm text-center">
          <h2>Join Us in Creating Impact</h2>
          <p>
            Whether through collaboration, partnership, or support, there are many ways to be part of this transformative work. 
            Let's create meaningful change together.
          </p>
          <div className="cta-buttons">
            <Link to="/auvd" className="btn">
              Learn About AUVD
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
