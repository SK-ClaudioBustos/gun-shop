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
    handleAddItem: (nombre: string, precio: string) => void
}

function Gallery(props: IGalleryProps) {
    const { id, sectionName, categoria, handleAddItem } = props
    const getData = (categoria: string) => {
        switch (categoria) {
            case "pistolas":
                return pistolas;
            case "rifles":
                return rifles;
            case "escopetas":
                return escopetas;
            default:
                return subfusiles;
        }
    }
    const categoriasArmas = getData(categoria);
    const nombreCarpeta = categoria;
    return (
        <div id={id} className="container-fluid gallery-container d-flex justify-content-center">
            <div className="gallery rounded row">
                <div className="col-12">
                    <h1>{sectionName}</h1>
                    <hr/>
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
                            handleAddItem={handleAddItem}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Gallery;