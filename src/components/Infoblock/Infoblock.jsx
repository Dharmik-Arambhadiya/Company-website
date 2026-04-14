import React from "react";
import "./Infoblock.css";

export default function Infoblock() {
  return (
    <section className="section infoblock">
      <div className="container info-flex">

        {/* LEFT */}
        <div className="info-text">
          <h2 className="title">
            We Build Scalable Digital Products
          </h2>

          <p className="subtitle">
            Our team combines design, technology, and strategy to deliver 
            high-quality digital experiences.
          </p>

          <ul className="info-list">
            <li>✔ Modern UI/UX Design</li>
            <li>✔ Fast & Scalable Development</li>
            <li>✔ Mobile-first Approach</li>
            <li>✔ Performance Optimization</li>
          </ul>

          {/* Stats */}
          <div className="info-stats">
            <div className="card stat">
              <h3>100+</h3>
              <p>Projects</p>
            </div>
            <div className="card stat">
              <h3>50+</h3>
              <p>Clients</p>
            </div>
            <div className="card stat">
              <h3>5+</h3>
              <p>Years</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="info-visual card">
          {/* Replace with image later */}
        </div>

      </div>
    </section>
  );
}