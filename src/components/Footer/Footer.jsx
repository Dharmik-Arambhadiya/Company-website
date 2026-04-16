import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-col">
          <h2 className="footer-logo">Redlio</h2>
          <p className="subtitle">
            We design and develop modern digital experiences that help 
            businesses grow and succeed.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">Branding</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Redlio. All rights reserved.</p>
      </div>
    </footer>
  );
}