import './App.css'
import { useState } from 'react'
import Nav from './components/nav.js'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Particles from 'react-tsparticles'

function App() {
  const [msg, setMsg] = useState(null)
  const onDismiss = () => setMsg(null)
  const handleMsg = data => {
    setMsg(data)
  }
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#f3f3f3',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.4,
                size: 40,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 150,
                duration: 0.8,
              },
            },
          },
          particles: {
            links: {
              color: '#208AAE',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1.1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'out',
              random: false,
              speed: 1.25,
              straight: false,
              warp: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 0,
            },
          },
          detectRetina: true,
        }}
      />
      <Nav />

      <div className="content">
        {msg && msg.type === 'success' && (
          <div className="alert success">
            <p>{msg.msg}</p>
            <button className="close" onClick={onDismiss}>
              X
            </button>
          </div>
        )}
        {msg && msg.type === 'error' && (
          <div className="alert error">
            <p>{msg.msg}</p>
            <button className="close" onClick={onDismiss}>
              X
            </button>
          </div>
        )}
        <Main />
        <About />
        <Projects />
        <Contact handleMsg={handleMsg} />
      </div>
    </div>
  )
}

export default App
