import React, { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import "../sass/ShopButton.scss";

function ShopButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) };
    const handleShow = () => { setShow(true) };

    return (
        <div className="shop-div bg-success">
            <i className="shop-icon bi bi-bag-fill"></i>
            <button className="shop-button" onClick={handleShow} ></button>
            <Offcanvas show={show} onHide={handleClose} backdrop={false} scroll={true} placement={"end"}>
                <Offcanvas.Header id="shop-canvas-header" className="bg-success" closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <hr className="shop-canvas-hr"></hr>
                <Offcanvas.Body className="bg-success">
                    <div className="shop-canvas-content">
                        <ul>
                            <li>Arma 1</li>
                            <li>Arma 2</li>
                            <li>Arma 3</li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Button id="shop-canvas-button" variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button id="shop-canvas-button" variant="danger" onClick={handleClose}>
                            Realizar Compra
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default ShopButton;