import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPageMeta(
      'Contact Samuel Asongo | Collaboration & Opportunities',
      'Get in touch with Samuel Asongo for collaborations, commissions, music education partnerships, development projects, or social impact work.',
      'contact Samuel Asongo, Samuel Asongo collaboration, Samuel Asongo commissions, Samuel Asongo music education',
      '/Samuel Asongo.png',
      '/contact'
    );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Let's Create Something Meaningful Together</h1>
          <p className="subtitle">Whether you'd like to collaborate, commission work, or connect about social impact projects, I'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />
            </label>
            <button type="submit" className="btn">Send Message</button>
            {submitted && <p className="success-message">Thanks! Your message has been received. I’ll be in touch soon.</p>}
          </form>

          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p><strong>Email:</strong> samuel@auvd.org</p>
            <p><strong>Location:</strong> Kakuma Refugee Camp, Kenya</p>
            <p><strong>Response Time:</strong> Usually within 2–3 business days</p>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/samuel-asongo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/samuel.asongo" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/samuelasongo" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <Link to="/about" className="text-link">Learn more about my work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
