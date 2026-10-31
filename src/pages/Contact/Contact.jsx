import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPageMeta('contact');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (    
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Samuel Asongo</h1>
          <p className="subtitle">Whether you'd like to collaborate, commission work, or connect about social impact projects, I'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" required />
            </label>
            <button type="submit" className="btn-auvd">Send Message</button>
            {submitted && <p className="success-message">Thanks! Your message has been received. I’ll be in touch soon.</p>}
          </form>

          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p><strong>Email:</strong> samuelasongoinfoo@gmail.com</p>
            <p><strong>Location:</strong> Kakuma Refugee Camp, Kenya</p>
            <p><strong>Response Time:</strong> Usually within 2–3 business days</p>
            <div className="contact-links">
              <a href="https://www.linkedin.com/posts/samuel-asongo-46470a41a_my-story-why-i-started-auvd-message-from-activity-7477250528704499712-A-T2?utm_source=share&utm_medium=member_android&rcm=ACoAAGqJOgwBXsCwJjQJGYZ_PoDhEO0v8svCKq4 " target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/samuelasongo8-max/Samuel-portiforlio" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <Link to="/about" className="text-link">Learn more about my work</Link>
          </div>
        </div>
      </section>

      <section className="contact-guidance container-sm">
        <h2>Collaborate With Samuel</h2>
        <p>
          Samuel welcomes thoughtful enquiries about creative arts, music
          education, accessible web development, and community-focused
          initiatives in Kakuma. When you write, share a little about your
          organization or idea, who the work is for, and what kind of
          collaboration you have in mind. This helps Samuel understand the
          context and consider a useful next step. Partnership discussions can
          include a workshop, a learning program, a creative commission, or a
          digital project. Please include any relevant dates, location, and
          practical requirements so the first conversation can be specific.
        </p>

        <h2>Event and Workshop Enquiries</h2>
        <p>
          For event bookings, school visits, music sessions, or arts workshops,
          include the proposed date, venue, audience, session length, and
          expected number of participants. Describe any instruments, materials,
          accessibility needs, or local coordination that may be involved.
          Availability and arrangements are confirmed individually; sending an
          enquiry does not confirm a booking. Early contact gives everyone time
          to discuss goals, preparation, and whether the event is a good fit.
          Samuel’s work is based in Kakuma, Kenya, so please also note any travel
          or remote participation expectations.
        </p>

        <h2>Media and Press Enquiries</h2>
        <p>
          Journalists, editors, and researchers can get in touch to request an
          interview, a short biography, or information about Samuel’s work in
          art, music education, and community development. Please include your
          publication or project, the subject of your enquiry, your deadline,
          and the format you need. Any use of photographs, student stories, or
          community images should be discussed in advance, with consent and
          appropriate context respected. For all enquiries, use the form above
          or email <a href="mailto:samuelaasongoinfoo@gmail.com">
            samuelaasongoinfoo@gmail.com
          </a>.
        </p>

        <h2>Planning a Useful First Conversation</h2>
        <p>
          A short, clear message is a good starting point. Share the purpose of
          your enquiry, the people or community involved, and what you hope to
          achieve together. If you represent an organization, include its name
          and a public website or other reliable way to learn about its work.
          Samuel can then consider the request in context and reply with
          questions or a practical next step. Please avoid sending confidential
          personal information through the contact form.
        </p>

        <h2>Availability and Follow-up</h2>
        <p>
          Every collaboration, workshop, or media request is considered
          individually. A reply is not a confirmation of a booking, funding, or
          partnership; scope, timing, resources, and responsibilities need to
          be agreed before plans are final. If you have not heard back after a
          few business days, you may follow up by email and include the date of
          your original message. For time-sensitive requests, mention the
          deadline clearly so it can be considered alongside existing teaching
          and community commitments.
        </p>
      </section>
    </div>
  );
}
