import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="nav-container">
      <div className="hamburger" onClick={() => setShow(!show)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <span
        className="brand"
        onClick={() => {
          animateScroll.scrollToTop();
        }}
      >
        Web Dev
      </span>
      <div className={show ? "menu expanded" : "menu"}>
        <ul>
          <li>
            <Link
              to="profile"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-100}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-50}
              activeClass="active"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              activeClass="active"
            >
              Resume
            </Link>
          </li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
