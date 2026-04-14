import React from "react";
import "./ClientTrust.css";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    text: "Amazing experience! The team delivered beyond expectations and helped scale our product."
  },
  {
    name: "Sarah Smith",
    role: "Founder, StartupX",
    text: "Professional, creative, and highly skilled. Highly recommend for any digital project."
  },
  {
    name: "David Lee",
    role: "Manager, FinServe",
    text: "Their attention to detail and design quality is outstanding."
  },
  {
    name: "Emily Johnson",
    role: "CMO, Brandify",
    text: "They truly understand business needs and deliver impactful solutions."
  }
];

export default function ClientTrust() {
  return (
    <section className="section client-trust">
      <div className="container">

        <h2 className="title">What Our Clients Say</h2>
        <p className="subtitle">
          Real feedback from businesses we’ve worked with.
        </p>

        <div className="trust-slider">
          <div className="trust-track">
            {testimonials.concat(testimonials).map((item, index) => (
              <div className="card trust-card" key={index}>

                <p className="trust-text">“{item.text}”</p>

                <div className="trust-user">
                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}