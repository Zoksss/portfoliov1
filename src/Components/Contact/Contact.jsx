import "./Contact.scss";

import PdfIcon from "../../images/pdf.png"


function Contact() {
    return (
        <div className="contact">
           <h3>Get In Touch</h3>
           <button className="cta">zorantodorovic80@gmail.com</button>
            <a href="" className="getintouch">
                <img src={PdfIcon} alt="" />
                <p>resume-Zoran-Todorovic.pdf</p>
            </a>
            <h6>contact</h6>
        </div>
    );
}

export default Contact;
