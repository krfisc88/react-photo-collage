import React from "react";
import "normalize.css";
import "./resets.css";
import "./typography.css";
import "./App.css";
import NavBar from "./NavBar";
import Collage from "./Collage";

function App() {

    const navigation = [
        { title: "Home", href: "index.html" },
        { title: "About", href: "about.html" },
        { title: "Contact", href: "contact.html" }
    ];

    return (
        <>
            <NavBar links={navigation} />
            <main>
                <section id="hero">
                    <Collage />
                </section>
            </main>
        </>
    );
}

export default App;