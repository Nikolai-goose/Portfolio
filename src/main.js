import React from 'react';
import ReactDOM from 'react-dom'
import './styles/main.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'

ReactDOM.render(
    <div className="wrapper">
        <div className="mainContent">
          <Header />
          <About />
          <Projects />
          <Contact />
        </div>
    </div>,
     document.getElementById('root')
);

