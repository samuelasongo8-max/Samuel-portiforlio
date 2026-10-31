import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Ambassador.css';

export default function Ambassador() {
  useEffect(() => {
    setPageMeta('ambassador');
  }, []);

  return (
    <div className="ambassador-page">
    
      <section className="ambassador-hero">
        <div className="container">
          <h1>Samuel Asongo, TSF Ambassador</h1>
          <p className="subtitle">Representing the Transylvanian Symphony Foundation through music education and cultural exchange.</p>
        </div>
      </section>

      <section className="ambassador-intro">
        <div className="container-sm">
          <h2>My Role</h2>
          <p>
            As an ambassador for the Transylvanian Symphony Foundation, I help connect the worlds of classical music, community education, and refugee empowerment. My work emphasizes bringing high-quality artistic experiences to communities that often lack access to them.
          </p>
          <p>
            This role allows me to advocate for educational access, cultural exchange, and the transformational power of performance and music literacy.
          </p>
        </div>
      </section>

      <section className="ambassador-focus">
        <div className="container">
          <h2>Key Responsibilities</h2>
          <div className="focus-grid">
            <div className="focus-card">
              <h3>Music Outreach</h3>
              <p>Connecting students to performance opportunities and classical music education.</p>
            </div>
            <div className="focus-card">
              <h3> Cultural Exchange</h3>
              <p>Bridging local and international artistic communities through shared experience.</p>
            </div>
            <div className="focus-card">
              <h3>Community Development</h3>
              <p>Supporting community building through concerts, workshops, and educational events.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ambassador-approach">
        <div className="container-sm">
          <h2>Music Education and Cultural Exchange in Kakuma</h2>
          <p>
            Samuel’s ambassador work connects music learning with the value of
            cultural exchange. In Kakuma, students can benefit from opportunities
            to learn instruments, build music literacy, and take part in shared
            creative experiences. These activities can help learners explore
            music while developing patience, confidence, and collaboration.
          </p>
          <p>
            Music education partnerships can take many forms. Educators and
            community organizations can discuss lessons, access to instruments,
            workshops, and performance opportunities that fit local interests
            and resources. The aim is to make artistic learning more accessible
            and to connect participants with new ideas through music.
          </p>
          <p>
            Cultural exchange works best as a conversation. Local knowledge and
            community priorities matter alongside international perspectives.
            Samuel’s role is to support those connections and encourage
            collaboration around learning, artistic practice, and meaningful
            participation.
          </p>
          <p>
            A useful partnership can begin with a shared question: what would
            make music learning more accessible for the students involved?
            Educators and partners can then consider practical needs such as
            lesson structure, instruments, learning space, and opportunities to
            share work. Keeping the discussion focused on learners helps shape
            an approach that fits the community rather than relying on a
            one-size-fits-all plan.
          </p>
        </div>
      </section>

      <section className="ambassador-cta">
        <div className="container-sm text-center">
          <h2>Collaborate With Me</h2>
          <p>If you are interested in music education partnerships or community arts engagement, I would be happy to connect.</p>
          <Link to="/contact"  className="btn-auvd">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
