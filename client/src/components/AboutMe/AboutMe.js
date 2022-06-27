import React from "react";
import { Link } from "react-scroll";
import Head from "../Head/Head";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container" id="about-me">
      <div className="about-me-parent">
        <Head title={"About Me"} description={"Why Choose Me ?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full-Stack web developer with background knowledge of MERN and
              MEVN stacks with Redux and Vuex respectively, along with a knack
              of building applications with utmost efficiency.
              <br />
              Strong professional with a willing to be an asset for an
              organization.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-head">
                <span>Here are a few Highlights :</span>
              </div>
              <div className="highlight-list">
                <ul>
                  <li>Full-Stack web development</li>
                  <li>Interactive Front-End as per the Design</li>
                  <li>React and Vue</li>
                  <li>Redux and Vuex for State Management</li>
                  <li>Building RESTful APIs</li>
                  <li>Managing Databases</li>
                </ul>
              </div>
            </div>
            <div className="about-me-options">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
                activeClass="active"
              >
                <button className="btn primary-btn">Hire Me</button>
              </Link>
              <a href="resume.pdf" download="Mohamed Amine resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
