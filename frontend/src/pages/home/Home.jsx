import React from "react";
import OurExperience from "../../assets/images/home/our-experience.png";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-container">
            <section className="meet-us-container">
                <h2>¡Conócenos!</h2>
                <p>Estamos comprometidos a proporcionar una asesoría del más alto nivel de calidad, a través de un servicio personalizado, herramientas de comunicación y a través de un equipo de expertos con iniciativa, receptivo y con una amplia experiencia como Asesores y/o Auditores. Dicha experiencia, nos permite identificar necesidades y/o riesgos que pueden resultar al evaluar procesos integrales y/o operativos de las distintas áreas involucradas, de tal manera que nos permita dar beneficios o un gran valor agregado. </p>
            </section>
            <section className="our-experience-container">
                <h2>Nuestra Experiencia</h2>
                <div>
                    <img src={OurExperience} alt="Our Experience" />
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section className="clients-container">
                <h2>Nuestros Clientes</h2>
                <ul>
                    {
                        Array.from({ length: 20 }, (_, index) => (
                            <li key={index}>
                                <img src="https://img.freepik.com/vector-gratis/diseno-logotipo-degradado-mc_23-2149487341.jpg" alt="Logo" />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    );
};

export default Home;