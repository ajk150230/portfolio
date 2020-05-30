import React, { useRef, useEffect } from "react";
import dallas from "../Images/dallas-cover.webp";
import logo from "../Images/alexlogov1.png"
import CSSRulePlugin from "gsap/CSSRulePlugin";

import Nav from './Body'
import { TimelineLite, Power2 } from "gsap";

export default function Header() {
  let container = useRef(null);
  let image = useRef(null);
  let cover = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 0.2, { css: { visibility: "visible" }})
      .to(imageReveal, 1.4, {height: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.5, ease: Power2.easeInOut, delay: -1.6 })
      .from(cover, 1.4, { scale: 5, ease: Power2.easeIn, delay: -1.6 });
  });
  return (
    <main className="bannerMain">
      <section className="container" ref={(el) => (container = el)}>
        <div className="img-container">
          <div className="intro">
            <div 
            className='logo-container'
            style={{backgroundImage :`url(${logo})`}}>
            </div>
            <div className="intro-container">
              <span className='intro-line-2'>Alex</span>
              <span className='intro-line-3'>also Sung Kim,</span>
              <span className='intro-line-3'>Full Stack Web Developer,</span>
              <span className='intro-line-3'>Design Enthusiast,</span>
              <span className='intro-line-3'>Food Fanatic</span>
            </div>
          </div>
          <Nav/>
          <div
            className="img"
            style={{ backgroundImage: `url(${dallas})` }}
            ref={(el) => (image = el)}
          ></div>
          <div className="img-cover" ref={(el) => (cover = el)}></div>
        </div>
      </section>
    </main>
  );
}
