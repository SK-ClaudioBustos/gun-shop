import React from "react";
import "../sass/GalleryImage.scss";
import Image from 'react-bootstrap/Image'
import source from "../img/arma.jpg";
function GalleryImage(){
    return(
        <div className="gallery-div col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            <Image className="gallery-img rounded" src={source} alt=".."/>
            <div className="gallery-container-text row rounded">
                <span className="gallery-image-title">
                    Nombre Arma
                </span>
                <div className="gallery-image-container-text">
                    <span className="gallery-image-text">Calibre: ....</span><br></br>
                    <span className="gallery-image-text">RPM: ....</span><br></br>
                    <span className="gallery-image-text">Peso: ...</span><br></br>
                    <span className="gallery-image-text text-warning">Precio: ....</span>
                </div> 
                
            </div>                
        </div>
    );
}

export default GalleryImage;