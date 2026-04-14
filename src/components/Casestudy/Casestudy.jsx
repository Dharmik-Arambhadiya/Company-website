import React from "react";
import "./Casestudy.css";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/assets/project1.jpg"
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/assets/project2.jpg"
  },
  {
    title: "Mobile App",
    category: "App Design",
    image: "/assets/project3.jpg"
  }
];

export default function Casestudy() {
  return (
    <section className="section case-study">
      <div className="container">

        <h2 className="title">Our Work</h2>
        <p className="subtitle">
          Explore some of our recent projects and creative solutions.
        </p>

        <div className="case-grid">
          {projects.map((item, index) => (
            <div className="card case-card" key={index}>

              <div className="case-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="case-content">
                <span className="case-category">{item.category}</span>
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}