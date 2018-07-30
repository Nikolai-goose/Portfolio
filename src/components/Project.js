import React from 'react';
import '../styles/Project.scss'

class Project extends React.Component {
    render() {
        console.log(this.props.img);
        
        var style = { backgroundImage: 'url(' + this.props.img + ')',
    };

        return(
            <li className="projects-list-item" style={style} >
                <div className="project-content">
                    <h1 className="project-title"> {this.props.title} </h1>
                    <p className="project-text"> {this.props.description} </p>
                    <a className="project-link" href={this.props.link} ><span>See</span></a>
                </div>
            </li>
        )
    }
}

export default Project