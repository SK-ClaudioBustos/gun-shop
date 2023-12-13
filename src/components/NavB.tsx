import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../sass/NavB.scss"

function NavB(){
    const [modalShowIng, buttonShowIng] = useState(false);
    const [modalShowReg, buttonShowReg] = useState(false);

    return (
        <div id="navbar-id" className='navbar-container'>
            <Navbar className="navbar-f rounded" expand="md">
                <Container>
                    <Navbar.Brand className="navbar-brand d-flex align-items-center justify-content-center" href="#">
                        <i className="navbar-ico bi bi-bullseye"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <i className="bi bi-caret-down-square"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-container-links">
                            <div className='nav-container-ing'>
                                <Nav.Link id="nav-l-ing" onClick={() => { buttonShowIng(true) }} href="#ing">Iniciar Sesión</Nav.Link>
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
                            </div>
                            <div className='nav-container-reg' id="the_chosen_one">
                                <Nav.Link id="nav-l-reg" onClick={() => { buttonShowReg(true) }} href="#reg">Registrarse</Nav.Link>
                                <Modal show={modalShowReg} onHide={() => { buttonShowReg(false) }} backdrop="static" keyboard={false} fullscreen="md-down">
                                    <Modal.Header id="navbar-modal">
                                        <Modal.Title>Registrarse</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body id="navbar-modal">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Dirección de Email</Form.Label>
                                                <Form.Control type="email" placeholder="nombre@xxx.com" autoFocus />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control type="password" placeholder="******" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Repetir contraseña</Form.Label>
                                                <Form.Control type="password" placeholder="******" />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer id="navbar-modal">
                                        <Button variant="secondary" onClick={() => { buttonShowReg(false) }}>
                                            Cancelar
                                        </Button>
                                        <Button variant="dark" onClick={() => { buttonShowReg(false) }}>
                                            Registrarse
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <Nav.Link id="nav-l-section" href="#seccion1">Rifles</Nav.Link>
                            <Nav.Link id="nav-l-section" href="#seccion2">Escopetas</Nav.Link>
                            <Nav.Link id="nav-l-section" href="#seccion3">Pistolas</Nav.Link>
                            <Nav.Link id="nav-l-section" href="#seccion4">Subfusiles</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
}

export default NavB;