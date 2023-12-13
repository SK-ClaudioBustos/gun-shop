import React from "react";
import "../sass/UpButton.scss";

function UpButton() {
    window.onscroll = function () {
        const alturaPagina = window.scrollY;
        const element = document.getElementById("up-div");
        if (element) element.style.display = "none";
        if (alturaPagina >= 300) {
            if (element) {
                element.style.display = 'flex';
                element.style.alignItems = "center";
                element.style.justifyContent = "center";
            }
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