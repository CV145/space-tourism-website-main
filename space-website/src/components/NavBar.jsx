import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/src/assets/shared/logo.svg" alt="Logo" />
            </div>
            <div className="navbar-line"></div>
            <ul className="navbar-list">
                <li><a href="#home" className="active">00 Home</a></li>
                <li><a href="#destination">01 Destination</a></li>
                <li><a href="#crew">02 Crew</a></li>
                <li><a href="#technology">03 Technology</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
