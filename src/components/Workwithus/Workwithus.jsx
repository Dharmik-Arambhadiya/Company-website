import React from "react";
import "./Workwithus.css";

export default function Workwithus() {
  return (
    <section className="section workwithus">
      <div className="work-bg">
        <div className="work-circle circle-1"></div>
        <div className="work-circle circle-2"></div>
      </div>
      
      <div className="container work-center">
        <h2 className="title work-title">Let's Work Together</h2>
        <p className="subtitle work-subtitle">
          Have a project in mind? Let's build something amazing.
        </p>

        <button className="btn-primary work-btn">
          <span>Start Project</span>
          <span className="btn-arrow">→</span>
        </button>

        <div className="work-decoration">
          <span className="deco-line"></span>
          <span className="deco-dot"></span>
          <span className="deco-line"></span>
        </div>
      </div>
    </section>
  );
}