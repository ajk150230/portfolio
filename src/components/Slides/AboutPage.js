import React, { useRef, useEffect }from "react";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./About.scss";
import palm from '../../Images/palmtrees.webp'

export default function AboutPage(){
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
        <div className="bannerMain">
      <div className="about-container">
        <div className="about-content">
          <span id="about-card">
            <div
              className="devm"
              style={{
                backgroundImage:
                  "url(https://miro.medium.com/max/750/1*0iPeGOldVa0EpBAhCUUA9Q.jpeg)",
              }}
            ></div>
            <section id="about-card-text">
              <div className="title">Introduction</div>
              <div className="about-card-content">
                Hi, my name is Alex. I am a Full Stack Web Developer. I am a
                recent graduate from DevMountain, a web development coding camp.
                I am working on getting hired as Full Stack Web Developer around
                Dallas, Texas.
              </div>
              <div className="about-card-content">
                I am a well rounded developer with attention to detail and planning. 
                I am a huge fan of sports, movies and designing. On my free time I love to DIY build things.
              </div>
            </section>
          </span>
          <span id="about-card">
            <div
              className="devm"
              style={{
                backgroundImage:
                  "url(https://www.utdallas.edu/magazine/files/news_ranking.jpg)",
              }}
            ></div>
            <section id="about-card-text">
              <div className="title">Goals</div>
              <div className="about-card-content">
                Get certified in as AWS solutions architect.
              </div>
              <div className="about-card-content">
                Learn new Javascript libraries.
              </div>
              <div className="about-card-content">
                Finish my bachelor's degree.
              </div>
            </section>
          </span>
        </div>
        <div
            className="img-1"
            style={{ backgroundImage: `url(${palm})` }}
            ref={(el) => (image = el)}
          ></div>
          <div className="img-cover-1" ref={(el) => (cover = el)}></div>
      </div>
        </div>
    );
  }
