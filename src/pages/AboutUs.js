// src/pages/AboutUs.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';


function AboutUs() {
  return (
    <div className="about-us" data-aos="fade-up">
      <Helmet>
        <title>Sobre Nosotros - Grupo Tecnológico AEL</title>
        <meta name="description" content="Conoce más sobre Grupo Tecnológico AEL." />
      </Helmet>
      <h2>Sobre Nosotros</h2>
      <p>En Grupo Tecnológico AEL, nos dedicamos a ofrecer soluciones de software personalizadas que impulsan tu negocio al siguiente nivel.</p>
    </div>
  );
}

export default AboutUs;
