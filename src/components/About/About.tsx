import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./About.css";
import 'animate.css';

const About = () => {
  return (
    <div>
      <div style={{ position: "relative", color: "white" }}>
        <h3 style={{ fontWeight: "800", zIndex: "1", position: "relative" }}>
          Full Stack Engineer with a serious passion for creating, automating and improving.
        </h3>
        <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
          <h1 className="about-me-bg">ABOUT ME</h1>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default About;
