import React from 'react'
import '../styles/Projects.scss'

class Projects extends React.Component {
    render() {
        return(
            <div className="section projects">
                <svg preserveAspectRatio="none" viewBox="0 0 100 100" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 0 L 50 100 L 100 0 Z" fill="white" stroke="white"></path>
                </svg>
                <h1 className="section-title">My Projects</h1>
                <ul className="projects-list">

                </ul>
            </div>
        )
    }
}

export default Projects