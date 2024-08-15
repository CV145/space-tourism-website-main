import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/assets/shared/logo.svg" alt="Logo" />
            </div>
            <div className="navbar-line"></div>
            <ul className="navbar-list">
                <li><NavLink to="/" exact activeClassName="active">00 Home</NavLink></li>
                <li><NavLink to="/destination" activeClassName="active">01 Destination</NavLink></li>
                <li><NavLink to="/crew" activeClassName="active">02 Crew</NavLink></li>
                <li><NavLink to="/technology" activeClassName="active">03 Technology</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;
