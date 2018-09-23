import React from 'react';

class Project extends React.Component {
    render() {
    var style = { backgroundImage: 'url(' + this.props.img + ')',
    };

        return(
            <li className="projects-list-item" style={style} >
                <div className="project-content">
                    <div className="project-text">
                        <h1 className="project-title"> {this.props.title} </h1>
                        <p className="project-desc"> {this.props.description} </p>
                    </div>
                    <a className="project-link" href={this.props.link} ><span>See</span></a>
                </div>
            </li>
        )
    }
}

export default Project