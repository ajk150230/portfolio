import React, { Component } from "react";
import './ImageView.scss'

export default class ImageView extends Component {
  render() {
    const { imgUrl, toggle } = this.props;
    return (
      <div className="image-container" onClick={toggle}>
        <div
          className="image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
    );
  }
}
