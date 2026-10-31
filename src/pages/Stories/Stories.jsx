import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShareButtons from '../../components/ShareButtons';
import { setPageMeta } from '../../utils/seo';
import { stories } from '../../utils/storyContent';
import './Stories.css';

export default function Stories() {
  useEffect(() => {
    setPageMeta('stories');
  }, []);

  return (
    <div className="stories-page">
      <section className="stories-hero">
        <div className="container">
          <h1>Stories by Samuel Asongo</h1>
          <p className="subtitle">Reflections, lessons, and stories from a life shaped by art, music, and service.</p>
          <p>
            These short reflections explore themes behind Samuel’s work in
            Kakuma: music education, creative expression, purposeful technology,
            and community leadership. They are starting points for conversation,
            not reports of individual events. Each topic asks how creative work
            can make learning more welcoming and help people share ideas with
            dignity. Use the links below to discuss a topic or connect it to a
            partnership, classroom, or community project.
          </p>
        </div>
      </section>

      <section className="stories-list">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story) => (
              <article id={story.slug} key={story.slug} className="story-card">
                <p className="story-category">{story.category}</p>
                <h2>{story.title}</h2>
                <p>{story.excerpt}</p>
                <Link to="/contact" className="story-link">Discuss this topic</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-cta">
        <div className="container-sm text-center">
          <h2>Stay Connected</h2>
          <p>Follow the journey, join the conversation, and discover more stories from the work behind the mission.</p>
          <Link to="/contact"className="btn-auvd">Get In Touch</Link>
          <ShareButtons title="Stories by Samuel Asongo" />
        </div>
      </section>
    </div>
  );
}
