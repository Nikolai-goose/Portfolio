import React from 'react';
import ReactDOM from 'react-dom'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './styles/main.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'

class Main  extends React.Component {
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

        if (pos < 0.5 && this.state.section != 'header') {
            this.setState({section: 'header'})   
        } else {
            if (pos >= 0.5 && pos < 1.5 && this.state != 'about') {
                this.setState({section: 'about'})                
            } else {
                if (pos >= 1.5 && pos < 3.5 && this.state != 'projects') {
                    this.setState({section: 'projects'})                
                } else {
                    if (pos >= 3.5 &&  this.state != 'contact') {
                        this.setState({section: 'contact'})                
                    }
                }    
            }
        }
        
        console.log(pos);
        console.log(this.state.section);  
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="mainContent">
                    <Header active={ this.state.section == 'header' ? true : false }/>
                    <About active={ this.state.section == 'about' ? true : false }/>
                    <Projects active={ this.state.section == 'projects' ? true : false }/>
                    <Contact active={ this.state.section == 'contact' ? true : false }/>
                </div>
            </div>  
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

