import React, { useState } from "react";
import "./NavBar.css";

const NavBar = (props) => {

    const [toggle, setToggle] = useState(true);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    const navBarLinks = props.links.map(({ title, href }) => {
        return (
            <li key={title} className="main-nav__item">
                <a href={href} className="main-nav__link">{title}</a>
            </li>
        );
    });

    return (
        <header className="main-header">
            <nav className="main-nav">
                <ul className={`main-nav__menu ${toggle ? "" : "active"}`}>
                    <li className="main-nav__brand">
                        <div className="main-nav__logo">
                            <a href="index.html" className="main-nav__link"><i className="fas fa-camera-retro"></i></a>
                        </div>
                   </li>
                    {navBarLinks}
                    {/* Buttons here for development, will adapt later */}
                    <li className="main-nav__item btn"><button className="main-nav__link">Login</button></li>
                    <li className="main-nav__item btn secondary"><button className="main-nav__link">Sign Up</button></li>
                    <li className="toggle" onClick={() => toggleMenu()}><button className="toggle-btn"><i className={`fas ${toggle ? "fa-bars" : "fa-times"} fa-lg`}></i></button></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;