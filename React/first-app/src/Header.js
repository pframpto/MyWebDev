import React from "react";
import logo from './react-logo.png'

const Header = () =>{

    return (
        <div>
        <header>
            <nav className="nav">
                <img src={logo} alt="react logo" width="40px"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>                 
            </nav>
        </header>
        </div>
    )
}


export default Header