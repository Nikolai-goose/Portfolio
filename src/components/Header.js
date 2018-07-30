import React from 'react';
import '../styles/Header.scss';

class Header extends React.Component {
    render() {
        return(
            <div className="section header">
                {/* Header-menu */}
                <div className="header__menu">
                    <h2 className="menu__title">Nikolai Guschin</h2>
                    <div className="menu__nav">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="" className="nav__link" data-scroll-to="1">Home</a></li>
                            <li className="nav__item"><a href="" className="nav__link" data-scroll-to="2">About me</a></li>
                            <li className="nav__item"><a href="" className="nav__link" data-scroll-to="3">Contact me</a></li>
                        </ul>
                    </div>
                </div>
                {/* Header title */}
                <div className="header__title">
                    <div className="circle">
                        <h1 className="header__title-text">
                            I'm a <br/>
                            <span style={{color: '#3399FF'}}>front-end </span>  web<br/>
                            developer
                        </h1>
                    </div>
                </div>
                <svg preserveAspectRatio="none" viewBox="0 0 100 100" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 0 L 50 100 L 0 100 Z" fill="#3399FF" stroke="#3399FF"></path>
                        <path d="M 50 100 L 100 100 L 100 0 Z" fill="#3399FF" stroke="#3399FF"></path>
                </svg>
            </div>
        )
    }
}

export default Header