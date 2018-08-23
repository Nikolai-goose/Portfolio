import React from 'react'
import '../styles/Header.scss'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends React.Component {
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
            <header className="header">
                <h2 className="menu__title">Nikolai Guschin</h2>
                <div className="menu__nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link 
                                to="header" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="about" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                            >
                                About me
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="projects" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                            >
                                My work
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="contact" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                            >
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header