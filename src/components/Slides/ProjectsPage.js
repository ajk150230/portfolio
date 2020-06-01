import React, { Component } from "react";
import ImageView from "./ImageView";
import australia from '../../Images/australia.webp'
import Slider from "react-slick";
import "./Projects.scss";

const intramutual = [
  {
    name: "Landing Page",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590964255/IntraMutual/i-1_mujj7z.png",
  },
  {
    name: "Profile Page",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590964259/IntraMutual/i-2_miy2ki.png",
  },
  {
    name: "Discover",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590964262/IntraMutual/i-3_xnjh85.png",
  },
  {
    name: "Modal",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590964266/IntraMutual/i-4_hknkdf.png",
  },
  {
    name: "My Teams",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590964271/IntraMutual/i-5_ocegcr.png",
  },
];

const wiltt = [
  {
    name: "Landing Page",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590974124/Wiltt/w-1_gwc8ca.png",
  },
  {
    name: "Login",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590974128/Wiltt/w-3_kzajhz.png",
  },
  {
    name: "Inventory View",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590974131/Wiltt/w-4_hhjmrk.png",
  },
  {
    name: "Individual Shoe Pages",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590974133/Wiltt/w-5_vheu5f.png",
  },
  {
    name: "Checkout",
    imgUrl:
      "https://res.cloudinary.com/dblz8pwah/image/upload/v1590974137/Wiltt/w-6_iu6ggq.png",
  },
];
export default class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      view: false,
      imgUrl: "",
    };
  }
  toggle = (url) => {
    this.setState({
      view: !this.state.view,
      imgUrl: url,
    });
    console.log(this.state.imgUrl);
    console.log(this.state.view);
  };
  render() {
    return (
      <div className="projects-container">
        <div className="projects-card">
          <a
            className="project-title"
            href="https://github.com/ajk150230/Intramutual"
          >
            IntraMutual Project
          </a>
          {intramutual.map((cards) => {
            return (
              <div
                className="photos"
                style={{ backgroundImage: `url(${cards.imgUrl})` }}
                onClick={() => this.toggle(cards.imgUrl)}
              ></div>
            );
          })}
        </div>
        <div className="projects-card">
          <a
            className="project-title"
            id="wiltt"
            href="https://github.com/ajk150230/wiltt"
          >
            Wiltt
          </a>
          {wiltt.map((cards) => {
            return (
              <div
                className="photos"
                style={{ backgroundImage: `url(${cards.imgUrl})` }}
                onClick={() => this.toggle(cards.imgUrl)}
              ></div>
            );
          })}
        </div>
        {this.state.view ? (
          <ImageView imgUrl={this.state.imgUrl} toggle={this.toggle} />
        ) : (
          ""
        )}
        <div
          className="img-3"
          style={{ backgroundImage: `url(${australia})` }}
        ></div>
        <div className="img-cover-3"></div>
      </div>
    );
  }
}
