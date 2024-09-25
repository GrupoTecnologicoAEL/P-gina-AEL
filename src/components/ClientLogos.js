// src/components/ClientLogos.js
import React from 'react';
import './ClientLogos.css';

function ClientLogos() {
  const logos = [
    { id: 1, src: '/images/cliente1.png', alt: 'Cliente 1' },
    { id: 2, src: '/images/cliente2.png', alt: 'Cliente 2' },
    // Agrega más logos según necesites
  ];

  return (
    <div className="client-logos">
      <div className="logos-marquee">
        {logos.map(logo => (
          <img key={logo.id} src={logo.src} alt={logo.alt} />
        ))}
        {/* Repite los logos para crear el efecto de loop */}
        {logos.map(logo => (
          <img key={`dup-${logo.id}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default ClientLogos;
