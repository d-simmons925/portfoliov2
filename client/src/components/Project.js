import React from 'react'
import './project.css'

const Project = ({ title, image, github, demo, desc }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <div className="info-container">
          <p>{desc}</p>
          <div className="project-links">
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
  )
}

export default Project
