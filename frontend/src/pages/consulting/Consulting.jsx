import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import "./Consulting.css";

const Consulting = () => {
    return (
        <section className="consulting-container">
            <h1>Consultoria</h1>
            <div className="consulting-content">
                <div>
                    <img src={Logo} alt="Logo" />
                    <p>En CIDTES trabajamos los problemas actuales con el objetivo de cambiar el modelo productivo, social y laboral con conciencia ambiental y sostenible. El área de Consultoría generamos servicios de asesoría y auditoria en temas de Seguridad, Salud, Energía, Medio Ambiente y Sustentabilidad. </p>
                </div>
                <ul>
                    <li>
                        <Link to="">
                            Energía
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Sustentabilidad
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Carbono y Emisiones
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Edificación
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Desarrollo Social
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Cambio Climático
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Consulting;