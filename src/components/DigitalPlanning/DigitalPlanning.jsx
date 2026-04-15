import React, { useEffect, useRef, useState } from "react";
import "./DigitalPlanning.css";

const steps = [
  { title: "Strategy", desc: "We define clear goals and roadmap.", icon: "🎯" },
  { title: "Design", desc: "Crafting intuitive UI/UX experiences.", icon: "✨" },
  { title: "Development", desc: "Building scalable solutions.", icon: "⚙️" },
  { title: "Launch", desc: "Deploying and optimizing products.", icon: "🚀" }
];

export default function DigitalPlanning() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section digital-planning" ref={sectionRef}>
      <div className="container">
        <h2 className="title section-title">Our Process</h2>
        <p className="subtitle section-subtitle">A simple and effective workflow</p>

        <div className="dp-grid">
          {steps.map((step, i) => (
            <div 
              className={`card dp-card ${visible ? 'animate-in' : ''}`}
              key={i}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="dp-icon-wrapper">
                <span className="dp-icon">{step.icon}</span>
              </div>
              <span className="dp-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="dp-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}