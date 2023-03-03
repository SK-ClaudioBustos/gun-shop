import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../sass/NavB.scss"


function NavBarFixed() {
  return (
        <div className='navbar-container'>
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
                                <Nav.Link id="nav-l-ing" href="#ing">Iniciar Sesión</Nav.Link>
                            </div>
                            <div className='nav-container-reg' id="the_chosen_one">
                                <Nav.Link id="nav-l-reg" href="#reg">Registrarse</Nav.Link>
                            </div>
                            <Nav.Link id="nav-l-section" href="#seccion1">Seccion1</Nav.Link>
                            <Nav.Link id="nav-l-section" href="#seccio2">Seccion2</Nav.Link>
                        </Nav>   
                    </Navbar.Collapse>    
                </Container>
            </Navbar>
        </div>
        
  );
}

export default NavBarFixed;