import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo2.png";
import "./CircleNavigation1.css";

const CircleNavigation1 = () => {
    return (
        <section className="circle-navigation-container">
            <Link to="/certificacion/conocer" className="circle-navigation">
                Conocer
            </Link>
            <Link to="/certificacion/proceso-de-evaluacion" className="circle-navigation">
                Proceso de Evaluación
            </Link>
            <div>
                <img src={Logo} alt="Logo" className="circle-navigation-logo" />
            </div>
            <Link to="/certificacion/estandares-ofertados" className="circle-navigation">
                Estándares Ofertados
            </Link>
            <Link to="/certificacion/donde-puedo-certificarme" className="circle-navigation">
                ¿Dónde puedo certificarme?
            </Link>
        </section>
    );
};

export default CircleNavigation1;