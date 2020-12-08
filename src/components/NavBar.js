import React, { useState } from "react";
import "./NavBar.css";

const NavBar = (props) => {

    const [menu, setMenu] = useState("")
    const [toggle, setToggle] = useState("fa-bars");

    const toggleMenu = () => {
        if (menu === "active") {
            setMenu("");
            setToggle("fa-bars")
        } else {
            setMenu("active");
            setToggle("fa-times");
        }
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
                <ul className={`main-nav__menu ${menu}`}>
                    <li className="main-nav__brand"><a href="index.html" className="main-nav__link">
                        <div className="main-nav__logo">
                            <i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a></li>
                    {navBarLinks}
                    <li className="main-nav__item btn"><a href="login.html" className="main-nav__link">Login</a></li>
                    <li className="main-nav__item btn secondary"><a href="signup.html" className="main-nav__link">Sign Up</a></li>
                    <li className="toggle" onClick={() => toggleMenu()}><button className="toggle-btn"><i className={`fas ${toggle} fa-2x`}></i></button></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;