// src/pages/Home.js
import React from 'react';
import ClientLogos from '../components/ClientLogos';
import WhyChooseUs from '../components/WhyChooseUs';
import { Helmet } from 'react-helmet';
import './Home.css';
import Spline from '@splinetool/react-spline';


function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Inicio - Grupo Tecnológico AEL</title>
        <meta name="description" content="Innovando el futuro con tecnología de punta." />
      </Helmet>

      {/* Escena 3D de Spline */}
      <main className="spline-container">
        <Spline scene="https://prod.spline.design/QS6eDX7L73dX9nz0/scene.splinecode" />
      </main>

      {/* Contenido principal */}
      <div className="home-content">
        <h1>Bienvenido a Grupo Tecnológico AEL</h1>
        <p>Innovando el futuro con tecnología de punta.</p>
      </div>

      {/* Por Qué Elegirnos */}
      <WhyChooseUs />

      {/* Nuestro Proceso */}
      <section id="our-process" className="our-process">
        <h2>Nuestro Proceso</h2>
        <ol>
          <li><strong>Análisis:</strong> Comprendemos tus necesidades.</li>
          <li><strong>Desarrollo:</strong> Creamos soluciones a medida.</li>
          <li><strong>Implementación:</strong> Integración sin problemas.</li>
          <li><strong>Soporte:</strong> Asistencia continua post-venta.</li>
        </ol>
      </section>

      {/* Testimonios de Clientes */}
      <section id="testimonials" className="testimonials">
        <h2>Testimonios de Clientes</h2>
        <div className="testimonial">
          <p>"Grupo AEL transformó nuestra forma de trabajar. Su software es increíble."</p>
          <p>- Juan Pérez, CEO de TechSolutions</p>
        </div>
        {/* Añade más testimonios según sea necesario */}
      </section>

      {/* Logos de Clientes */}
      <ClientLogos />
    </div>
  );
}

export default Home;
