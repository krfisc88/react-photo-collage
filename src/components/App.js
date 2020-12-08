import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Collage from "./Collage";

function App() {

    const navigation = [
        {title: "Home", href: "index.html"}, 
        {title: "About", href: "about.html"}, 
        {title: "Contact", href: "contact.html"}
    ];

    return (
        <>
            <NavBar links={navigation} />
            <main>
                <Collage />
            </main>
        </>
    );
}

export default App;