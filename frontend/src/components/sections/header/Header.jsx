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
                <Link to="/">Capacitación</Link>
                <Link to="/">Certificación</Link>
                <Link to="/">Consultoria</Link>
                <Link to="">Investigación consultoria</Link>
                <Link to="">Únete</Link>
            </nav>
        </header>
    );
};

export default Header;