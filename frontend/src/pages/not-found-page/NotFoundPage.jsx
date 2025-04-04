import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <section className="not-found-page-container">
            <h1>Oops... esta página se fugó del cuaderno</h1>
            <p>Parece que esta hoja fue arrancada o nunca se escribió. Pero no te preocupes, puedes volver a la portada y empezar de nuevo.</p>
            <Link to="/">
                Volver al inicio
            </Link>
        </section>
    );
};

export default NotFoundPage;