import React from 'react';
import ReactDOM from 'react-dom'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './styles/App.scss';
import Header from './components/Header';
import Main from './components/Main'
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'

class App  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'header'
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this)
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })        
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll() {
        let pos = window.scrollY/window.innerHeight;

        if (pos < 0.5 && this.state.section != 'main') {
            this.setState({section: 'main'})   
        } else {
            if (pos >= 0.5 && pos < 1.5 && this.state != 'about') {
                this.setState({section: 'about'})                
            } else {
                if (pos >= 1.5 && pos < 3 && this.state != 'projects') {
                    this.setState({section: 'projects'})                
                } else {
                    if (pos >= 3 &&  this.state != 'contact') {
                        this.setState({section: 'contact'})                
                    }
                }    
            }
        } 
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="mainContent">
                    <Header />
                    <Main active={ this.state.section == 'main' ? true : false }/>
                    <About active={ this.state.section == 'about' ? true : false }/>
                    <Projects active={ this.state.section == 'projects' ? true : false }/>
                    <Contact active={ this.state.section == 'contact' ? true : false }/>
                    <Footer />
                </div>
            </div>  
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

