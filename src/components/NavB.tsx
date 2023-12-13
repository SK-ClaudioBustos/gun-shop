import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../sass/NavB.scss";
import { DialogData } from '../types';

interface INavBProps {
    changeDialogState: (props: DialogData) => void
}

function NavB(props: INavBProps) {
    const { changeDialogState } = props;
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
                            <div className="nav-container-ing">
                                <Nav.Link id="nav-l-ing" onClick={() => { changeDialogState({ show: true, titulo: "login" }) }}>Iniciar Sesión</Nav.Link>
                            </div>
                            <div className="nav-container-reg">
                                <Nav.Link id="nav-l-reg" onClick={() => { changeDialogState({ show: true, titulo: "register" }) }}>Registrarse</Nav.Link>
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