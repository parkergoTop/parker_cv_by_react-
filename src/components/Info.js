import React from "react";
import selfie from "./images/parkerself.jpg"
import "./info.css"

export default function Info(){
    return(
     <div className="info">
       <img className="my-selfie" src ={selfie}/>
       <h1 className="full-name">Qingwen Xiao</h1>
       <h2 className="job-title">Software Engineer</h2>
       <a href="#" className="more-link">More of Parker</a>
         <div className="contact-me">
            <button className="my-mail" id="myEmail">Email</button>
            <button className="my-linkedin" id="myEmail">Linkedin</button>
         </div>
       
     </div>
    );

}