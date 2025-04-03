import React from "react";
import CircleNavigation1 from "../../components/common/circle-navigation-1/CircleNavigation1";
import "./EvaluationProcess.css";

const EvaluationProcess = () => {
    return (
        <section className="evaluation-process-container">
            <h1>Certificación</h1>
            <div className="evaluation-process-content">
                <div className="navigation-container">
                    <CircleNavigation1 />
                </div>
                <div className="more-evaluation-process-content">
                    <h2>Proceso de Evaluación</h2>
                    <ul>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                        <li>Elemento de una línea</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EvaluationProcess;