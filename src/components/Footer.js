import React from "react";
import twitterLogo from "./images/twitterLogo.png";
// why only import ..... from "" works, but src= ./images/... does not work 
import githubLogo from "./images/githubLogo.png";
import facebookLogo from "./images/facebookLogo.png";
import instagramLogo from "./images/instagramLogo.png";

import './Footer.css'

export default function Footer(){

    return(
        <div className="footer">
            
            <img  className="footer-twitter"  src= {twitterLogo}/>
             <img className="footer-facebook"  src= {facebookLogo}/>
             <img className="footer-instagram"  src= {instagramLogo}/>
             <img  className="footer-github"  src= {githubLogo}/>
            
        </div>
    )
}