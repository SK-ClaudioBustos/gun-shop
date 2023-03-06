import React from "react";
import "../sass/Gallery.scss";
import GalleryImage from "./GalleryImage";
import pistolas from "../data/pistolas";
import escopetas from "../data/escopetas";
import subfusiles from "../data/subfusiles";
import rifles from "../data/rifles";

function Gallery({section_name,categoria}){
    let categorias_armas;
    let nombre_carpeta;
    if (categoria === "pistolas"){
        categorias_armas = pistolas;
        nombre_carpeta = "pistolas";
    }
    if (categoria === "escopetas"){
        categorias_armas = escopetas;
        nombre_carpeta = "escopetas"
    }
    if (categoria === "subfusiles"){
        categorias_armas = subfusiles;
        nombre_carpeta = "subfusiles";
    }
    if (categoria === "rifles"){
        categorias_armas = rifles;
        nombre_carpeta = "rifles";
    }
    return (
        <div className="container-fluid gallery-container d-flex justify-content-center">
            <div className="gallery rounded row">
                <div className="col-12">
                    <h1>{section_name}</h1>
                    <hr></hr>
                </div>
                {
                    categorias_armas.map((arma,index) =>
                        <GalleryImage
                            key={index}
                            source={arma["source"]}
                            carpeta={nombre_carpeta}
                            alt={arma["alt"]}
                            nombre={arma["nombre"]}
                            calibre={arma["calibre"]}
                            alcance={arma["alcance"]}
                            peso={arma["peso"]}
                            precio={arma["precio"]}
                        />                    
                    )
                }
            </div>
        </div>
    );
}

export default Gallery;