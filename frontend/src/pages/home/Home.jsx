import React from "react";
import { 
    Swiper,
    SwiperSlide
} from "swiper/react";
import {
    Keyboard,
    Pagination,
    Navigation,
    Autoplay
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import OurExperience from "../../assets/images/home/our-experience.png";
import Commitment1 from "../../assets/images/home/Commitment1.png";
import Commitment2 from "../../assets/images/home/Commitment2.png";
import Commitment3 from "../../assets/images/home/Commitment3.png";
import Values from "../../assets/images/home/Values.png";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-container">
            <section className="banner-container">
                <div className="my-cidtes-swiper-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        keyboard={{
                            enabled: true
                        }}
                        modules={[Pagination, Navigation, Autoplay, Keyboard]}
                        className="mySwiper"
                        navigation={true}
                    >
                        <SwiperSlide>
                            <img src={OurExperience} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={OurExperience} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={OurExperience} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={OurExperience} alt=""/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h1>¡Bienvenido a CIDTES!</h1>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
            </section>
            <section className="meet-us-container">
                <h2>¡Conócenos!</h2>
                <p>Estamos comprometidos a proporcionar una asesoría del más alto nivel de calidad, a través de un servicio personalizado, herramientas de comunicación y a través de un equipo de expertos con iniciativa, receptivo y con una amplia experiencia como Asesores y/o Auditores. Dicha experiencia, nos permite identificar necesidades y/o riesgos que pueden resultar al evaluar procesos integrales y/o operativos de las distintas áreas involucradas, de tal manera que nos permita dar beneficios o un gran valor agregado. </p>
            </section>
            <section className="our-commitments-container">
                <h2>Nuestros Compromisos</h2>
                <ul>
                    <li>
                        <img src={Commitment1} alt=""/>
                        <h3>Desarrollo Económico</h3>
                        <p>Proponer soluciones que optimicen recursos naturales, materiales y financieros para fortalecer la calidad, innovación y adaptabilidad de organizaciones, empresas e instituciones, promoviendo el trabajo decente y el desarrollo económico del país.</p>
                    </li>
                    <li>
                        <img src={Commitment2} alt=""/>
                        <h3>Desarrollo Ambiental</h3>
                        <p>Promocionar la energía asequible y no contaminante, así como la producción y consumos responsables con el objetivo de optimizar los recursos naturales y mitigar el cambio climático.</p>
                    </li>
                    <li>
                        <img src={Commitment3} alt=""/>
                        <h3>Desarrollo Social</h3>
                        <p>Fomentar el desarrollo infantil y una sociedad corresponsable mediante educación de calidad, promoviendo comunidades con valores para reducir desigualdades, pobreza y lograr equidad de género, potenciando el talento humano.</p>
                    </li>
                </ul>
            </section>
            <section className="values-container">
                <section className="our-values-container">
                    <h2>Nuestros Valores</h2>
                    <img src={Values} alt=""/>
                </section>
                <section className="mission-and-vision-container">
                    <div className="mission-and-vision">
                        <div className="circle"></div>
                        <div className="text">
                            <h3>Misión</h3>
                            <p>Promover la investigación, la innovación y el desarrollo de proyectos en temas de energía, sustentabilidad y seguridad y salud en el trabajo, así como fomentar el desarrollo de capacidades, la asesoría técnica especializada y el fortalecimiento de la cultura.</p>
                        </div>
                    </div>
                    <div className="mission-and-vision">
                        <div className="text">
                            <h3>Visión</h3>
                            <p>Ser líder en soluciones sustentables, conformando un grupo de expertos que actúe como agente de cambio en México.</p>
                        </div>
                        <div className="circle"></div>
                    </div>
                </section>
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