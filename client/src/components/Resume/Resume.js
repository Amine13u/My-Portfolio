import React from "react";
import Head from "../Head/Head";
import { Link } from "react-scroll";
import "./Resume.css";

const Resume = () => {
  const resumeBullets = [
    {
      label: "Education",
      icon: <i className="fa-solid fa-user-graduate"></i>,
    },
    {
      label: "Work Experience",
      icon: <i className="fa-solid fa-briefcase"></i>,
    },
    {
      label: "Skills",
      icon: <i className="fa-solid fa-laptop-code"></i>,
    },
    {
      label: "Projects",
      icon: <i className="fa-solid fa-list-check"></i>,
    },
    {
      label: "Interests",
      icon: <i className="fa-solid fa-futbol"></i>,
    },
  ];

  const skillDetails = [
    { skill: "HTML", rate: 90 },
    { skill: "CSS", rate: 85 },
    { skill: "JavaScript", rate: 85 },
    { skill: "TypeScript", rate: 75 },
    { skill: "React JS", rate: 85 },
    { skill: "Vue JS", rate: 75 },
    { skill: "JavaScript", rate: 85 },
    { skill: "Express JS", rate: 85 },
    { skill: "Node JS", rate: 80 },
    { skill: "MongoDB", rate: 75 },
  ];

  const projectDetails = [
    {
      title: "Pizza App",
      subHead: "Technologies Used : Next JS, Redux, ...",
      description: "A Pizza ordering website with Admin Dashboard",
    },
    {
      title: "Users List",
      subHead:
        "Technologies Used : Vue JS, Vuex, Vuetify, Sass, Unit Testing, ...",
      description: "An Application designed for managing users list",
    },
    {
      title: "Restaurant App",
      subHead: "Technologies Used : MERN-stack, Redux, ...",
      description: "A Restaurant website with multi-role Authentification",
    },
  ];

  const ResumeHead = ({ head, date, subHead, description }) => {
    return (
      <div className="resume-head">
        <div className="resume-main-head">
          <div className="resume-head-bullet">
            <div className="head-bullet"></div>
            {head && <span>{head}</span>}
            {date && <div className="head-date">{date}</div>}
          </div>
          {subHead && (
            <div className="resume-sub-head">
              <span>{subHead}</span>
            </div>
          )}
          {description && (
            <div className="resume-head-description">
              <span>{description}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const resumeDetails = [
    <div className="resume-screen-container" key="education" id="Education">
      <ResumeHead
        head={"FullStack Web Developer Bootcamp"}
        subHead={"Gomycode"}
        date={"2021"}
      />
      <ResumeHead
        head={"Master's Degree in Communication Systems"}
        subHead={"National Engineering School of Tunis"}
        date={"2017"}
      />
      <ResumeHead
        head={"License in Mathematics and Applications"}
        subHead={"Higher National Engineering School of Tunis"}
        date={"2011"}
      />
    </div>,
    <div
      className="resume-screen-container work-container"
      key="work-experience"
      id="Work Experience"
    >
      <ResumeHead
        head={"Network Supervisor"}
        subHead={"Telecom Italia Sparkle S.p.A."}
        date={"2019-2020"}
      />
      <div className="experience-desription">
        <ul>
          <li>Handling customer complaints and claims</li>
          <li>Incidents resolution</li>
          <li>
            Tickets creation and management, backlog and escalation management
          </li>
          <li>Monitoring of alarms feedback</li>
        </ul>
      </div>
      <ResumeHead
        head={"Dispatcher"}
        subHead={"First Plaza"}
        date={"2018-2019"}
      />
      <div className="experience-desription">
        <ul>
          <li>
            Organization, planning and control of the fleet of vehicles and
            drivers
          </li>
        </ul>
      </div>
    </div>,
    <div
      className="resume-screen-container skills-container"
      key="skills"
      id="Skills"
    >
      {skillDetails.map((skill, i) => (
        <div className="skill-parent" key={i}>
          <div className="head-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-rate">
            <div
              style={{ width: skill.rate + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects" id="Projects">
      {projectDetails.map((project, i) => (
        <ResumeHead
          head={project.title}
          subHead={project.subHead}
          description={project.description}
          key={i}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests" id="Interests">
      <ResumeHead
        head={"Soccer"}
        description={
          "It’s a fun sport that requires skill, and mental and physical strength. For some reason, I turn into a different person when I play or watch games."
        }
      />
      <ResumeHead
        head={"Chess"}
        description={
          "Playing chess is a great hobby because there are many different ways that you can enjoy the game."
        }
      />
      <ResumeHead
        head={"Fitness"}
        description={
          "Going to the gym is an effecient way to clear my head and focus on myself for a while. It's a way to keep myself motivated, just thinking about how proud I can be of myself when I reach one of my goals."
        }
      />
    </div>,
  ];

  const getBullets = () => {
    return resumeBullets.map((bullet, i) => (
      <Link
        to={bullet.label}
        containerId="containerElement"
        spy={true}
        smooth={false}
        duration={1000}
        activeClass="selected-bullet"
        key={i}
      >
        <div className="bullet">
          <div className="bullet-icon">{bullet.icon}</div>
          <span className="bullet-label">{bullet.label}</span>
        </div>
      </Link>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div className="resume-details-carousel">
        {resumeDetails.map((detail) => detail)}
      </div>
    );
  };

  return (
    <div className="resume-container" id="resume">
      <div className="resume-content">
        <Head title={"Resume"} description={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullets-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details" id="containerElement">
            {getResumeScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
