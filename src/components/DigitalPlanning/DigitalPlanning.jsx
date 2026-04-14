import React from "react";
import "./DigitalPlanning.css";

const steps = [
  { title: "Strategy", desc: "We define clear goals and roadmap." },
  { title: "Design", desc: "Crafting intuitive UI/UX experiences." },
  { title: "Development", desc: "Building scalable solutions." },
  { title: "Launch", desc: "Deploying and optimizing products." }
];

export default function DigitalPlanning() {
  return (
    <section className="section">
      <div className="container">

        <h2 className="title">Our Process</h2>
        <p className="subtitle">Simple and effective workflow</p>

        <div className="dp-grid">
          {steps.map((step, i) => (
            <div className="card dp-card" key={i}>
              <span className="dp-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}