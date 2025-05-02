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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import "./Home.css";

const ads = [
    "1.jpg", "2.jpg", "3.jpg", "4.webp"
];

const clients = [
    "1.png", "2.png", "3.png", "4.png", "5.jpg",
    "6.png", "7.svg", "8.png", "9.png", "10.jpg",
    "11.jpeg", "12.jpeg", "13.png", "14.jpeg", "15.png"
];

const partners = [
    "1.png", "2.png", "3.png", "4.png", "5.png",
    "6.jpg", "7.png", "8.png", "9.png", "10.png",
    "11.png", "12.webp", "13.jpeg"
];

const collaborations = [
    "1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.png", "7.png", "8.jpg"
];

const Home = () => {
    const repeatedClients = [...clients, ...clients, ...clients];
    const repeatedPartners = [...partners, ...partners, ...partners];
    const repeatedCollaborations = [...collaborations, ...collaborations, ...collaborations];

    return (
        <section className="home-container">
            <section className="banner-container">
                <div>
                    <h1>CIDTES Energía y Sustentabilidad</h1>
                    <p>Somos una organización interdisciplinaria que brinda soluciones integrales en energía, sustentabilidad, seguridad y salud en el trabajo y desarrollo organizacional. Promoviendo la capacitación, la certificación, la investigación, el desarrollo tecnológico y la implementación de proyectos para mejores prácticas.</p>
                </div>
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
                        {
                            ads.map((ad, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={`/images/home/ads/${ad}`} alt=""/>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </section>
            <section className="our-compromises-container">
                <h2>Nuestros Compromisos</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-universal-access" />
                        <h3>Desarrollo Social</h3>
                        <p>Promover el desarrollo de l@s  niñ@s y una sociedad corresponsable, a través de la difusión y educación de calidad con el fin de integrar comunidades con principios y valores que contribuyan a reducir las desigualdades, la pobreza y alcanzar la equidad de género, potencializando el talento humano.</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
                        <h3>Desarrollo Económico</h3>
                        <p>Establecer soluciones que aprovechen los recursos naturales, materiales y financieros para que las organizaciones sociales, empresas e instituciones fortalezcan la calidad, innovación y adaptabilidad a los cambios con el objetivo de contribuir al trabajo decente y el desarrollo económico del país. </p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-leaf" />
                        <h3>Desarrollo Ambiental</h3>
                        <p>Promocionar la energía asequible y no contaminante, así como la producción y consumos responsables con el objetivo de optimizar los recursos naturales y mitigar el cambio climático.</p>
                    </li>
                </ul>
            </section>
            <section>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h2>Misión</h2>
                        <p>Promover la investigación, la innovación y el desarrollo de proyectos en temas de energía, sustentabilidad y seguridad y salud en el trabajo, así como fomentar el desarrollo de capacidades, la asesoría técnica especializada y el fortalecimiento de la cultura.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h2>Visión</h2>
                        <p>Ser líder en soluciones sustentables, conformando un grupo de expertos que actúe como agente de cambio en México.</p>
                    </div>
                </div>
            </section>
            <section className="values-container">
                <h2>Nuestros Valores</h2>
                <div>
                    <div>
                        <h2>C</h2>
                        <p>ompromiso Social</p>
                    </div>
                    <div>
                        <h2>C</h2>
                        <p>alidad</p>
                    </div>
                    <div>
                        <h2>I</h2>
                        <p>ntegridad</p>
                    </div>
                    <div>
                        <h2>D</h2>
                        <p>edicación</p>
                    </div>
                    <div>
                        <h2>T</h2>
                        <p>rabajo en Equipo</p>
                    </div>
                    <div>
                        <h2>E</h2>
                        <p>quidad</p>
                    </div>
                    <div>
                        <h2>S</h2>
                        <p>ervicio</p>
                    </div>
                </div>
            </section>
            <section className="carrousels-container">
                <section className="carrousel-container">
                    <div className="subcarrousel-container">
                        <h2>Nuestra Cartera de Clientes</h2>
                        <div>
                            <div className="clients-cards-container">
                                {
                                    repeatedClients.map((client, index) => {
                                        return (
                                            <div key={index}>
                                                <img
                                                    src={`/images/home/clients/${client}`}
                                                    alt="Logo"
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="carrousel-container">
                    <div className="subcarrousel-container">
                        <h2>Alianzas Estratégicas</h2>
                        <div>
                            <div className="partnerships-cards-container">
                                {
                                    repeatedPartners.map((partner, index) => {
                                        return (
                                            <div key={index}>
                                                <img
                                                    src={`/images/home/partners/${partner}`}
                                                    alt="Logo"
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="carrousel-container">
                    <div className="subcarrousel-container">
                        <h2>Colaboraciones</h2>
                        <div>
                            <div className="collaborations-cards-container">
                                {
                                    repeatedCollaborations.map((collaboration, index) => {
                                        return (
                                            <div key={index}>
                                                <img
                                                    src={`/images/home/collaborations/${collaboration}`}
                                                    alt="Logo"
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Home;