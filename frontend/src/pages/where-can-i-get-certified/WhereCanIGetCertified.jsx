import React from "react";
import CircleNavigation1 from "../../components/common/circle-navigation-1/CircleNavigation1";
import "./WhereCanIGetCertified.css";

const WhereCanIGetCertified = () => {
    return (
        <section className="where-can-i-get-certified-container">
            <h1>Certificación</h1>
            <div className="where-can-i-get-certified-content">
                <div className="navigation-container">
                    <CircleNavigation1 />
                </div>
                <div className="more-content">
                    <h2>¿Dónde Puedo Certificarme?</h2>
                    <div className="maps-container">
                        <div className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade" 
                                title="Mapa de ubicación de CIDTES A.C."
                            >
                            </iframe>
                            <div>
                                <h3>Cede Dirección 1</h3>
                                <p>Calle, colonia, código postal</p>
                            </div>
                        </div>
                        <div className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade" 
                                title="Mapa de ubicación de CIDTES A.C."
                            >
                            </iframe>
                            <div>
                                <h3>Cede Dirección 2</h3>
                                <p>Calle, colonia, código postal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhereCanIGetCertified;