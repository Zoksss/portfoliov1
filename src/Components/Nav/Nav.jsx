import React from "react";
import { useTransition, animated } from "react-spring"


import "./Nav.scss";

import Logo from "../../images/ztlogo.png"
import Hamburger from "../../images/hamburger.png"

import Github from "../../images/github.png"
import Linkedin from "../../images/linkedin.png"
import Youtube from "../../images/youtube.png"




function Nav() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const transition = useTransition(isNavOpen, {
        from: { marginLeft: -250, y: 0, opacity: 0 },
        enter: { marginLeft: 0, y: 0, opacity: 1 },
        leave: { marginLeft: 250, y: 0, opacity: 0 },
    });
    return (
        <nav>
            <a href="#" className="nav-logo"><img src={Logo} alt="zoran todorovic logo" /></a>
            <h1 className="nav-logo-text">Zoran <span> Todorović</span></h1>
            <button className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
                <div className="hamburger-line hamburger-line1"></div>
                <div className="hamburger-line hamburger-line2"></div>
                <div className="hamburger-line hamburger-line3"></div>
            </button>

            {transition((style, item) =>
                item ? <animated.div className="nav-open" style={style}>
                    <ul className="nav-links">
                        <a href="#"><li>work</li></a>
                        <a href="#"><li>resume</li></a>
                        <a href="#"><li>about</li></a>
                        <a href="#"><li>contact</li></a>
                       <a href="#" className="nav-social-media"><li><img src={Youtube} alt="youtube"></img></li></a>
                        <a href="#" className="nav-social-media"><li><img src={Linkedin} alt="linkedin"></img></li></a>
                        <a href="#" className="nav-social-media"><li><img src={Github} alt="github"></img></li></a>

                    </ul>
                </animated.div> : ""
            )}
        </nav>
    );
}

export default Nav;
