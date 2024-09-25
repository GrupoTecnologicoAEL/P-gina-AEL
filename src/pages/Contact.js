// src/pages/Contact.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Contacto - Grupo Tecnológico AEL</title>
        <meta name="description" content="Ponte en contacto con nosotros." />
      </Helmet>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo Electrónico" required />
        <textarea name="mensaje" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contact;
