import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import logo from '../assets/logo.png';

function HeaderComponentPolicy() {
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
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default HeaderComponentPolicy;