import React from "react";
import './style.css';

const Header =()=>{
    return(
        <Header className="header">
            <img src="https://tinyurl.com/yc2uemnv" alt="Logo"/>
            <nav className="nav">
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            </nav>
            <div className="buttons">
                <button className="signup-btn">Sign-up</button>
                <button className="login-btn">log-in</button>
            </div>
        </Header>
    )
}
export default Header;