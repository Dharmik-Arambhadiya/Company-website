import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
    color: '#c3faf5'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    features: ['iOS Apps', 'Android Apps', 'React Native', 'App Maintenance'],
    color: '#ffd8f4'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality for maximum engagement.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    features: ['Website Design', 'Mobile App Design', 'Brand Identity', 'Prototyping'],
    color: '#ffe6cd'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to boost your online presence and drive measurable business growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Advertising'],
    color: '#d4f0d8'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your business applications securely.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    features: ['Cloud Migration', 'AWS/Azure', 'Cloud Hosting', 'DevOps'],
    color: '#fff5c8'
  },
  {
    title: 'Enterprise Software',
    description: 'Custom enterprise solutions to streamline your business operations and improve efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    features: ['ERP Systems', 'CRM Solutions', 'Automation', 'Data Analytics'],
    color: '#ffc6c6'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Our team develops a comprehensive roadmap aligned with your objectives and timeline.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'We create intuitive designs with a focus on user experience and brand consistency.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'Our developers build scalable solutions using cutting-edge technologies.'
  },
  {
    step: '05',
    title: 'Launch',
    description: 'We deploy your solution and provide ongoing support and maintenance.'
  }
];

export default function Services() {
  return (
    <section className="services-page" id="services">
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>We deliver comprehensive digital solutions to transform your business and drive growth.</p>
        </div>
      </div>

      <div className="services-intro">
        <div className="intro-content">
          <span className="section-label">What We Offer</span>
          <h2>Digital Solutions for Every Need</h2>
          <p>
            From web development to digital marketing, we offer end-to-end services that help businesses 
            thrive in the digital landscape. Our team combines expertise with innovation to deliver 
            solutions that exceed expectations.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            style={{ '--card-color': service.color }}
          >
            <div className="service-icon"><img src={service.image} alt={service.title} /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" className="service-link">
              Learn More <span>→</span>
            </a>
          </div>
        ))}
      </div>

      <div className="services-process">
        <div className="process-header">
          <span className="section-label">How We Work</span>
          <h2>Our Process</h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <div key={index} className="process-step">
              <span className="step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how we can help transform your business with digital solutions.</p>
        <div className="cta-buttons">
          <a href="#contact" className="site-button">Get Started</a>
          <a href="#work" className="site-button-outline">View Our Work</a>
        </div>
      </div>
    </section>
  );
}