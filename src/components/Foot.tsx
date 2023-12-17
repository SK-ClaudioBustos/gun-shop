import "../sass/Foot.scss";

function Foot() {
    return (
        <footer className="d-flex align-items-center justify-content-center">
            <p>
                {"Hola Bienvenido a mi carrito de compras, el contenido de la misma no es de mi pertenencia,tiene como fin el uso de demostracion - "}
                <a href="https:/github.com/SK-ClaudioBustos" target="_blank" rel="noopener noreferrer">
                    Claudio Bustos - Github <i className="bi bi-github"></i>
                </a>
            </p>
        </footer>
    );
}

export default Foot;
