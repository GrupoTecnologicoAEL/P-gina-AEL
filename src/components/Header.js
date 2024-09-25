// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <h1>Grupo Tecnológico AEL</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li>
          <ScrollLink to="why-choose-us" smooth={true} duration={500}>
            ¿Por Qué Elegirnos?
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="our-process" smooth={true} duration={500}>
            Nuestro Proceso
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            Testimonios
          </ScrollLink>
        </li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/cart">Carrito (0)</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
