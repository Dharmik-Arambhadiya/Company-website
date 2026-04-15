import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: '📍',
    title: 'Office',
    details: ['Redlio Technologies', 'Ahmedabad, Gujarat, India']
  },
  {
    icon: '📧',
    title: 'Email',
    details: ['hello@redlio.com', 'support@redlio.com']
  },
  {
    icon: '📞',
    title: 'Phone',
    details: ['+91 98765 43210', 'Mon - Fri: 9AM - 6PM']
  },
  {
    icon: '💬',
    title: 'Social',
    details: ['LinkedIn', 'Instagram']
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin.png', url: 'https://linkedin.com/company/redlio' },
  { name: 'Instagram', icon: 'instagram.png', url: 'https://instagram.com/redlio' },
  { name: 'Facebook', icon: 'facebook.png', url: 'https://facebook.com/redlio' },
  { name: 'Twitter', icon: 'x.png', url: 'https://twitter.com/redlio' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>Have a project in mind? Let's discuss how we can help transform your business.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <span className="section-label">Contact Us</span>
          <h2>Let's Start a Conversation</h2>
          <p>
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-detail-item">
                <span className="detail-icon">{info.icon}</span>
                <div className="detail-content">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-card">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <h3>Thank You!</h3>
                <p>We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="site-button submit-btn">
                  Send Message
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="contact-map">
        <div className="map-card">
          <div className="map-placeholder">
            <span>📍</span>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}