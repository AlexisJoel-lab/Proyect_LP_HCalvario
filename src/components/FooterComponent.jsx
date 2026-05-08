import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import { TiSocialFacebookCircular, TiSocialInstagram } from "react-icons/ti";
import { HiHome, HiMiniHeart } from "react-icons/hi2";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

import logo1 from '../assets/logo1.png';
import { Link } from "react-router-dom";

function FooterComponent() {
    return (
        <>
            <footer className="footer">
                <Container className="p-4">
                    <Row>
                        <Col lg={5} md={12} className="mb-4">
                            <Row className="align-items-center">
                                <div className="col-4">
                                    <Image src={logo1} className="img_footer" />
                                </div>
                                <div className="col-8">
                                    <h4>Hermanos del</h4>
                                    <h1>Calvario</h1>
                                </div>
                            </Row>
                        </Col>

                        <Col lg={3} md={6} className="mb-4">
                            <h5 className="mb-3" style={{ letterSpacing: 2 }}>
                                Enlaces
                            </h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">
                                    <a href="/">
                                        <HiHome className="icon_foot"/> Inicio
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <Link to="/privacyPolicy" target="_blank">
                                        <RiGitRepositoryPrivateFill className="icon_foot"/> Politica de Privacidad
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <a href="#!">
                                        <TiSocialFacebookCircular className="icon_foot"/> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <TiSocialInstagram className="icon_foot"/> Instagram
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <h5 className="mb-1" style={{ letterSpacing: 2 }}>
                                Horario de atención
                            </h5>
                            <table
                                className="table"
                                style={{ color: "#4f4f4f", borderColor: "#666" }}
                            >
                                <tbody>
                                    <tr>
                                        <td>Lun - Vie:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sab - Dom:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
                <div className="copy">
                    &copy; 2026 Calvario. Todos los derechos reservados. Diseñado con <HiMiniHeart className="heart_foot"/> por
                    <a href="#"> alexisjoel.com</a>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;