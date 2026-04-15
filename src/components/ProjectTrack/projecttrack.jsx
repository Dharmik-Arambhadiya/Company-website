import React, { useEffect, useRef, useState } from "react";
import "./projecttrack.css";

const steps = [
  { id: "01", title: "Research & Strategy", desc: "We analyze your business goals and create a clear roadmap." },
  { id: "02", title: "Design & Prototyping", desc: "Crafting modern and user-focused UI/UX experiences." },
  { id: "03", title: "Development", desc: "Building fast, scalable, and optimized solutions." },
  { id: "04", title: "Launch & Growth", desc: "Deploying and continuously improving your product." }
];

export default function ProjectTrack() {
  const [visibleCards, setVisibleCards] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = {};
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards(prev => ({ ...prev, [i]: true }));
            }, i * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section project-track" ref={sectionRef}>
      <div className="container">
        <h2 className="title section-title">Our Process</h2>
        <p className="subtitle section-subtitle">
          A proven approach to deliver high-quality digital solutions.
        </p>

        <div className="track-grid">
          {steps.map((step, index) => (
            <div 
              className={`card track-card ${visibleCards[index] ? 'animate-in' : ''}`}
              key={step.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="track-card-inner">
                <span className="track-number">{step.id}</span>
                <div className="track-icon">✓</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="track-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}