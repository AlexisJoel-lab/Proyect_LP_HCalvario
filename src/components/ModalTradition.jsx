import { Image } from "react-bootstrap";

import mtImg1 from "../assets/img4.jpg";
import mtImg2 from "../assets/img7.jpg";
import mtImg3 from "../assets/img8.jpg";
import img5 from "../assets/img-contact.jpg";

function ModalTradition() {
    return (
        <>
            <div className="bg-mtradition">
                <div className="page-wrap">
                    <header className="tl-head">
                        <h1>Tradicion de Viernes Santo</h1>
                        <p>Aproximadamente desde 1980</p>
                        <div className="bar" />
                    </header>
                    <div className="tl-body">
                        <div className="tl-spine" />
                        {/* 1 — izquierda */}
                        <div className="tl-row">
                            <div className="tl-card left">
                                <div className="card-inner rev">
                                    <div className="tl-img">
                                        <Image src={mtImg1} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">6:00 AM.</span>
                                        <div className="tl-title">Reunión de la mañana</div>
                                        <div className="tl-desc">
                                            Los sumerios en Mesopotamia desarrollan la escritura cuneiforme,
                                            marcando el inicio de la historia registrada.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-empty" />
                        </div>
                        {/* 2 — derecha */}
                        <div className="tl-row">
                            <div className="tl-empty" />
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-card right">
                                <div className="card-inner">
                                    <div className="tl-img">
                                        <Image src={mtImg2} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">7:00 AM.</span>
                                        <div className="tl-title">Cortada de Palos y ramas</div>
                                        <div className="tl-desc">
                                            Los hermanos del CALVARIO la Gran Pirámide en Egipto,
                                            única maravilla del mundo antiguo aún en pie.
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                        {/* 3 — izquierda */}
                        <div className="tl-row">
                            <div className="tl-card left">
                                <div className="card-inner rev">
                                    <div className="tl-img">
                                        <Image src={mtImg3} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">8:00 AM.</span>
                                        <div className="tl-title">Recorrido Tradicional</div>
                                        <div className="tl-desc">
                                            Clístenes establece en Atenas el primer sistema de gobierno
                                            democrático, sentando las bases de la participación ciudadana.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-empty" />
                        </div>
                        {/* 4 — derecha */}
                        <div className="tl-row">
                            <div className="tl-empty" />
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-card right">
                                <div className="card-inner">
                                    <div className="tl-img">
                                        <Image src={mtImg2} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">9:00 AM.</span>
                                        <div className="tl-title">Armado de Cruces</div>
                                        <div className="tl-desc">
                                            Bajo Trajano, Roma alcanza su máxima extensión territorial: más
                                            de 5 millones de km².
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 5 — izquierda */}
                        <div className="tl-row">
                            <div className="tl-card left">
                                <div className="card-inner rev">
                                    <div className="tl-img">
                                        <Image src={img5} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">10:00 AM.</span>
                                        <div className="tl-title">Puesta de cuerpo de Cristo en Cruz</div>
                                        <div className="tl-desc">
                                            Johannes Gutenberg inventa la prensa de tipos móviles,
                                            revolucionando la difusión del conocimiento en Europa.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-empty" />
                        </div>
                        {/* 6 — derecha */}
                        <div className="tl-row">
                            <div className="tl-empty" />
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-card right">
                                <div className="card-inner">
                                    <div className="tl-img">
                                        <Image src={mtImg2} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">7:00 PM</span>
                                        <div className="tl-title">Bajada de cuerpo de Cristo de la Cruz</div>
                                        <div className="tl-desc">
                                            Gran Bretaña lidera la producción mecanizada. La máquina de
                                            vapor transforma el trabajo, el transporte y la economía global.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 7 — izquierda */}
                        <div className="tl-row">
                            <div className="tl-card left">
                                <div className="card-inner rev">
                                    <div className="tl-img">
                                        <Image src={mtImg2} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">8:00 PM</span>
                                        <div className="tl-title">Entrega de cuerpo a Maria</div>
                                        <div className="tl-desc">
                                            Neil Armstrong y Buzz Aldrin (Apollo 11) se convierten en los
                                            primeros humanos en pisar la superficie lunar.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-empty" />
                        </div>
                        {/* 8 — derecha */}
                        <div className="tl-row">
                            <div className="tl-empty" />
                            <div className="tl-node">
                                <div className="dot" />
                            </div>
                            <div className="tl-card right">
                                <div className="card-inner">
                                    <div className="tl-img">
                                        <Image src={mtImg2} alt="Evento 1" fluid className="img-all" />
                                    </div>
                                    <div>
                                        <span className="tl-year">8:30 PM</span>
                                        <div className="tl-title">Puesta de cuerpo en Urna</div>
                                        <div className="tl-desc">
                                            Tim Berners-Lee publica el primer sitio web en el CERN,
                                            conectando al mundo en una red global de información.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalTradition;
