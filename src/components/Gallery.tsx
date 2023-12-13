import GalleryImage from "./GalleryImage";
import pistolas from "../data/pistolas";
import escopetas from "../data/escopetas";
import subfusiles from "../data/subfusiles";
import rifles from "../data/rifles";
import "../sass/Gallery.scss";

interface IGalleryProps {
    id: string
    sectionName: string
    categoria: string
}

function Gallery(props: IGalleryProps){
    const { id, sectionName, categoria } = props
    let categoriasArmas;
    let nombreCarpeta;
    if (categoria === "pistolas"){
        categoriasArmas = pistolas;
        nombreCarpeta = "pistolas";
    }
    if (categoria === "escopetas"){
        categoriasArmas = escopetas;
        nombreCarpeta = "escopetas"
    }
    if (categoria === "subfusiles"){
        categoriasArmas = subfusiles;
        nombreCarpeta = "subfusiles";
    }
    if (categoria === "rifles"){
        categoriasArmas = rifles;
        nombreCarpeta = "rifles";
    }
    return (
        <div id={id} className="container-fluid gallery-container d-flex justify-content-center">
            <div className="gallery rounded row">
                <div className="col-12">
                    <h1>{sectionName}</h1>
                    <hr></hr>
                </div>
                {
                    categoriasArmas.map((arma, index) =>
                        <GalleryImage
                            key={index}
                            source={arma.source}
                            carpeta={nombreCarpeta}
                            alt={arma.alt}
                            nombre={arma.nombre}
                            calibre={arma.calibre}
                            alcance={arma.alcance}
                            peso={arma.peso}
                            precio={arma.precio}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Gallery;