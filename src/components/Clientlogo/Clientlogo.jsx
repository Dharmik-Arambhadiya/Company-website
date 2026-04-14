import React from "react";
import "./Clientlogo.css";

const logos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
  "/assets/logo5.png"
];

export default function Clientlogo() {
  return (
    <section className="section client-logo">
      <div className="container">

        <h2 className="title">Trusted By</h2>
        <p className="subtitle">
          Companies that trust our work and expertise.
        </p>

        <div className="logo-slider">
          <div className="logo-track">
            {logos.concat(logos).map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo} alt="client logo" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}