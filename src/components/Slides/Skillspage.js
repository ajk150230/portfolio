import React from "react";
import "./Skills.scss";

export default function Skillspage() {
  return (
    <div className="skills-container">
      <div className="skills-card">
        <section className="skills-title">Front-end</section>
        <section className="skills-card-content">Javascript / HTML / CSS/Reactjs</section>
      </div>
      <div className="skills-card">
        <section className="skills-title">Back-end</section>
        <section className="skills-card-content">Node.js / PostgresQL</section>
      </div>
      <div className="skills-card">
        <section className="skills-title">UI/UX</section>
        <section className="skills-card-content">Wireframing / Animations / Responsive Design</section>
      </div>
      <div className="skills-card">
        <section className="skills-title">Other</section>
        <section className="skills-card-content">Graphic Design / AWS Cloud</section>
      </div>

    </div>
  );
}
