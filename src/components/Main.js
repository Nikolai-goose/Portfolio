import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this)
    }
    
    scrollToBottom(e){
        e.preventDefault();
        scroll.scrollToBottom()
    }

    render() {
        return(
            <div className="section main" id='main'>
                <div className="main-title">
                    <div className="circle">
                        <h1 className="main-title-text">
                            I'm a <br/>
                            <span style={{color: '#3399FF'}}>front-end </span>  web<br/>
                            developer
                        </h1>
                    </div>
                </div>
                <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="down-arrow" 
                >
                    <i className="fas fa-sort-down"></i>
                </Link>
                <svg preserveAspectRatio="none" viewBox="0 0 100 100" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 0 L 50 100 L 0 100 Z" fill="#3399FF" stroke="#3399FF"></path>
                        <path d="M 50 100 L 100 100 L 100 0 Z" fill="#3399FF" stroke="#3399FF"></path>
                </svg>
            </div>
        )
    }
}

export default Main