import React from 'react';


const SkillsList = (props) =>{
    return(
        <ul className="skills-list">
            {
                props.skills.map(function(skill){
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

export default SkillsList