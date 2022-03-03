import React from "react";

export default function NavBar(){

    const aboutGitHub = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return(
        <nav className="navbar">
            <img src="../images/githublogo.jpeg" width="100px"/>
            <h2 className="about" onClick={() => aboutGitHub("https://github.com/about")}>About GitHub</h2>
        </nav>
    )
}