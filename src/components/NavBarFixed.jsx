import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../sass/NavBarFixed.scss"


function NavBarFixed() {
  return (
        <div className='navbar-container'>
            <Navbar className="navbar-f rounded" variant="light" expand="md">
                <Container>
                    <Navbar.Brand className="navbar-brand d-flex align-items-center justify-content-center" href="#">
                            <i className="navbar-ico bi bi-bullseye"></i>  
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <i className="bi bi-caret-down-square"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#ing">Iniciar Sesión</Nav.Link>
                            <Nav.Link href="#reg">Registrarse</Nav.Link>
                            <Nav.Link href="#seccion1">Seccion1</Nav.Link>
                            <Nav.Link href="#seccio2">Seccion2</Nav.Link>
                        </Nav>   
                    </Navbar.Collapse>    
                </Container>
            </Navbar>
        </div>
        
  );
}

export default NavBarFixed;