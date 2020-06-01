import React, { useRef, useEffect } from "react";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import backgroundimage from '../../Images/coding.webp'
import "./Skills.scss";

export default function Skillspage() {
    let image = useRef(null);
    let cover = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");
    const tl = new TimelineLite();
    useEffect(() => {
      tl.to(imageReveal, 1.4, {height: "0%", ease: Power2.easeInOut })
        .from(image, 1.4, { scale: 1.5, ease: Power2.easeInOut, delay: -1.6 })
        .from(cover, 1.4, { scale: 5, ease: Power2.easeIn, delay: -1.6 });
    });
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
      <div
            className="img-2"
            style={{ backgroundImage: `url(${backgroundimage})` }}
            ref={(el) => (image = el)}
          ></div>
          <div className="img-cover-2" ref={(el) => (cover = el)}></div>
    </div>
  );
}
