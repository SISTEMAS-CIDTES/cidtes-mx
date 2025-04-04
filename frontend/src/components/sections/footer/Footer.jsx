import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/images/logo2.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-visual main-div">
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo" />
                </Link>
                <div className="infor">
                    <h1>¿Un mensaje puede cambiarlo todo? ¡Descúbrelo!</h1>
                    <div>
                        <a href="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" alt="Facebook"></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-container main-div">
                <div>
                    <h1>Contacto</h1>
                    <ul>
                        <li>
                            <a href="mailto:cidtes@energiaysustentabilidad.org" target="_blank" rel="noreferrer">
                                cidtes@energiaysustentabilidad.org
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Télefonos de Oficina</h1>
                    <ul>
                        <li>
                            (55) 6812 5783
                        </li>
                    </ul>
                </div>
            </div>
            <div className="location-container main-div">
                <h2>Ubicación</h2>
                <p>
                    <FontAwesomeIcon icon= "fa-solid fa-map-location-dot" alt=""/>
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
        </footer>
    );
};

export default Footer;