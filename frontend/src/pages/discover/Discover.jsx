import React from "react";
import CircleNavigation1 from "../../components/common/circle-navigation-1/CircleNavigation1";
import "./Discover.css";

const Discover = () => {
    return (
        <section className="discover-container">
            <h1>Certificación</h1>
            <div className="discover-content">
                <div className="navigation-container">
                    <CircleNavigation1 />
                </div>
                <div>
                    <h2>Conocer</h2>
                    <div>
                        <h3>¿Qué es el CONOCER?</h3>
                        <p>El Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) es una entidad paraestatal sectorizada de la Secretaría de Educación Pública (SEP), conformado por un órgano de gobierno tripartita con representantes de los trabajadores, los empresarios y el gobierno. </p>
                    </div>
                </div>
            </div>
            <div className="more-discover-content">
                <div>
                    <h3>¿Qué es un estandar de competencia?</h3>
                    <p>Es un documento oficial aplicable en toda la República Mexicana que sirve de referencia para evaluar y certificar la competencia de las personas.</p>
                </div>
                <div>
                    <h3>¿Qué es un estandar de competencia?</h3>
                    <p>La certificación de competencias es el proceso a través del cual las personas demuestran por medio de evidencias: los conocimientos, habilidades y destrezas.</p>
                </div>
            </div>
        </section>
    );
};

export default Discover;