import React from "react";
import BannerImageAbout from "../images/software-testing.png";
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImageAbout})` }}
      ></div>
      <div className="aboutBottom">
        <h1> What is Software Testing?</h1>
        <p>
        Software testing is a crucial process that ensures the quality and reliability of software products. According to IBM, "Software testing 
        is the process of evaluating and verifying that a software product or application does what it is supposed to do. 
        The benefits of testing include preventing bugs, reducing development costs and improving performance." 
        The two most common approaches to software testing are manual and automated testing.
    </p>
       <h3>
       ThinkTesting focuses on both Manual and Automated testing, 
       so feel free to explore this website to learn more about them! 
       </h3>
      </div>
    </div>
  );
}

export default About;