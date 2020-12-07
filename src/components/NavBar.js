import "./NavBar.css";
import React from "react";

const NavBar = () => {
    return (
        <header className="main-header">
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item"><a href="index.html" className="main-nav__link">Triple Arrow</a></li>
                    <li className="main-nav__item"><a href="index.html" className="main-nav__link">Home</a></li>
                    <li className="main-nav__item"><a href="signup.html" className="main-nav__link">Sign Up</a></li>
                    <li className="main-nav__item"><a href="login.html" className="main-nav__link">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;