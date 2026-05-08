import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../assets/logo.png';

function HeaderComponent() {
    return (
        <>
            <header>
                <Navbar id="nav" expand="lg" className="nav-bar fixed-top">
                    <Container>
                        <Navbar.Brand href="/">
                            <Image
                                id="miImagen"
                                src={logo}
                                className="d-inline-block align-top logo-header"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-items">
                            <Nav defaultActiveKey="#hero">
                                <Nav.Item>
                                    <Nav.Link href="#hero">Inicio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" href="#about">Acerca de</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" href="#tradition">Tradición</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3" href="#clothing">Prendas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4" href="#contact">Contáctanos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default HeaderComponent;