import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="parent">
        <div className="details">
          <div className="cols">
            <div className="icons">
              <a
                href="https://github.com/Amine13u"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamedaminemannai/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Mohamed Amine</span>
            </span>
          </div>
          <div className="role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 💻",
                    1000,
                    "Full-Stack Developer 🖥️",
                    1000,
                    "MERN-Stack Developer ⚛️",
                    1000,
                    "MEVN-Stack Developer 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="tagline">
                THE ODYSSEY OF A FULL-STACK WEB DEVELOPER.
              </span>
            </span>
          </div>
          <div className="options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="resume.pdf" download="Mohamed Amine resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="picture">
          <div className="background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
