import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo2.png";
import Image1 from "../../../assets/images/circle-navigation-2/1.png";
import Image2 from "../../../assets/images/circle-navigation-2/2.png";
//import Image3 from "../../../assets/images/circle-navigation-2/3.png";
import Image4 from "../../../assets/images/circle-navigation-2/4.png";
import Image5 from "../../../assets/images/circle-navigation-2/5.png";
import "./CircleNavigation2.css";

const CircleNavigation2 = () => {
    return (
        <section className="circle-navigation-container-2">
            <Link to="/certificacion/conocer" className="circle-navigation">
                <img src={Image1} alt="Conocer"/>
            </Link>
            <Link to="/certificacion/proceso-de-evaluacion" className="circle-navigation">
                <img src={Image2} alt="Proceso de Evaluación"/>
            </Link>
            <div>
                <img src={Logo} alt="Logo" className="circle-navigation-logo" />
            </div>
            <Link to="/certificacion/estandares-ofertados" className="circle-navigation">
                <img src={Image4} alt="Estándares Ofertados"/>
            </Link>
            <Link to="/certificacion/donde-puedo-certificarme" className="circle-navigation">
                <img src={Image5} alt="Dónde puedo certificarme"/>
            </Link>
        </section>
    );
};

export default CircleNavigation2;