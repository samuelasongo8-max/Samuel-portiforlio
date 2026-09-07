import { useEffect } from 'react';
import { setPageMeta } from '../../utils/seo';
import './Music.css';

export default function Music() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Music Educator & Music Education',
      'Discover Samuel Asongo’s music education work serving more than 150 students in Kakuma Refugee Camp through classes, instruments, and performance opportunities.',
      'Samuel Asongo music educator, music education Kakuma, music lessons, music instructor, Samuel Asongo music',
      '/Samuel Asongo as a Music Teacter, and Artist.jpg',
      '/music'
    );
  }, []);

  const stats = [
    { number: '150+', label: 'Students Served' },
    { number: '11', label: 'Instructors' },
    { number: '4', label: 'Classes Per Week' },
    { number: '120+', label: 'Musical Instruments' }
  ];

  const programs = [
    {
      name: 'Beginner Piano',
      description: 'Introduction to piano fundamentals, music notation, and classical technique.'
    },
    {
      name: 'Guitar Ensemble',
      description: 'Group guitar instruction focusing on contemporary and traditional music.'
    },
    {
      name: 'Voice Training',
      description: 'Vocal technique, music theory, and solo performance preparation.'
    },
    {
      name: 'Rhythm & Percussion',
      description: 'Percussion instruments, rhythm theory, and ensemble coordination.'
    },
    {
      name: 'Music Theory',
      description: 'Comprehensive music theory from fundamentals to advanced composition.'
    },
    {
      name: 'Performance Workshop',
      description: 'Stage presence, performance anxiety management, and recital preparation.'
    }
  ];

  const instruments = [
    'Pianos',
    'Guitars',
    'Keyboards',
    'Drums',
    'Percussion Sets',
    'Violins',
    'Flutes',
    'Saxophones',
    'Trumpets',
    'Cellos',
    'Ukuleles',
    'More...'
  ];

  return (
    <div className="music-page">
      {/* Hero Section */}
      <section className="music-hero">
        <div className="container">
          <h1>Music Education</h1>
          <p className="subtitle">
            Bringing quality music education and performance opportunities to 150+ students in Kakuma Refugee Camp.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="music-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <div className="container-sm">
          <h2>Our Mission</h2>
          <p>
            Music transcends language, culture, and circumstance. We believe that every person deserves access to quality music education regardless of their background or circumstances. Through structured curriculum, experienced instruction, and a wide variety of instruments, we empower students to express themselves, build confidence, and discover their musical potential.
          </p>
          <p>
            Our program serves as more than just music instruction—it's a space for community building, cultural exchange, personal growth, and joy. Students don't just learn to play instruments; they discover themselves through music.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="container">
          <h2>Programs & Classes</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <h3>{program.name}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="instruments">
        <div className="container">
          <h2>Our Instruments</h2>
          <p className="instruments-intro">
            We maintain a diverse collection of 120+ musical instruments to provide students with exposure to various musical traditions and genres.
          </p>
          <div className="instruments-grid">
            {instruments.map((instrument, index) => (
              <div key={index} className="instrument-item">
                {instrument}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="philosophy">
        <div className="container">
          <h2>Teaching Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-card">
              <h3>Student-Centered</h3>
              <p>
                Each student is unique. We tailor instruction to individual learning styles, pace, and goals.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Culturally Inclusive</h3>
              <p>
                We honor both Western classical traditions and local musical heritage, creating bridges between cultures.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Performance-Oriented</h3>
              <p>
                Students are encouraged to perform publicly, building confidence and sharing their talents with the community.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Community Focused</h3>
              <p>
                Music brings people together. We emphasize ensemble playing and collaborative learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & Recognition */}
      <section className="partnerships">
        <div className="container-sm text-center">
          <h2>Partnerships & Recognition</h2>
          <p>
            Our music education programs are enhanced through partnerships with international music organizations, including the Transylvanian Symphony Foundation, which brings classical music expertise and performance opportunities to our students.
          </p>
          <p>
            Regular performances and recitals celebrate student achievements and engage the broader community in the transformative power of music.
          </p>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="enrollment-cta">
        <div className="container-sm text-center">
          <h2>Join Our Music Community</h2>
          <p>
            Whether you're just beginning your musical journey or advancing your skills, there's a place for you in our programs. We believe in making music education accessible to all.
          </p>
          <a href="/contact" className="btn">
            Inquire About Enrollment
          </a>
        </div>
      </section>
    </div>
  );
}
