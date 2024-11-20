import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Nouveautés uniquement</h2>
        <div>
          <div className="hero-hand-icon">
            <p>nouvelle</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>pour tous</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
