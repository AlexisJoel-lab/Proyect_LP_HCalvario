import React from 'react';
import HeaderComponentPolicy from './HeaderComponentPolicy';
import FooterComponent from './FooterComponent';
import { Container } from 'react-bootstrap';

import { TbArrowBigUpLinesFilled } from "react-icons/tb";

function PrivacyPolicy() {
    return (
        <>
            <HeaderComponentPolicy />

            <div className="policy">
                <Container>
                    <span className="text-muted fw-bold">Última actualización: 08/05/2026</span>
                    <h2 className="mb-3 fw-bold">Política de Privacidad: Hermanos del Calvario</h2>

                    <p>En Hermanos del Calvario, valoramos la confianza que depositas en nosotros al compartir tus datos personales.
                        Estamos comprometidos con la protección de tu privacidad y el trato respetuoso de tu información, reflejando
                        nuestros valores de integridad y servicio.
                    </p>
                    <ol>
                        <li><strong>Información que Recopilamos</strong></li>
                        <p>Para servir mejor a nuestra comunidad, podemos recolectar los siguientes datos:</p>
                        <p>
                            - Datos de contacto: Nombre, correo electrónico, número de teléfono y dirección física.<br />
                            - Información de membresía: Fecha de bautismo/ingreso, participación en ministerios o grupos pequeños.<br />
                            - Donaciones: Información necesaria para procesar ofrendas y emitir certificados fiscales
                            (cumpliendo con normativas bancarias).<br />
                            - Registros multimedia: Fotografías o videos tomados durante servicios públicos o eventos
                            (siempre bajo previo aviso).
                        </p>

                        <li><strong>Uso de la Información</strong></li>
                        <p>Utilizamos tus datos exclusivamente para fines eclesiásticos y administrativos:</p>
                        <p>
                            - Mantenerte informado sobre servicios, eventos y actividades.<br />
                            - Brindar apoyo pastoral y seguimiento espiritual.<br />
                            - Gestionar registros de membresía y voluntariado.<br />
                            - Procesar y agradecer donaciones y diezmos.
                        </p>

                        <li><strong>Base Legal y Consentimiento</strong></li>
                        <p>
                            De acuerdo con las normativas de protección de datos, el tratamiento de datos que revelen convicciones
                            religiosas es de categoría especial.

                            Nota: Al proporcionarnos tus datos voluntariamente a través de formularios de membresía o suscripción,
                            nos otorgas tu consentimiento explícito para tratarlos dentro del marco de nuestras actividades religiosas.
                        </p>
                        <li><strong>¿Compartimos tu información?</strong></li>
                        <p>
                            No vendemos ni alquilamos tus datos a terceros.
                            Solo compartiremos información bajo las siguientes excepciones:</p>
                        <p>
                            - Proveedores de servicios: Plataformas de envío de correos o procesadores de pagos (quienes deben
                            cumplir con sus propias políticas de seguridad).<br />
                            - Obligación legal: Cuando las autoridades gubernamentales así lo requieran por ley.<br />
                            - Seguridad: Para proteger la integridad física de los miembros en situaciones de emergencia.
                        </p>

                        <li><strong>Seguridad de los Datos</strong></li>
                        <p>
                            Implementamos medidas técnicas y organizativas para evitar la pérdida, mal uso o acceso no autorizado.
                            El acceso a la base de datos de la comunidad está restringido únicamente al personal administrativo y pastoral autorizado.
                        </p>
                        <li><strong>Tus Derechos (Derechos ARCO)</strong></li>
                        <p>
                            Tú tienes el control sobre tu información. En cualquier momento puedes solicitar:
                        </p>
                        <p>
                            - Acceso: Saber qué datos tenemos de ti.<br />
                            - Rectificación: Corregir información desactualizada o errónea.<br />
                            - Cancelación: Solicitar que eliminemos tus datos de nuestros registros.<br />
                            - Oposición: Pedir que no te enviemos ciertas comunicaciones.
                        </p>
                        <li><strong>Contacto</strong></li>
                        <p>
                            Si tienes preguntas sobre cómo manejamos tu privacidad o deseas ejercer tus derechos, por favor contáctanos en:<br />
                        </p>
                        <p>
                            - Correo electrónico: [email@tuiglesia.org] <br />
                            - Dirección: [Dirección física de la oficina]<br />
                            - Teléfono: [Número de teléfono]
                        </p>
                    </ol>

                    Consejos adicionales para tu sitio:
                    El aviso de fotos: Si sueles publicar fotos de los servicios en redes sociales, es recomendable colocar un pequeño aviso físico en la entrada del templo que diga: "Este servicio está siendo grabado/fotografiado para fines de difusión ministerial".

                    Casilla de verificación: En tus formularios web, asegúrate de que el usuario deba marcar una casilla que diga: "He leído y acepto la política de privacidad" antes de enviar sus datos.

                </Container>
            </div>

            <FooterComponent />

            <a id="myBtn" href="#" className="back-to-top"><TbArrowBigUpLinesFilled /></a>
        </>
    );
}

export default PrivacyPolicy;