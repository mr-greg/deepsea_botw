// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyledFooter } from "./StyledFooter";
import instagram from "../../assets/img/Instagram.png";
import dribble from "../../assets/img/Dribbble.png";
import twitter from "../../assets/img/Twitter.png";
import youtube from "../../assets/img/Youtube.png";
import sendIcon from "../../assets/img/send-icon.png";

const Footer = () => {
    return (
        <StyledFooter>
            <h4>Luxe</h4>
            <div className="wrapper">
                <div className="infos">
                    <p>Copyright © 2021 Luxe</p>
                    <p>All rights reserved</p>
                    <div className="socials">
                        <a href="#"><img src={instagram} alt="instagram link" /></a>
                        <a href="#"><img src={dribble} alt="dribble link" /></a>
                        <a href="#"><img src={twitter} alt="twitter link" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube link" /></a>
                    </div>
                </div>
                <div className="newsletter">
                    <p>Get updates</p>
                    <div className="email">
                        <input type="email" placeholder="Enter your email" />
                        <img src={sendIcon} alt="send icon" />
                    </div>
                </div>
            </div>
            
        </StyledFooter>
    );
}
 
export default Footer;