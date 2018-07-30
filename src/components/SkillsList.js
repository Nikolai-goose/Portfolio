import React from 'react';
import '../styles/SkillsList.scss'

class  SkillsList extends React.Component {
    render() {
        return(
            <ul className="skills-list">
                {
                    this.props.skills.map(function(skill){
                        return(
                            <li key={skill.name} className="list-item">
                                <progress
                                    value={skill.progress} 
                                    max="100" 
                                    className="progress"
                                >
                                </progress>
                                <span className="skills-name">{skill.name}</span>
                            </li>    
                        ) 
                    })
                }
            </ul>
        )
    }
}

export default SkillsList