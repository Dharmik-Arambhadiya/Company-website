import React, { useEffect, useRef, useState } from "react";
import "./Casestudy.css";

const projects = [
  { id: 1, title: "E-Commerce Platform", category: "Web Development", icon: "🛒" },
  { id: 2, title: "SaaS Dashboard", category: "UI/UX Design", icon: "📊" },
  { id: 3, title: "Mobile App", category: "App Design", icon: "📱" },
];

export default function Casestudy() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, i]);
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
    <section className="section case-study" ref={sectionRef}>
      <div className="container">
        <h2 className="title section-title">Our Work</h2>
        <p className="subtitle section-subtitle">
          Explore our latest projects and creative solutions.
        </p>

        <div className="case-grid">
          {projects.map((item, index) => (
            <div 
              className={`card case-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
              key={item.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="case-image">
                <div className="case-image-bg">
                  <span className="case-icon">{item.icon}</span>
                </div>
              </div>

              <div className="case-content">
                <span className="case-category">{item.category}</span>
                <h3>{item.title}</h3>
                <div className="case-link">
                  <span>View Project</span>
                  <span className="arrow">→</span>
                </div>
              </div>

              <div className="case-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}