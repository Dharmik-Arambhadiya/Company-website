import React from "react";
import "./projecttrack.css";

const steps = [
  {
    id: "01",
    title: "Research & Strategy",
    desc: "We analyze your business goals and create a clear roadmap."
  },
  {
    id: "02",
    title: "Design & Prototyping",
    desc: "Crafting modern and user-focused UI/UX experiences."
  },
  {
    id: "03",
    title: "Development",
    desc: "Building fast, scalable, and optimized solutions."
  },
  {
    id: "04",
    title: "Launch & Growth",
    desc: "Deploying and continuously improving your product."
  }
];

export default function ProjectTrack() {
  return (
    <section className="section project-track">
      <div className="container">

        <h2 className="title">Our Process</h2>
        <p className="subtitle">
          A proven approach to deliver high-quality digital solutions.
        </p>

        <div className="track-grid">
          {steps.map((step) => (
            <div className="card track-card" key={step.id}>
              <span className="track-number">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}