import React from'react';
import './navbar.css';
import Container from 'react-bootstrap/container';
import { Nav, Navbar } from 'react-bootstrap';


const Menu = () => {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Natalia Villafañe</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    );
}
export default Menu;