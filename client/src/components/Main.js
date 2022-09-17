import React from "react";
import styles from "../styles/main.module.css";
import resume from "../files/resume.pdf";
import logos from "../images/logos/logos";

const Main = () => {
  return (
    <div id="main" className={styles.main}>
      <div className={styles.left}>
        <h1>David Simmons</h1>
        <h2>Web Developer</h2>
        <div className={styles.skillsBasic}>
          <img src={logos.HTML} alt="HTML" />
          <img src={logos.CSS} alt="CSS" />
          <img src={logos.JS} alt="JavaScript" />
        </div>
        <div className={styles.skillsAdvanced}>
          <img src={logos.React} alt="React.js" />
          <img src={logos.Node} alt="Node.js" />
          <img src={logos.Express} alt="Express.js" />
          <img src={logos.Mongo} alt="Mongo DB" />
        </div>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <a
              className={styles.mainLink}
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
              className={styles.mainLink}
              href="https://www.linkedin.com/in/david-s-194427218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a className={styles.mainLink} href={resume} download>
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
