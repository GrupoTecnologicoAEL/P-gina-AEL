import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: 'Experiencia y Profesionalismo',
      description: 'Contamos con un equipo altamente calificado con más de 10 años de experiencia en el desarrollo de soluciones tecnológicas innovadoras.',
      icon: '/icons/experiencia.png', // Asegúrate de tener los iconos en esta ruta
    },
    {
      id: 2,
      title: 'Soluciones Personalizadas',
      description: 'Adaptamos nuestras soluciones a las necesidades específicas de tu negocio para garantizar resultados óptimos.',
      icon: '/icons/personalizado.png',
    },
    {
      id: 3,
      title: 'Tecnología de Vanguardia',
      description: 'Utilizamos las últimas tecnologías y metodologías ágiles para asegurar la eficiencia y calidad de nuestros productos.',
      icon: '/icons/vanguardia.png',
    },
    {
      id: 4,
      title: 'Atención al Cliente Excepcional',
      description: 'Brindamos soporte y asesoría personalizada en cada etapa del proyecto, asegurando tu satisfacción total.',
      icon: '/icons/atencion.png',
    },
    {
      id: 5,
      title: 'Resultados Comprobados',
      description: 'Nuestra cartera de clientes satisfechos y casos de éxito respaldan nuestro compromiso con la excelencia.',
      icon: '/icons/resultados.png',
    },
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <h2>¿Por Qué Elegirnos?</h2>
      <div className="reasons-container">
        {reasons.map(reason => (
          <div key={reason.id} className="reason-card" data-aos="fade-up">
            <img src={reason.icon} alt={reason.title} className="reason-icon" />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
