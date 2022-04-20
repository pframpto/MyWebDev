import React from "react";
import icon from "./react-icon-small.png"
function Navbar(){
    return(
        <nav className="nav">
            <img src={icon} alt=''></img>
            <h3 className="react-color">ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar