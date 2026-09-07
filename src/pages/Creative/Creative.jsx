import { useEffect } from 'react';
import { setPageMeta } from '../../utils/seo';
import './Creative.css';

export default function Creative() {
  useEffect(() => {
    setPageMeta(
      'Samuel Asongo | Creative Arts & Artistic Work',
      'Explore Samuel Asongo’s creative arts practice through painting, drawing, mixed media, and community-centered visual storytelling.',
      'Samuel Asongo artist, creative arts, visual art, painting, drawing, contemporary art, Samuel Asongo creative work',
      '/Samuel Asongo image.png',
      '/creative'
    );
  }, []);

  const artworks = [
    {
      id: 1,
      title: 'Identity & Resilience Series',
      category: 'Mixed Media',
      description: 'A collection exploring personal and collective identity in the context of displacement and resilience.'
    },
    {
      id: 2,
      title: 'Community Voices',
      category: 'Acrylic on Canvas',
      description: 'Portraits and narratives from community members, celebrating stories of hope and perseverance.'
    },
    {
      id: 3,
      title: 'Cultural Fusion',
      category: 'Contemporary',
      description: 'Blending traditional African artistic elements with modern techniques and perspectives.'
    },
    {
      id: 4,
      title: 'Refugee Experience',
      category: 'Installation',
      description: 'Interactive installations exploring themes of displacement, belonging, and home.'
    },
    {
      id: 5,
      title: 'Healing Through Color',
      category: 'Abstract',
      description: 'Abstract works using color and form to explore emotional expression and personal healing.'
    },
    {
      id: 6,
      title: 'Community Collaboration',
      category: 'Mixed Media',
      description: 'Collaborative art projects created with community members, featuring shared narratives.'
    }
  ];

  return (
    <div className="creative-page">
      {/* Hero Section */}
      <section className="creative-hero">
        <div className="container">
          <h1>Creative Arts</h1>
          <p className="subtitle">
            Visual storytelling exploring identity, resilience, and community through painting, drawing, and contemporary art.
          </p>
        </div>
      </section>

      {/* Statement Section */}
      <section className="artist-statement">
        <div className="container-sm">
          <h2>Artist Statement</h2>
          <p>
            My artistic practice is rooted in a belief that visual expression can bridge divides and create understanding across cultures and experiences. Through painting, drawing, and mixed media, I explore themes of identity, displacement, belonging, and the resilience of the human spirit.
          </p>
          <p>
            Growing up and working in Kakuma Refugee Camp, I've been profoundly shaped by the stories of community members navigating displacement with dignity and hope. My work honors these stories and the creative spirit that thrives even in challenging circumstances.
          </p>
          <p>
            I work in multiple styles and mediums, from realistic portraiture to abstract expressionism, always seeking to make art accessible and meaningful to diverse audiences. Whether commissioned pieces or community collaborative projects, each work carries intentionality and respect for human experience.
          </p>
        </div>
      </section>

      {/* Artworks Gallery */}
      <section className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <p>This gallery is just the beginning. New pieces from these series will be added as they're completed — check back soon.</p>
          <div className="gallery-grid">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="gallery-item">
                <div className="artwork-placeholder">
                  <span></span>
                </div>
                <div className="artwork-info">
                  <h3>{artwork.title}</h3>
                  <p className="category">{artwork.category}</p>
                  <p className="description">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques & Materials */}
      <section className="techniques">
        <div className="container">
          <h2>Mediums & Techniques</h2>
          <div className="techniques-grid">
            <div className="technique-card">
              <h3> Painting</h3>
              <p>Acrylic, oil, and watercolor techniques exploring color, texture, and composition.</p>
            </div>
            <div className="technique-card">
              <h3> Drawing</h3>
              <p>Pencil, charcoal, and mixed media drawing exploring line, form, and narrative.</p>
            </div>
            <div className="technique-card">
              <h3>Mixed Media</h3>
              <p>Combining multiple materials and techniques to create layered, complex compositions.</p>
            </div>
            <div className="technique-card">
              <h3> Installation</h3>
              <p>Interactive installations creating immersive experiences around social themes.</p>
            </div>
            <div className="technique-card">
              <h3>Collaborative</h3>
              <p>Community-engaged projects where participants contribute to the artwork.</p>
            </div>
            <div className="technique-card">
              <h3>Performance</h3>
              <p>Performance art integrating visual art with movement and live audience engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions & Recognition */}
      <section className="exhibitions">
        <div className="container-sm">
          <h2>Exhibitions & Recognition</h2>
          <table className="exhibitions-list">
            <thead>
              <tr><th scope="col">Exhibitions & Recognition</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>Community Gallery Exhibitions</h3>
                  <p>Regular exhibitions in Kakuma community spaces and regional venues, featuring both solo and group shows.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Social Impact Campaigns</h3>
                  <p>Artwork featured in campaigns promoting education, health, and social awareness in refugee and vulnerable communities.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Collaborative Projects</h3>
                  <p>Participation in international artistic collaborations connecting African and diaspora artists.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Commission Information */}
      <section className="commissions">
        <div className="container-sm text-center">
          <h2>Commission Inquiries</h2>
          <p>
            I accept commissioned artwork including portraits, thematic pieces, and community-engaged installations. 
            Commissions are approached as collaborative conversations to ensure the final piece meets your vision and values.
          </p>
          <p>
            For commission inquiries, project details, and pricing information, please reach out through the contact page.
          </p>
          <a href="/contact"  className="btn-auvd">
            Inquire About Commission
          </a>
        </div>
      </section>
    </div>
  );
}
