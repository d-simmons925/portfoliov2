import React from "react";
import styles from "../styles/project.module.css";

const Project = ({ title, image, github, demo, desc }) => {
  return (
    <div className={styles.project}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.infoContainer}>
          <p>{desc}</p>
          <div className={styles.projectLinks}>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
              <p>Live Site</p>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
