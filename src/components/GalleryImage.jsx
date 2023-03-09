import React from "react";
import "../sass/GalleryImage.scss";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

function GalleryImage({source,carpeta,alt,nombre,calibre,alcance,peso,precio}){
    return(
        <div className="gallery-div col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            <Image className="gallery-img rounded" src={require(`../img/${carpeta}/${source}.svg`)} alt={alt}/>
            <div className="gallery-container-text row rounded">
                <span className="gallery-image-title">
                    {nombre}
                </span>
                <div className="gallery-image-container-text">
                    <span className="gallery-image-text">Calibre: {calibre}</span><br></br>
                    <span className="gallery-image-text">Alcance Efectivo: {alcance}</span><br></br>
                    <span className="gallery-image-text">Peso: {peso}</span><br></br>
                    <span className="gallery-image-text text-warning">Precio: {precio}</span>
                </div> 
                <div className="gallery-button-container d-flex justify-content-center align-items-center">
                    <Button className="gallery-button" variant="success">Comprar</Button>
                </div>
            </div>                
        </div>
    );
}

export default GalleryImage;