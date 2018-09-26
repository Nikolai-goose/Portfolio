import React from 'react'
import SocialLink from './SocialLink'

class Footer extends React.Component {
    render() {
    let socials = [
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
        return (
            <footer className="footer">
                <div className="footer-text">
                    <h1 className="footer-text-title">Or just mail me</h1>
                    <a href="mailto:akors99@gmail.com" className="footer-text-email">akors99@gmail.com</a>
                    <div className="footer-text-copyright">Nikolai Guschin ©2018 </div>
                </div>
                <div className="footer-links">
                    <ul className="links-list">
                        {   
                            socials.map((link) => (
                                    <SocialLink 
                                        key={link.url}
                                        url={link.url}
                                        icon={link.icon}
                                    />
                                )
                            )
                        }
                    </ul>
                </div>
            </footer>
        )
    }
}
export default Footer