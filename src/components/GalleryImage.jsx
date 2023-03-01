import React from "react";
import "../sass/GalleryImage.scss";
import Image from 'react-bootstrap/Image'

function GalleryImage(){
    return(
        <div className="gallery-div col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            <Image className="gallery-img rounded" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"/>                
        </div>
    );
}

export default GalleryImage;