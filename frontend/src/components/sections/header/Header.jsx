import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/header/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-container">
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
                <Link to="/">CIDTES</Link>
                <Link to="/capacitacion">Capacitación</Link>
                <Link to="/certificacion/conocer">Certificación</Link>
                <Link to="/consultoria">Consultoria</Link>
                <Link to="/investigacion-y-desarrollo/1">Investigación consultoria</Link>
                <Link to="/contacto">Únete</Link>
            </nav>
        </header>
    );
};

export default Header;