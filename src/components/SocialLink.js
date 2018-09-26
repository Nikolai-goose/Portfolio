import React from 'react'

const SocialLink = (props) => {
    return(
        <li className="links-list-item">
            <a href={props.url} className="links-list-item-link">
                <i className={props.icon}></i>
            </a>
        </li>
    )
}

export default SocialLink