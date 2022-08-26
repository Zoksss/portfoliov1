import "./Footer.scss";

import Github from "../../images/github.png"
import Linkedin from "../../images/linkedin.png"
import Youtube from "../../images/youtube.png"

function Footer() {

    return (
        <div className="footer">
            <p className="footer-name">Zoran <span>Todorović</span> </p>
            <div className="social-media-icon">
                <a href="asd"><img src={Github}></img></a>
                <a href="asd"><img src={Linkedin}></img></a>
                <a href="asd"><img src={Youtube}></img></a>
            </div>
            <ul>
                <li><a href="">[ work ]</a></li>
                <li><a href="">[ resume ]</a></li>
                <li><a href="">[ about ]</a></li>
                <li><a href="">[ contact ]</a></li>
            </ul>

            <p className="footer-coment">created with ☕ and ❤️ by Zoran :) </p>
        </div>
    );
}

export default Footer;
