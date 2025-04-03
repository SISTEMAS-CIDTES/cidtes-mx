import React from "react";
import Courses from "./courses.json";
import "./Energy.css";

const Energy = () => {
    return (
        <section className="energy-container">
            <section className="banner-container">
                <h1>Energía</h1>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del  T</p>
            </section>
            <section className="our-courses-container">
                <h2>Nuestros Cursos</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Courses.map((row, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{row.column1}</td>
                                        <td>{row.column2}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default Energy;