import React from 'react'

class SocialLink extends React.Component {
    render() {
        return(
            <li className="links-list-item">
                <a href={this.props.url} className="links-list-item-link">
                    <i className={this.props.icon}></i>
                </a>
            </li>
        )
    }
}

export default SocialLink