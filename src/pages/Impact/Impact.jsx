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
    { number: '500+', title: 'Refugees Reached', description: 'Children, youth, and adults empowered through our programs' },
    { number: '7', title: 'Core Programs', description: 'Arts, Education, Livelihoods, Peacebuilding & more' },
    { number: '100+', title: 'Youth Trained', description: 'Equipped with creative and life skills' },
    { number: '1', title: 'Refugee Camp', description: 'Serving Kakuma community' }
  ];

  const programs = [
    {
      title: 'Creative Arts',
      description: 'Visual arts education and exhibition programs celebrating community creativity and cultural heritage.',
      color: 'orange'
    },
    {
      title: 'Music Education',
      description: 'Comprehensive music instruction for 150+ students, building skills and confidence through performance.'
    },
    {
      title: 'Youth Leadership',
      description: 'Developing next-generation community leaders with life skills, confidence, and advocacy experience.'
    },
    {
      title: 'Women Empowerment',
      description: "Economic empowerment, skills training, and mentorship supporting women's independence and dignity.",
      color: 'purple'
    },
    {
      title: 'Technology Access',
      description: 'Digital literacy and technology skills ensuring community members can thrive in digital age.',
      color: 'skyblue'
    },
    {
      title: 'Sustainability',
      description: 'Building community-led systems and local capacity for long-term, sustainable impact.'
    }
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
                <h3 className="metric-title">{metric.title}</h3>
                <p className="metric-description">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Programs List */}
      <section className="core-programs">
        <div className="container">
          <h2>Our Core Programs</h2>
          <table className="core-programs-table">
            <thead>
              <tr><th scope="col">Our Core Programs</th></tr>
            </thead>
            <tbody>
              <tr><td>Arts, Healing & Psychosocial Well-being</td></tr>
              <tr><td>Education, Youth Development & Empowerment</td></tr>
              <tr><td>Livelihoods & Women Economic Empowerment</td></tr>
              <tr><td>Peacebuilding & Community Inclusion</td></tr>
              <tr><td>Humanitarian Outreach & Basic Needs Support</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="impact-vision">
        <div className="impact-vision-bordered">
          <svg
            className="impact-vision-border-svg"
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
          <div className="impact-vision-content">
            <div className="container-sm">
              <h2>Our Vision for Impact</h2>
              <p>
                We believe that every person, regardless of their circumstances, has innate creativity, talent, and potential for leadership. Our work removes barriers to accessing education, creative expression, and economic opportunity.
              </p>
              <p>
                Through integrated programs in arts, music, education, and skills training, we help individuals discover their capabilities, build confidence, and create meaningful lives—not just for themselves, but for their communities.
              </p>
            </div>
          </div>
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
            {programs.map((program, index) => (
              <div key={index} className={`program-overview ${program.color ? `program-overview-${program.color}` : ''}`}>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
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