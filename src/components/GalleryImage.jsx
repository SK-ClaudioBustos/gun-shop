import React from "react";
import "../sass/GalleryImage.scss";
import Image from 'react-bootstrap/Image'
import source from "../img/arma.jpg";
function GalleryImage(){
    return(
        <div className="gallery-div col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            <Image className="gallery-img rounded" src={source} alt=".."/>                
        </div>
    );
}

export default GalleryImage;