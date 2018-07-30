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
            </div>
        )
    }
}

export default Header