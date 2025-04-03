import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/images/circle-navigation-2/1.png";
import Image2 from "../../../assets/images/circle-navigation-2/2.png";
import Image3 from "../../../assets/images/circle-navigation-2/3.png";
import Image4 from "../../../assets/images/circle-navigation-2/4.png";
import Image5 from "../../../assets/images/circle-navigation-2/5.png";
import "./CircleNavigation2.css";

const CircleNavigation2 = () => {
    return (
        <nav className="circle-navigation-2-container">
            <Link to="">
                <img src={Image1} alt=""/>
            </Link>
            <Link to="">
                <img src={Image2} alt=""/>
            </Link>
            <Link>
                <img src={Image3} alt=""/>
            </Link>
            <Link to="">
                <img src={Image4} alt=""/>
            </Link>
            <Link to="">
                <img src={Image5} alt=""/>
            </Link>
        </nav>
    );
};

export default CircleNavigation2;