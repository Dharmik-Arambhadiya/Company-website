import React from 'react';
import './Aboutus.css';

const stats = [
  { number: '100+', label: 'Projects Delivered' },
  { number: '8+', label: 'Years Experience' },
  { number: '50+', label: 'Happy Clients' },
  { number: '15+', label: 'Team Members' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve.',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, fostering open communication and shared success.',
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality solutions with meticulous attention to detail.',
  },
  {
    title: 'Growth',
    description: 'We focus on scalable solutions that grow with your business and drive measurable results.',
  },
];

const team = [
  {
    name: 'Mayur Sinh Jadeja',
    role: 'Founder & CEO',
    description: '8+ years leading digital transformations. Passionate about helping businesses thrive in the digital age.',
  },
];

export default function Aboutus() {
  return (
    <section className="about-page" id="about">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Redlio</h1>
          <p>We build digital solutions that empower businesses to thrive in the modern world.</p>
        </div>
      </div>

      <div className="about-story">
        <div className="story-content">
          <span className="section-label">Our Story</span>
          <h2>Driving Digital Transformation Since 2018</h2>
          <p>
            Founded by Mayur Sinh Jadeja, Redlio began with a simple mission: to make enterprise-grade 
            technology accessible to businesses of all sizes. What started as a small team of passionate 
            developers has grown into a full-service digital agency helping 100+ clients transform 
            their digital presence.
          </p>
          <p>
            We believe in the power of technology to transform businesses. Our team of expert developers, 
            designers, and strategists work tirelessly to turn your vision into reality, delivering solutions 
            that drive real business growth.
          </p>
        </div>
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Redlio Team" />
        </div>
      </div>

      <div className="about-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about-values">
        <div className="values-header">
          <span className="section-label">What We Believe</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-team">
        <div className="team-header">
          <span className="section-label">Leadership</span>
          <h2>Meet Our Founder</h2>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>
                <a 
                  href="https://linkedin.com/in/mayur-sinh-jadeja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <img src="linkedin.png" alt="LinkedIn" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <h2>Let's Build Something Great Together</h2>
        <p>Ready to transform your digital presence? We'd love to hear from you.</p>
        <div className="cta-buttons">
          <a href="#contact" className="site-button">Get Started</a>
          <a href="#work" className="site-button-outline">View Our Work</a>
        </div>
      </div>
    </section>
  );
}