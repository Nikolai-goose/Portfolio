import React from 'react';

const Project = (props) => {
    var style = { backgroundImage: 'url(' + props.img + ')'}
    return(
        <li className="projects-list-item" style={style} >
            <div className="project-content">
                <div className="project-text">
                    <h1 className="project-title"> {props.title} </h1>
                    <p className="project-desc"> {props.description} </p>
                </div>
                {props.link ?  <a className="project-link" href={props.link} ><span>See</span></a> : ''}
            </div>
        </li>
    )    
}

export default Project