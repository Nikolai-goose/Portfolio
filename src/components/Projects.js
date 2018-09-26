import React from 'react'
import Project from './Project'


import mrBurger from '../images/MrBurger.jpg'
import roteBirne from '../images/RoteBirne.png'
import noteApp from '../images/noteApp.png'
import parfum from '../images/parfum.png'

const Projects = (props) => {
    const projects = [
        {
            title: 'Mr. Burger',
            img: mrBurger,
            description: 'A website for "Mr.Burger" fictional company done for Web-Dev course at LoftSchool',
            link: 'https://github.com/Nikolai-goose/Burgers'
        },
        {
            title: 'Rote birne',
            img: roteBirne,
            description: 'A front-end part for deutsch designer "Rote birne"',
            link: 'https://rotebirne-design.de/'
        },
        {
            title: 'Task app',
            img: noteApp,
            description: 'A simple react based task app that is more useful than you think',
            link: 'https://github.com/Nikolai-goose/Simple-task-app'
        },
        {
            title: 'Parfuemfuerdich',
            img: parfum,
            description: 'A HTML layout for e-mail message',
            link: false
        },
    ];
    return(
        <div className={ props.active ? 'section projects active' : 'section projects' }>
            <svg preserveAspectRatio="none" viewBox="0 0 100 100" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 0 L 50 100 L 100 0 Z" fill="white" stroke="white"></path>
            </svg>
            <h1 className="section-title">My Projects</h1>
            <ul className="projects-list">
                {
                    projects.map(function(project){
                        return(
                            <Project 
                                key={project.title}
                                title={project.title}
                                img={project.img}
                                description={project.description}
                                link={project.link}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Projects