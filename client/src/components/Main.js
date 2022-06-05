import React from "react";
import "./main.css";
import resume from "../files/resume.pdf";
import logos from "../images/logos/logos";

const Main = () => {
  return (
    <div id="main" className="main">
      <div className="left">
        <h1>David Simmons</h1>
        <h2>Web Developer</h2>
        <hr />
        <div className="skills-basic">
          <img src={logos.HTML} alt="HTML" />
          <img src={logos.CSS} alt="CSS" />
          <img src={logos.JS} alt="JavaScript" />
        </div>
        <div className="skills-advanced">
          <img src={logos.React} alt="React.js" />
          <img src={logos.Node} alt="Node.js" />
          <img src={logos.Express} alt="Express.js" />
          <img src={logos.Mongo} alt="Mongo DB" />
        </div>
      </div>
      <div className="right">
        <ul>
          <li>
            <a
              className="main-link"
              href="https://github.com/d-simmons925"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <p>GitHub</p>
            </a>
          </li>
          <li>
            <a
              className="main-link"
              href="https://www.linkedin.com/in/david-s-194427218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a className="main-link" href={resume} download>
              <i className="fas fa-download"></i>
              <p>Resume</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
