import React from 'react'
import { Link } from 'react-router-dom'
import headshot from "../assets/Code Differently 8_14-70.jpg"
import './pages.css'
const Home = () => {
  return (
    <div className="App">
          <header className="App-header">
            <h1>Daniel Boyce</h1>
            <img 
            src={headshot}
            alt="headshot"
            className="headshot"
            />
            <p>Software Engineer</p>
          </header>
          <nav>
            <Link to="/contact" >Contact Me</Link>
            <Link to="/projects">My Projects</Link>
          </nav>
    </div>
  )
}

export default Home
