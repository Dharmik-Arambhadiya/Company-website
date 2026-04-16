import React, { useState, useEffect } from "react";
import "./herosection.css";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="section hero bg-glow">
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }} />
        ))}
      </div>

      <div className="container hero-flex">
        <div className={`hero-content ${loaded ? 'animate-in' : ''}`}>
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Building the Future
          </span>
          
          <h1 className="title hero-title">
            Build Stunning 
            <span className="title-gradient"> Digital Experiences</span>
          </h1>

          <p className="subtitle hero-subtitle">
            We help brands design, develop, and scale powerful digital products 
            that engage users and drive growth.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary btn-animate">
              Get Started
              <span className="btn-icon">→</span>
            </button>
            <button className="btn-outline btn-animate-outline">
              View Work
              <span className="btn-icon">↗</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
        </div>

        <div className={`hero-visual ${loaded ? 'animate-in-right' : ''}`}>
          <div className="visual-card">
            <div className="visual-ring ring-1"></div>
            <div className="visual-ring ring-2"></div>
            <div className="visual-ring ring-3"></div>
            <div className="visual-content">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop" alt="Digital Excellence" className="visual-icon-img" />
              <span>Digital Excellence</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}