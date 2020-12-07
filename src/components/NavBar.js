import "./NavBar.css";
import React from "react";

const NavBar = () => {
    return (
        <header className="main-header">
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__brand"><a href="index.html" className="main-nav__link">Triple Arrow</a></li>
                    <li className="main-nav__item"><a href="index.html" className="main-nav__link">Home</a></li>
                    <li className="main-nav__item"><a href="index.html" className="main-nav__link">About</a></li>
                    <li className="main-nav__item"><a href="index.html" className="main-nav__link">Contact</a></li>
                    <li className="main-nav__item btn"><a href="login.html" className="main-nav__link">Login</a></li>
                    <li className="main-nav__item btn secondary"><a href="signup.html" className="main-nav__link">Sign Up</a></li>
                    <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;