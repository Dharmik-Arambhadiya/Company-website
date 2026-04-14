import React from "react";
import "./Recognition.css";

const items = [
  "Top Design Award 2024",
  "Best Startup UI",
  "Excellence in Development"
];

export default function Recognition() {
  return (
    <section className="section">
      <div className="container">

        <h2 className="title">Our Recognition</h2>
        <p className="subtitle">
          Trusted and recognized by industry leaders.
        </p>

        <div className="recognition-grid">
          {items.map((item, index) => (
            <div className="card recognition-card" key={index}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}