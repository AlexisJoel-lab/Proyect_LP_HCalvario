function ModalAbout() {
    return (
        <>
            <div className="bg-mtradition">
                <div className="page-wrap">
                    <header className="pg-head">
                        <h1>Sobre Nosotros</h1>
                        <p>Un poco de nuestra historia</p>
                        <div className="bar" />
                    </header>
                    {/* 1 */}
                    <div className="section">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <rect x={10} y={55} width={60} height={14} rx={3} fill="#0a5c39" />
                                <rect
                                    x={15}
                                    y={20}
                                    width={50}
                                    height={38}
                                    rx={3}
                                    fill="#1a9c64"
                                    opacity=".9"
                                />
                                <line
                                    x1={23}
                                    y1={30}
                                    x2={57}
                                    y2={30}
                                    stroke="#e6f5ef"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1={23}
                                    y1={39}
                                    x2={50}
                                    y2={39}
                                    stroke="#e6f5ef"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1={23}
                                    y1={48}
                                    x2={53}
                                    y2={48}
                                    stroke="#e6f5ef"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <polygon points="52,13 57,23 47,23" fill="#3db97f" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            {/* <span className="sec-year">~3200 a.C.</span> */}
                            <div className="sec-title">Invención de la escritura</div>
                            <div className="sec-desc">
                                Los sumerios en Mesopotamia desarrollan la escritura cuneiforme,
                                marcando el inicio de la historia registrada. Por primera vez, el
                                conocimiento podía ser capturado, almacenado y transmitido más allá de
                                la memoria humana.
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="section rev">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <polygon points="40,8 68,62 12,62" fill="#1a9c64" opacity=".9" />
                                <polygon points="40,8 52,62 28,62" fill="#0a5c39" opacity=".7" />
                                <rect x={8} y={62} width={64} height={6} rx={2} fill="#0f7a4d" />
                                <circle cx={40} cy={28} r={4} fill="#c2e8d7" opacity=".8" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">~2560 a.C.</span>
                            <div className="sec-title">Pirámides de Giza</div>
                            <div className="sec-desc">
                                El faraón Keops ordena construir la Gran Pirámide en Egipto. Con más
                                de 2.3 millones de bloques de piedra, es la única de las Siete
                                Maravillas del Mundo Antiguo que permanece en pie hasta hoy.
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="section">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <rect x={10} y={56} width={60} height={10} rx={2} fill="#0a5c39" />
                                <rect x={18} y={28} width={7} height={30} fill="#1a9c64" />
                                <rect x="36.5" y={28} width={7} height={30} fill="#1a9c64" />
                                <rect x={55} y={28} width={7} height={30} fill="#1a9c64" />
                                <rect x={12} y={20} width={56} height={10} rx={2} fill="#0f7a4d" />
                                <rect x={22} y={10} width={36} height={12} rx={2} fill="#3db97f" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">~507 a.C.</span>
                            <div className="sec-title">Democracia ateniense</div>
                            <div className="sec-desc">
                                Clístenes establece en Atenas el primer sistema de gobierno
                                democrático de la historia. Su legado dio forma a toda la filosofía
                                política occidental y sigue siendo la base de los sistemas de gobierno
                                modernos.
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="section rev">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <circle
                                    cx={40}
                                    cy={40}
                                    r={28}
                                    stroke="#1a9c64"
                                    strokeWidth={3}
                                    fill="none"
                                />
                                <circle
                                    cx={40}
                                    cy={40}
                                    r={18}
                                    stroke="#0a5c39"
                                    strokeWidth={2}
                                    fill="none"
                                />
                                <line
                                    x1={40}
                                    y1={12}
                                    x2={40}
                                    y2={68}
                                    stroke="#3db97f"
                                    strokeWidth={2}
                                />
                                <line
                                    x1={12}
                                    y1={40}
                                    x2={68}
                                    y2={40}
                                    stroke="#3db97f"
                                    strokeWidth={2}
                                />
                                <circle cx={40} cy={40} r={5} fill="#0f7a4d" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">~117 d.C.</span>
                            <div className="sec-title">Apogeo del Imperio Romano</div>
                            <div className="sec-desc">
                                Bajo el mandato del emperador Trajano, el Imperio Romano alcanza su
                                máxima extensión territorial, abarcando desde Britania hasta
                                Mesopotamia con más de 5 millones de km² y 70 millones de habitantes.
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="section">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <rect
                                    x={15}
                                    y={14}
                                    width={50}
                                    height={56}
                                    rx={3}
                                    fill="#1a9c64"
                                    opacity=".9"
                                />
                                <rect x={22} y={24} width={36} height={4} rx={2} fill="#e6f5ef" />
                                <rect x={22} y={34} width={28} height={3} rx="1.5" fill="#c2e8d7" />
                                <rect x={22} y={43} width={32} height={3} rx="1.5" fill="#c2e8d7" />
                                <rect x={22} y={52} width={24} height={3} rx="1.5" fill="#c2e8d7" />
                                <rect x={53} y={10} width={8} height={20} rx={2} fill="#0f7a4d" />
                                <circle cx={57} cy={9} r={4} fill="#3db97f" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">1440</span>
                            <div className="sec-title">La imprenta de Gutenberg</div>
                            <div className="sec-desc">
                                Johannes Gutenberg inventa la prensa de tipos móviles en Europa,
                                democratizando el acceso al conocimiento. En 50 años, más de 20
                                millones de libros circulaban por el continente, preparando el
                                Renacimiento y la Reforma.
                            </div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className="section rev">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <rect x={10} y={46} width={60} height={22} rx={3} fill="#0a5c39" />
                                <rect x={18} y={30} width={18} height={20} fill="#1a9c64" />
                                <rect x={44} y={36} width={18} height={14} fill="#1a9c64" />
                                <rect x={26} y={14} width={9} height={20} rx={2} fill="#3db97f" />
                                <ellipse cx={30} cy={13} rx={6} ry={4} fill="#85d0ae" opacity=".6" />
                                <ellipse cx={30} cy={9} rx={4} ry={3} fill="#c2e8d7" opacity=".5" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">1760 – 1840</span>
                            <div className="sec-title">Revolución Industrial</div>
                            <div className="sec-desc">
                                Gran Bretaña lidera la transición hacia la producción mecanizada. La
                                máquina de vapor de James Watt transforma el trabajo, el transporte y
                                la economía global, desencadenando el crecimiento industrial moderno.
                            </div>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className="section">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <circle cx={60} cy={18} r={14} fill="#0a5c39" opacity=".8" />
                                <circle cx={56} cy={15} r={10} fill="#1a9c64" opacity=".6" />
                                <rect x={34} y={42} width={12} height={26} rx={2} fill="#3db97f" />
                                <rect x={30} y={38} width={20} height={8} rx={2} fill="#1a9c64" />
                                <rect x={18} y={46} width={16} height={4} rx={2} fill="#0f7a4d" />
                                <rect x={46} y={46} width={16} height={4} rx={2} fill="#0f7a4d" />
                                <rect x={38} y={68} width={4} height={8} fill="#0a5c39" />
                                <line
                                    x1={36}
                                    y1={73}
                                    x2={28}
                                    y2={77}
                                    stroke="#0a5c39"
                                    strokeWidth={2}
                                />
                                <line
                                    x1={44}
                                    y1={73}
                                    x2={52}
                                    y2={77}
                                    stroke="#0a5c39"
                                    strokeWidth={2}
                                />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">1969</span>
                            <div className="sec-title">El hombre llega a la Luna</div>
                            <div className="sec-desc">
                                Neil Armstrong y Buzz Aldrin, a bordo del Apollo 11, se convierten en
                                los primeros seres humanos en pisar la superficie lunar. Armstrong
                                pronunció las palabras: "un pequeño paso para el hombre, un gran salto
                                para la humanidad".
                            </div>
                        </div>
                    </div>
                    {/* 8 */}
                    <div className="section rev">
                        <div className="sec-img">
                            <svg viewBox="0 0 80 80" fill="none">
                                <circle
                                    cx={40}
                                    cy={40}
                                    r={26}
                                    stroke="#3db97f"
                                    strokeWidth="2.5"
                                    fill="none"
                                />
                                <ellipse
                                    cx={40}
                                    cy={40}
                                    rx={13}
                                    ry={26}
                                    stroke="#1a9c64"
                                    strokeWidth={2}
                                    fill="none"
                                />
                                <line
                                    x1={14}
                                    y1={40}
                                    x2={66}
                                    y2={40}
                                    stroke="#0f7a4d"
                                    strokeWidth={2}
                                />
                                <line
                                    x1={18}
                                    y1={28}
                                    x2={62}
                                    y2={28}
                                    stroke="#0a5c39"
                                    strokeWidth="1.5"
                                />
                                <line
                                    x1={18}
                                    y1={52}
                                    x2={62}
                                    y2={52}
                                    stroke="#0a5c39"
                                    strokeWidth="1.5"
                                />
                                <circle cx={40} cy={40} r={5} fill="#1a9c64" />
                            </svg>
                        </div>
                        <div className="sec-body">
                            <span className="sec-year">1991</span>
                            <div className="sec-title">Nace la World Wide Web</div>
                            <div className="sec-desc">
                                Tim Berners-Lee publica el primer sitio web en el CERN, dando inicio a
                                la era de Internet pública. En tres décadas, la web conectó a más de 5
                                mil millones de personas en una red global de conocimiento sin
                                precedentes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalAbout;