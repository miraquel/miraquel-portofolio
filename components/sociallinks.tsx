import React, { Component } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface ISocial {
    icon: IconType,
    url: string
}

const Socials : ISocial[] = [
    {
        icon:FaFacebook,
        url:"https://facebook.com/chaidir.ali"
    },
    {
        icon:FaLinkedin,
        url:"https://www.linkedin.com/in/chaidirassegaf/"
    },
    {
        icon:FaInstagram,
        url:"https://instagram.com/chaidirassegaf"
    },
    {
        icon:FaTwitter,
        url:"https://twitter.com/adingassegaf"
    },
    {
        icon:FaGithub,
        url:"https://github.com/miraquel"
    },
]

const SocialLinks: React.FC<{className?: string, style?: React.CSSProperties}> = ({className, style}) => {
    const links = Socials.map(social => {
        return (
            <a key={social.url} className={className} style={style} href={social.url} target="_blank" rel="noopener noreferrer"><social.icon /></a>
        )
    })

    return (
        <React.Fragment>
            {links}
        </React.Fragment>
    )
}

export default SocialLinks