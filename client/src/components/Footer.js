import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    return (
        <div className="footer">
            <div className="content has-text-centered">
                <br/>
                <p>Legal Notice</p>
                <p>Privacy Policy</p>                
                <h4>Find us on social media</h4>
                <a href="https://twitter.com/12glace"><FontAwesomeIcon icon={faFacebook} /> </a>
                <a href="https://twitter.com/12glace"><FontAwesomeIcon icon={faTwitter} /> </a>
                <a href="https://twitter.com/12glace"><FontAwesomeIcon icon={faYoutube} /> </a>
                
                By <a href="https://www.douglas-barlow.com/">12Glace</a>
            </div>
            
        </div>
    );
};

export default Footer;