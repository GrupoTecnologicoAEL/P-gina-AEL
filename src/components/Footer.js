// src/components/Footer.js
import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Grupo Tecnológico AEL. Todos los derechos reservados.</p>
        <div className="social-media">
          <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="/images/twitter-icon.png" alt="Twitter" /></a>
          {/* Agrega más iconos si es necesario */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
