import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/images/training/imagen1.png";
import "./Training.css";

const Training = () => {
    return (
        <section className="training-container">
            <section className="banner-container">
                <h1>Capacitación</h1>
                <div className="images-container">
                    <div></div>
                    <div></div>
                    <img src={Image1} alt="test" />
                    <div></div>
                </div>
            </section>
            <section className="text-container">
                <div><h2>Conoce las areas que te ofrecemos </h2></div>
                <p>En nuestros cursos, hemos desarrollado una metodología sólida alineada con la competitividad, fomentando un entorno de aprendizaje relevante para el desarrollo personal y profesional. Valoramos la experiencia, autonomía y motivación del aprendiz, utilizando la andragogía para facilitar la conexión de nueva información con experiencias previas y promover conocimientos duraderos y funcionales. </p>
            </section>
            <section className="cards-container">
                <Link to="/capacitacion/energia">
                    <h2>Energía</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
                <Link to="/capacitacion/seguridad-y-salud-en-el-trabajo">
                    <h2>Seguridad y Salud en el trabajo</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
                <Link to="/capacitacion/desarrollo-personal">
                    <h2>Desarrollo Personal</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
                <Link to="/capacitacion/desarrollo-personal">
                    <h2>Desarrollo Personal</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
                <Link to="/capacitacion/formativo">
                    <h2>Formativo</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
                <Link to="/capacitacion/valuacion">
                    <h2>Valuación</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
                <Link to="/capacitacion/desarrollo-organizacional">
                    <h2>Desarrollo Organizacional</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
                </Link>
            </section>
        </section>
    );
};

export default Training;