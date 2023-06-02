import React from "react";
import headerImg from "./images/icons8-meme-100.png"

function Header() {
    return(
    <div className="header">
        <img src={headerImg} alt="" className="header-img" />
        <h2 className="header-title">Meme Generator</h2>
        <h3 className="header-text">React Project 1</h3>
    </div>
)}


export default Header;