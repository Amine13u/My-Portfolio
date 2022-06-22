import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="hamburger" onClick={() => setShow(!show)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <span className="brand">Web Dev</span>
      <div className={show ? "menu expanded" : "menu"}>
        <ul>
          <li>Home</li>
          <li>
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              About Me
            </Link>
          </li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
