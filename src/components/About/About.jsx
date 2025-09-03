import React from "react";
import "./About.css";
import about from "../../assets/images/about.png";
import playicon from "../../assets/images/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img src={about} alt="" className="about-img"/>
        <img src={playicon} alt="" className="play-icon"/>
      </div>

      <div className="aboutRight">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nostrum
        nulla vero quasi voluptate unde. Quas illum accusamus suscipit
        voluptatem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nostrum
        nulla vero quasi voluptate unde. Quas illum accusamus suscipit
        voluptatem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nostrum
        nulla vero quasi voluptate unde. Quas illum accusamus suscipit
        voluptatem!
      </p>
      </div>
    </div>
  );
};

export default About;
