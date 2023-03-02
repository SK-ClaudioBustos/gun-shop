import React from "react";
import "../sass/Gallery.scss";
import GalleryImage from "./GalleryImage";

function Gallery({section_name}){
    return (
        <div className="container-fluid gallery-container d-flex justify-content-center">
            <div className="gallery rounded row">
                <div className="col-12">
                    <h1>{section_name}</h1>
                    <hr></hr>
                </div>
                <GalleryImage></GalleryImage>
                <GalleryImage></GalleryImage>
                <GalleryImage></GalleryImage>
                <GalleryImage></GalleryImage>
                <GalleryImage></GalleryImage>
                <GalleryImage></GalleryImage>
            </div>
        </div>
    );
}

export default Gallery;