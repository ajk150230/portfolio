import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3, Power2 } from "gsap";
import AboutPage from './Slides/AboutPage'
import SkillsPage from './Slides/Skillspage'
import ProjectsPage from './Slides/ProjectsPage'
import dallas from "../Images/dallas-cover.webp";

export default function Body() {
  let container = useRef(null);
  let card = useRef(null);
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);

  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    TweenMax.to(container, 1, {});
    TweenMax.staggerFrom(
      [card, card1, card2, card3],
      0.3,
      { opacity: 0, y: 40, ease: Power3.easeOut, delay: 1.2 },
      0.4
    );
  }, []);

  const handleAbout = () => {
    TweenMax.to(card, 0.1, {
      fontSize: "22px",
      borderBottom: "solid 2px #ff7b00",
      color: "#ff7b00",
      ease: Power2.easeIn,
    });
    TweenMax.staggerTo([card1, card2, card3], 0.1, {
      fontSize: "1.1em/1",
      border: 'none',
      color: 'white'
    }, 0.1)
    setAbout(true);
    setSkills(false);
    setProjects(false);
    setContacts(false);
    console.log(about)

  };
  const handleSkills = () => {
    setSkills(true);
    TweenMax.to(card1, 0.1, {
      fontSize: "22px",
      borderBottom: "solid 2px #F985FF",
      color: "#F985FF",
      ease: Power2.easeOut,
    });
    TweenMax.staggerTo([card, card2, card3], 0.1, {
      fontSize: "1.1em/1",
      border: 'none',
      color: 'white'
    }, 0.1)
    setAbout(false);
    setProjects(false);
    setContacts(false);
  };
  const handleProjects = () => {
    TweenMax.to(card2, 0.1, {
      fontSize: "22px",
      borderBottom: "solid 2px #E8406E",
      color: "#E8406E",
      ease: Power2.easeOut,
    });
    TweenMax.staggerTo([card, card1, card3], 0.1, {
      fontSize: "1.1em/1",
      border: 'none',
      color: 'white'
    }, 0.1)
    setAbout(false);
    setSkills(false);
    setProjects(true);
    setContacts(false);
  };
  const handleContacts = () => {
    TweenMax.to(card3, 0.1, {
      fontSize: "22px",
      borderBottom: "solid 2px #9A8EFF",
      color: "#9A8EFF",
      ease: Power2.easeOut,
    });
    TweenMax.staggerTo([card, card1, card2], 0.1, {
      fontSize: "1.1em/1",
      border: 'none',
      color: 'white'
    }, 0.1)
    setAbout(false);
    setSkills(false);
    setProjects(false);
    setContacts(true);
  };
 const exitAll = () => {
  setAbout(false);
  setSkills(false);
  setProjects(false);
  setContacts(false);
 }
  return (
    <>
    <div className="body-container" ref={(el) => (container = el)}>
      <div
        className="info"
        ref={(el) => (card = el)}
        onClick={about == false ? handleAbout : exitAll}
      >
        About
      </div>
      <div
        className="info"
        ref={(el) => (card1 = el)}
        onClick={skills == false ? handleSkills : exitAll}
      >
        Skills
      </div>
      <div
        className="info"
        ref={(el) => (card2 = el)}
        onClick={projects !== true ? handleProjects : exitAll}
      >
        Projects
      </div>
      <div
        className="info"
        ref={(el) => (card3 = el)}
        onClick={contacts !== true ? handleContacts : exitAll}
      >
        Home
      </div>
    </div>
    <span>
      {about == true ? <AboutPage/> : exitAll}
      {skills == true ? <SkillsPage/> : exitAll}
      {projects == true ? <ProjectsPage/> : exitAll}
    </span>
    <span>
      <img
      id="hamburger"
      src="https://blog.trymyui.com/wp-content/uploads/2016/01/Hamburger-Menu-icon.png"
      onClick={()=> setOpen(!open)}
      />
    </span>
    </>
  );
}
