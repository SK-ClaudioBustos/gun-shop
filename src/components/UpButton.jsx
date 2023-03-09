import React from "react";
import "../sass/UpButton.scss";

function UpButton(){
    window.onscroll = function() {
        let altura_pagina = window.scrollY;
        if (altura_pagina >= 300){
            document.getElementById("up-div").style.display = 'flex';
            document.getElementById("up-div").style.alignItems = "center";
            document.getElementById("up-div").style.justifyContent = "center";
        }
        else {
            document.getElementById("up-div").style.display = "none";
        }
    };
    return (
        <div id="up-div" className="up-div">
            <i className="up-icon bi bi-arrow-up"></i>  
            <a className="up-a" href="#navbar-id"> </a>
        </div>
    );
}

export default UpButton;