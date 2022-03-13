import React from 'react'
import './about.css'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="left">
        <h1>About Me</h1>
        <p>
          I am a web developer with a passion for learning and building
          interesting things that involve web development. My primary focus has
          been learning front-end development with HTML, CSS, JavaScript, and
          React. I have also been interested in making projects that interact
          with back-end tech such as databases and web sockets using Node.js,
          Express, Mongo DB, and Socket.io.
        </p>
      </div>
      <div className="right">
        <h3>Tech I am Familiar with</h3>
        <h4>Languages</h4>
        <div className="skills">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
        </div>
        <h4>Frameworks / Libraries</h4>
        <div className="skills">
          <p>Node.js</p>
          <p>React</p>
          <p>Express</p>
          <p>Socket.io</p>
          <p>Bootstrap</p>
          <p>Redux</p>
        </div>
        <h4>Database</h4>
        <div className="skills">
          <p>Mongo DB</p>
          <p>Postrgre SQL</p>
        </div>
      </div>
    </div>
  )
}

export default About
