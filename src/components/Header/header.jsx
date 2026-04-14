import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="container nav-flex">

        <div className="logo">
          <span className="logo-text">Redlio</span>
          <span className="logo-dot"></span>
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((item, i) => (
            <a 
              key={item} 
              href="#" 
              className="nav-link"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
              <span className="link-underline"></span>
            </a>
          ))}
          <button className="btn-primary nav-btn btn-animate">
            Get Started
            <span className="btn-arrow">→</span>
          </button>
        </nav>

        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </header>
  );
}