import React from "react";
import "./herosection.css";

export default function HeroSection() {
  return (
    <section className="section hero bg-glow">
      <div className="container hero-flex">

        <div className="hero-content">
          <h1 className="title">
            Build Stunning Digital Experiences
          </h1>

          <p className="subtitle">
            We help brands design, develop, and scale powerful digital products.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">View Work</button>
          </div>
        </div>

        <div className="hero-visual card glow">
          {/* Replace with image later */}
        </div>

      </div>
    </section>
  );
}