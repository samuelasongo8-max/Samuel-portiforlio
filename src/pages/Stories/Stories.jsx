import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Stories.css';

export default function Stories() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Stories & Ideas',
      'Read stories and reflections from Samuel Asongo about music, art, technology, and community transformation.',
      'Samuel Asongo stories, Samuel Asongo blog, community development stories, art and music stories',
      '/Samuel Asongo.png',
      '/stories'
    );
  }, []);

  const stories = [
    {
      title: 'How Music Became a Language of Hope',
      category: 'Music',
      excerpt: 'A reflection on how music education gives students a path to confidence, expression, and belonging.'
    },
    {
      title: 'Creating Through Community',
      category: 'Art',
      excerpt: 'How collaborative art projects can preserve culture and support healing in vulnerable communities.'
    },
    {
      title: 'Building Technology With Purpose',
      category: 'Development',
      excerpt: 'Why digital tools should be designed around the people they serve, not just the features they offer.'
    },
    {
      title: 'Leadership in Uncertain Times',
      category: 'Impact',
      excerpt: 'Lessons from leading community-focused initiatives in challenging environments.'
    }
  ];

  return (
    <div className="stories-page">
      <section className="stories-hero">
        <div className="container">
          <h1>Stories & Blog</h1>
          <p className="subtitle">Reflections, lessons, and stories from a life shaped by art, music, and service.</p>
        </div>
      </section>

      <section className="stories-list">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story, index) => (
              <article key={index} className="story-card">
                <p className="story-category">{story.category}</p>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <Link to="/contact" className="story-link">Read More →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-cta">
        <div className="container-sm text-center">
          <h2>Stay Connected</h2>
          <p>Follow the journey, join the conversation, and discover more stories from the work behind the mission.</p>
          <Link to="/contact" className="btn">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
