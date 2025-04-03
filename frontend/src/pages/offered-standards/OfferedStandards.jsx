import React from "react";
import CircleNavigation1 from "../../components/common/circle-navigation-1/CircleNavigation1";
import "./OfferedStandards.css";

const OfferedStandards = () => {
    return (
        <section className="evaluation-process-container">
            <h1>Certificación</h1>
            <div className="evaluation-process-content">
                <div className="navigation-container">
                    <CircleNavigation1 />
                </div>
                <div className="more-evaluation-process-content">
                    <h2>Estándares Ofertados</h2>
                    <ul>
                        <li>
                            <div></div>
                            <div>
                                <h3>Estandar 1</h3>
                                <p>Breve descripción de esta sección</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OfferedStandards;