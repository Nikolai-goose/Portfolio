import React from 'react';
import SkillsList from './SkillsList'
import '../styles/About.scss';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    name: 'HTML',
                    progress: '90'
                },
                {
                    name: 'CSS',
                    progress: '75'
                },
                {
                    name: 'JavaScript',
                    progress: '85'
                },
                {
                    name: 'React',
                    progress: '80'
                },
                {
                    name: 'Redux',
                    progress: '65'
                },
                {
                    name: 'Node.js',
                    progress: '75'
                },
            ]
        };
        this.handleSkillChange = this.handleSkillChange.bind(this);
    }

    handleSkillChange(e) {
        console.log('click');
    }

    render() {    

        return(
            <div className={ this.props.active ? 'section about active' : 'section about' } id="about">
                <div className="about-text">
                    <h1 className="section-title">Who am I?</h1>
                    <p>I am a Front-End Developer from Moscow and<br/>
                    I like to create impressive and exciting things<br/>
                    </p>
                </div>
                <div className="about-skills">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 100" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 100 L 50 0 L 100 100 Z" fill="white" stroke="white"></path>
                    </svg>
                    <div className="skills-inner">
                        <h1 className="section-title">What I can?</h1>
                        <SkillsList
                            skills={this.state.skills} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default About 