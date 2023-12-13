import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalIng() {
    const [modalShowIng, buttonShowIng] = useState(false);
    return (
        <>
            <Modal show={modalShowIng} onHide={() => { buttonShowIng(false) }} backdrop="static" keyboard={false} fullscreen="md-down">
                <Modal.Header id="navbar-modal">
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body id="navbar-modal">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dirección de Email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@xxx.com" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="******" autoFocus />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer id="navbar-modal">
                    <Button variant="secondary" onClick={() => { buttonShowIng(false) }}>
                        Cancelar
                    </Button>
                    <Button variant="dark" onClick={() => { buttonShowIng(false) }}>
                        Ingresar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalIng;