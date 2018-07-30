import React from 'react';
import SocialLink from './SocialLink'
import '../styles/Contact.scss';
import '../styles/Footer.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socials: [
                {
                    url: 'https://www.linkedin.com/in/nikolai-guschin-2aaab1166/',
                    icon: 'fab fa-linkedin-in'
                },
                {
                    url: 'https://github.com/Nikolai-goose',
                    icon: 'fab fa-github'
                },
                {
                    url: 'https://www.facebook.com/nikolai.guschin.75',
                    icon: 'fab fa-facebook-f'
                }
            ]
        }
    }

    componentDidMount() {
        console.log(this.state.soci);
        
    }

    render() {
        return(
            <div className="section contact">
                <div className="contact-main">
                <h1 className="section-title">Contact Me</h1>
                    <form action="#" className="contact-form">
                        <input type="text" name="name" className="contact-input" placeholder="Name"/>
                        <input type="text" name="e-mail" className="contact-input" placeholder="Email"/>                        
                        <textarea  name="text" className="contact-input textarea" rows="4" placeholder="Your great idea..."/>
                        <input type="submit" value="Send" className="contact-submit"/> 
                    </form>
                </div>
                <footer className="footer">
                    <div className="footer-text">
                        <h1 className="footer-text-title">Or just mail me</h1>
                        <a href="#" className="footer-text-email">akors99@gmail.com</a>
                        <div className="footer-text-copyright">Nikolai Guschin ©2018 </div>
                    </div>
                    <div className="footer-links">
                        <ul className="links-list">
                            {   
                                this.state.socials.map(function(link){
                                    return(
                                        <SocialLink 
                                            key={link.url}
                                            url={link.url}
                                            icon={link.icon}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Contact