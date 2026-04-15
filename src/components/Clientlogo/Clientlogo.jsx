import React, { useState } from "react";
import "./Clientlogo.css";

const logos = [
  { id: 1, name: "Google", icon: "🔍" },
  { id: 2, name: "Microsoft", icon: "💻" },
  { id: 3, name: "Amazon", icon: "📦" },
  { id: 4, name: "Meta", icon: "📱" },
  { id: 5, name: "Apple", icon: "🍎" },
  { id: 6, name: "Netflix", icon: "🎬" },
];

export default function Clientlogo() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section client-logo">
      <div className="container">
        <h2 className="title section-title">Trusted By</h2>
        <p className="subtitle section-subtitle">
          Leading companies trust our expertise to deliver exceptional results.
        </p>

        <div 
          className="logo-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="logo-track"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                className="logo-item" 
                key={index}
                style={{ animationDelay: `${(index % logos.length) * 0.1}s` }}
              >
                <div className="logo-card">
                  <span className="logo-icon">{logo.icon}</span>
                  <span className="logo-name">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}