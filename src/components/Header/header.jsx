import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/#work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-flex">
        <Link to="/" className="logo">
          <img src="Header-logo.svg" alt="Redlio" className="logo-img" />
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {navItems.map((item, i) => (
            <Link 
              key={item.label} 
              to={item.path} 
              className="nav-link"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.label}
              <span className="link-underline"></span>
            </Link>
          ))}
          <Link to="/contact" className="site-button nav-btn btn-animate">
            Get Started
            <span className="btn-arrow">→</span>
          </Link>
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