import React from "react";
import "../sass/Welcome.scss";
function Welcome({title,text}){
    return(
        <div className="wel-cont d-flex align-items-center justify-content-center">
            <div className="wel-div text-center">
                <h1 className="wel-title">{title}</h1>
                <p className="wel-text">{text}</p>
            </div>
        </div>
    );
}

export default Welcome;