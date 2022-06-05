import React from 'react'
import './projects.css'
import Project from './Project'
import drawTogether from '../images/drawTogether.webp'
import mernCalendar from '../images/mernCalendar.webp'
import pokemonTCG from '../images/pokemonTCG.webp'

export const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <Project
        title="Draw Together"
        image={drawTogether}
        github="https://github.com/d-simmons925/DrawTogether"
        demo="https://stormy-journey-60064.herokuapp.com/"
        desc="Draw Together is a simple drawing app that allows users to draw on the same canvas using web sockets. Users can join the same room using a randomly generated id, and will only be able to draw within that room."
      />
      <Project
        title="MERN Calendar"
        image={mernCalendar}
        github="https://github.com/d-simmons925/MERN_Calendar"
        demo="https://sheltered-headland-93031.herokuapp.com/"
        desc="This project converts Portexe's react calendar (which can be found at https://github.com/portexe/ReactCalendar) into a full stack CRUD application. I also changed some of the css to make the calendar responsive so it can work on mobile devices."
      />
      <Project
        title="Pokemon TCG App"
        image={pokemonTCG}
        github="https://github.com/d-simmons925/Pokemon_TCG_App"
        demo="https://pokemon-tcg-search-app.herokuapp.com/"
        desc="This project uses a web api to get data about pokemon cards and displays data about each card relating to what the user searches for. This project is also responsive and works on mobile devices."
      />
    </div>
  )
}

export default Projects
