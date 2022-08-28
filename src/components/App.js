import React from "react";
import About from "./About";
import Info from "./Info";
import Skills from "./Skills";
import Footer from "./Footer";
import "./App.css"

function App (){
  
        return(
        <div className="app">
            <Info/>
            <About/>
            <Skills/>
            <Footer/>
        </div>
    )
   

}

export default App;