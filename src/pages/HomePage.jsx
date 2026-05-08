import React, { useState } from 'react';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';

import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import ModalTradition from "../components/ModalTradition";
import ModalAbout from "../components/ModalAbout";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import imgHero from '../assets/img-hero.jpg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import cabellera from '../assets/cabellera.jpg';
import clavos from '../assets/Clavos.jpg';
import corona from '../assets/corona.jpg';
import potencias from '../assets/potencias.jpg';
import loguito from '../assets/logo50.png';
import imgContact from '../assets/img-contact.jpg';

function HomePage() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [formData, setFormData] = useState({ name: '', phone: '', address: '', message: '' });
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const MySwal = withReactContent(Swal);


    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const url = 'https://script.google.com/macros/s/AKfycbyuaBiq1cIR6Zu1DvxS-xG1_YMmWcnvJCknj5Tj1hsNg7Ybu7y7o_AFhAvbVPND5Huz/exec';

        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: new URLSearchParams(formData)
        })
            .then(() => {
                // alert('Data submitted successfully!');
                MySwal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: "#1a9c64",
                    color: "#e6f5ef",
                    didOpen: (toast) => {
                        toast.onmouseenter = MySwal.stopTimer;
                        toast.onmouseleave = MySwal.resumeTimer;
                    }
                }).fire({
                    icon: "success",
                    iconColor: "#e6f5ef",
                    title: "Datos enviados correctamente!"
                });
                setFormData({ name: '', phone: '', address: '', message: '' });
                setIsChecked(false);
                setLoading(false);
            })
            .catch((error) => console.error('Error!', error.message));
    };


    return (
        <>
            <HeaderComponent />

            <div id="hero" className="hero">
                <Container>
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12}>
                            <div className="text-principal">
                                <span>Hermanos Del</span>
                                <h1>CALVARIO - REQUE</h1>
                                <p>Hermanos dedicados a promover y preservar las tradiciones, valores y celebraciones propias de
                                    la Semana Santa, tiempo central del calendario cristiano. Su misión es fomentar la fe, la
                                    reflexión y la participación comunitaria a través de actos litúrgicos, procesiones, obras
                                    sociales y actividades culturales que conmemoran la pasión, muerte y resurrección de Jesucristo.
                                    Además, busca fortalecer la unidad, el servicio y el compromiso espiritual de sus miembros y
                                    de la comunidad en general.
                                </p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} className="image-hero">
                            <Image src={imgHero} thumbnail />
                        </Col>
                    </Row>
                </Container>
            </div>

            <section id="about" className="about">
                <Container>
                    <Row className="gx-4 align-items-center">
                        <Col md={6}>
                            <div className="mt-5 mt-md-0">
                                <span className="text-muted fw-bold">SOBRE NOSOTROS</span>
                                <h2 className="fw-bold">UN POCO DE NUESTRA HISTORIA</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris .
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt.
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Button className="btn-about" onClick={() => setShowModal2(true)}>Leer más</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="img_group">
                            <Row className="gx-2 gx-lg-3">
                                <div className="col-6">
                                    <div className="mb-2">
                                        <Image className="img-fluid rounded-3" src={img1} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2">
                                        <Image className="img-fluid rounded-3" src={img2} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2">
                                        <Image className="img-fluid rounded-3" src={img3} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2">
                                        <Image className="img-fluid rounded-3" src={img4} />
                                        {/* // src="https://freefrontend.dev/assets/square.png" */}
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div id="tradition" className="tradition">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="titlepage">
                                <span className="text-muted fw-bold">TRADICIÓN</span>
                                <h2><strong>Semana Santa</strong> de Reque</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div className="tradition_history">
                                <h3>Aproximadamente desde 1980</h3>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that it has a more-or-less normal distribution
                                    of letters, as opposed to using 'Content here, content here', making
                                    it look like readable English. Many desktop publishing packages andIt
                                    is a long established fact that a reader will be distracted.
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Button className="btn-tradition" onClick={() => setShowModal1(true)}>Leer más</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} className="img_group">
                            <div className="tradition_img1">
                                <Image src={img5} rounded />
                                {/* <span>01</span> */}
                            </div>
                        </Col>
                        <Col xl={7} lg={8} md={12} sm={12}>
                            <div className="tradition_img2 margin_top">
                                <Image src={img6} rounded />
                                {/* <span>02</span> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="clothing" className="clothing py-3">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="titlepage">
                                <span className="text-muted fw-bold">PRENDAS</span>
                                <h2>Enseres de <strong>Cristo</strong></h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="cloth_descrip">
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <div className="cloth_cont">
                                <Row>
                                    <Col xl={3} lg={3} md={6} sm={12}>
                                        <div className="cloth_img">
                                            <Image src={corona} text="First slide" className="imglogo" />
                                            <i className="ilogo"><Image src={loguito} /></i>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={9} md={6} sm={12}>
                                        <div className="cross_inner">
                                            {/* <Carousel.Caption> */}
                                            <h3>Corona <br />
                                                <strong className="sub_title">De Cristo</strong>
                                            </h3>
                                            <p>La corona de espinas recuerda el sacrificio, la entrega y la
                                                esperanza dentro de la fe cristiana.</p>
                                            {/* </Carousel.Caption> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cloth_cont">
                                <Row>
                                    <Col xl={3} lg={3} md={6} sm={12}>
                                        <div className="cloth_img">
                                            <Image src={clavos} text="First slide" className="imglogo" />
                                            <i className="ilogo"><Image src={loguito} /></i>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={9} md={6} sm={12}>
                                        <div className="cross_inner">
                                            {/* <Carousel.Caption> */}
                                            <h3>Clavos<br />
                                                <strong className="sub_title">De Cristo</strong>
                                            </h3>
                                            <p>En el arte y la devoción cristiana, suelen representarse tres clavos
                                                (dos en las manos y uno en los pies), destacando el sacrificio y la
                                                dimensión redentora de la crucifixión.</p>
                                            {/* </Carousel.Caption> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cloth_cont">
                                <Row>
                                    <Col xl={3} lg={3} md={6} sm={12}>
                                        <div className="cloth_img">
                                            <Image src={cabellera} text="First slide" className="imglogo" />
                                            <i className="ilogo"><Image src={loguito} /></i>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={9} md={6} sm={12}>
                                        <div className="cross_inner">
                                            {/* <Carousel.Caption> */}
                                            <h3>Cabellera<br />
                                                <strong className="sub_title">De Cristo</strong>
                                            </h3>
                                            <p>La cabellera de Cristo es un elemento simbólico que ayuda a expresar su
                                                identidad divina y humana dentro de la tradición cristiana.</p>
                                            {/* </Carousel.Caption> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cloth_cont">
                                <Row>
                                    <Col xl={3} lg={3} md={6} sm={12}>
                                        <div className="cloth_img">
                                            <Image src={potencias} text="First slide" className="imglogo" />
                                            <i className="ilogo"><Image src={loguito} /></i>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={9} md={6} sm={12}>
                                        <div className="cross_inner">
                                            {/* <Carousel.Caption> */}
                                            <h3>Potencias<br />
                                                <strong className="sub_title">De Cristo</strong>
                                            </h3>
                                            <p>En el arte religioso, especialmente en la tradición hispana, las
                                                potencias destacan la majestad y divinidad de Cristo, incluso
                                                en representaciones de su pasión y sufrimiento.</p>
                                            {/* </Carousel.Caption> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>

            <section className="faq">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={8} lg={8} md={8} sm={12}>
                            <span className="text-muted fw-bold">FAQ</span>
                            <h2 className="mb-3 fw-bold">¿EN QUÉ PODEMOS AYUDARTE?</h2>
                            <p className="mb-5">Te dejamos algunas preguntas que quisás te haces sobre nosotros.
                                Si no encontraste respuesta, te invitamos a dejar tus datos en la sección siguiente.</p>
                            <Accordion className="faq-accordion" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>¿Cobran para ser integrante del grupo?</Accordion.Header>
                                    <Accordion.Body>
                                        No. No se cobra a nadie de las personas que quieran ser parte de esta hermosa tradición.
                                        Lo único que se pide es compromiso, respeto y amor por la fe católica.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>¿Cómo recaudan dinero?, ¿Realizan actividades?</Accordion.Header>
                                    <Accordion.Body>
                                        No realizamos ninguna activad, ya que como organización no estamos autorizados para ello.
                                        Lo que hacemos es recibir donaciones de personas que quieran apoyar a la organización, y con
                                        ese dinero se compran o reparan los materiales que necesitaremos para las tareas que realizamos
                                        durante la Semana Santa.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>¿Con qué frecuencia se reunen?</Accordion.Header>
                                    <Accordion.Body>
                                        Las reuniones las empezamos ni bien iniciado el año. Son pocas y se realizan para organizar
                                        las tareas que se realizarán durante la Semana Santa, y para organizarnos como grupo.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>¿La vestimenta que usan es obligatorio?</Accordion.Header>
                                    <Accordion.Body>
                                        Si, especialmente para los varones. Ya que representamos a los de Arimatea, quienes recibieron
                                        el cuerpo de Cristo en el monte del Calvario.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div id="contact" className="contact py-5">
                <Container>
                    <Row>
                        <Col lg={9} md={8} className="titlepage mx-auto">
                            <span className="text-muted fw-bold">CONTACTO</span>
                            <h2>Contáctanos</h2>
                            <p>Si eres de REQUE y vives la fe católica. Puedes ser parte de esta hermosa
                                tradición y y vivirlo de cerca. Llena con tus datos el formulario y nos
                                pondremos en contacto contigo.
                            </p>
                        </Col>
                    </Row>
                    <Row className="bg_contact">
                        <Col xl={6} lg={6} md={5} sm={12} className="px-0">
                            <Image src={imgContact} width="100%" />
                        </Col>
                        <Col xl={6} lg={6} md={7} sm={12} className="p-5 form_contact">
                            <Form className="contact_bg" onSubmit={handleSubmit}>
                                <FloatingLabel controlId="floatingName" label="Nombre completo" className="mb-3">
                                    <Form.Control type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleChange} pattern='[a-zA-Z\s]+' required />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPhone" label="Número Telefónico" className="mb-3">
                                    <Form.Control type="text" name="phone" placeholder="Número Telefónico" value={formData.phone} onChange={handleChange} pattern='[0-9]+' minLength={9} maxLength={9} required />
                                    <Form.Control.Feedback type="invalid">Coloque un número de celular correcto.</Form.Control.Feedback>
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Dirección" className="mb-3">
                                    <Form.Control type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea" label="Mensaje" className="mb-3">
                                    <Form.Control as="textarea" name="message" placeholder="Mensaje" style={{ height: '100px' }} value={formData.message} onChange={handleChange} />
                                </FloatingLabel>

                                <Form.Group className="mb-3">
                                    <Form.Check label="He leído y acepto la política de privacidad" checked={isChecked} onChange={handleCheckboxChange} required/>                                    
                                </Form.Group>

                                <Button variant="primary" type="submit" disabled={loading} className="mb-3 btn-lg send">
                                    {loading ? 'Enviando...' : 'Enviar datos'}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <FooterComponent />

            <a id="myBtn" href="#" className="back-to-top"><TbArrowBigUpLinesFilled /></a>


            <Modal
                show={showModal1}
                onHide={() => setShowModal1(false)}
                size="xl"
                aria-labelledby="modal-styling-title"
                centered
            >
                <Modal.Body>
                    <ModalTradition />
                </Modal.Body>
            </Modal>

            <Modal
                show={showModal2}
                onHide={() => setShowModal2(false)}
                size="xl"
                aria-labelledby="styling-title"
                centered
            >
                <Modal.Body>
                    <ModalAbout />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomePage;