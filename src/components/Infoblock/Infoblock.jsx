import React, { useEffect, useRef, useState } from "react";
import "./Infoblock.css";

const features = [
  "Modern UI/UX Design",
  "Fast & Scalable Development",
  "Mobile-first Approach",
  "Performance Optimization"
];

function AnimatedCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Infoblock() {
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
    <section className="section infoblock" ref={sectionRef}>
      <div className="container info-flex">

        <div className={`info-text ${visible ? 'animate-in' : ''}`}>
          <h2 className="title">
            We Build Scalable <span className="title-accent">Digital Products</span>
          </h2>

          <p className="subtitle">
            Our team combines design, technology, and strategy to deliver 
            high-quality digital experiences that transform businesses.
          </p>

          <ul className="info-list">
            {features.map((feature, index) => (
              <li key={index} className="info-list-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="check-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="info-stats">
            <div className="card stat">
              <h3><AnimatedCounter end={100} suffix="+" /></h3>
              <p>Projects</p>
            </div>
            <div className="card stat">
              <h3><AnimatedCounter end={50} suffix="+" /></h3>
              <p>Clients</p>
            </div>
            <div className="card stat">
              <h3><AnimatedCounter end={5} suffix="+" /></h3>
              <p>Years</p>
            </div>
          </div>
        </div>

        <div className={`info-visual ${visible ? 'animate-in-right' : ''}`}>
          <div className="visual-card">
            <div className="visual-grid">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="grid-box" style={{ animationDelay: `${i * 0.05}s` }}></div>
              ))}
            </div>
            <div className="visual-floating">
              <span>🚀</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}