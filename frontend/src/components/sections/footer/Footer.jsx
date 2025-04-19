import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/images/logo2.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div>
                <div>
                    <img src={Logo} alt="Logo"/>
                    <p>Tu aventura con CIDTES Energía y Sustentabilidad comienza aquí.</p>
                </div>
                <div>
                    <h2>Contacto</h2>
                    <ul>
                        <li>
                            <a
                                href="mailto:cidtes@energiaysustentabilidad.org"
                                target="_blank"
                                rel="noreferrer"
                            >
                                cidtes@energiaysustentabilidad.org
                            </a>
                        </li>
                        <li>
                            <a
                                href="phone:5568125783"
                                target="_blank"
                                rel="noreferrer"
                            >
                                +52 55 6812-5783
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Ubicación</h2>
                    <p>
                        Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330, México.
                    </p>
                    <iframe
                        title="Mapa de Ubicación"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx"
                    >
                    </iframe>
                </div>
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>© 2025 CIDTES Energía y Sustentabilidad. |</p>
                    <p>Todos los derechos reservados. |</p>
                    <Link
                        to=""
                    >
                        Aviso de privacidad
                    </Link>
                    <p>|</p> 
                    <Link
                        to=""
                    >
                        Términos y condiciones
                    </Link>
                    <p>|</p>
                    <Link
                        to=""
                    >
                        Legal
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;