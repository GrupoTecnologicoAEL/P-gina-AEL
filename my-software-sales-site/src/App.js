import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const container = document.querySelector('.hero-container');

    function randomPosition() {
      return {
        x: Math.random() * container.clientWidth,
        y: Math.random() * container.clientHeight,
      };
    }

    function moveLight(light) {
      const newPosition = randomPosition();
      light.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }

    // Crear 10 luces y asignar movimiento aleatorio
    for (let i = 0; i < 10; i++) {
      const light = document.createElement('div');
      light.classList.add('random-light');

      const position = randomPosition();
      light.style.left = `${position.x}px`;
      light.style.top = `${position.y}px`;

      container.appendChild(light);

      setInterval(() => {
        moveLight(light);
      }, 3000 + Math.random() * 2000); // Movimiento aleatorio cada 3 a 5 segundos
    }
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <section id="hero" className="scroll-animate">
          <div className="hero-container">
            <div className="hero-text">
              <h1>Grupo Tecnológico AEL</h1>
              <h2>Explora Nuestras Soluciones de Software</h2>
              <p>Ofrecemos soluciones personalizadas para empresas de todos los tamaños.</p>
              <button onClick={toggleForm} className="cta-button">Obtener una Cotización</button>
            </div>
            <img className="hero-image" src="/assets/images/AEL_LOGO.jpeg" alt="Grupo Tecnológico AEL" />

          </div>
        </section>

        {showForm && (
          <section id="quote-form" className="scroll-animate">
            <div className="container">
              <h2>Solicitar una Cotización</h2>
              <form>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo Electrónico" required />
                <select>
                  <option value="">Selecciona un producto</option>
                  <option value="crm">Software CRM Avanzado</option>
                  <option value="erp">ERP para Pequeñas Empresas</option>
                </select>
                <button type="submit" className="submit-button">Enviar</button>
              </form>
            </div>
          </section>
        )}

        <section id="products" className="scroll-animate">
          <div className="container">
            <h2>Nuestros Productos</h2>
            <div className="product-grid">
              <div className="product-card">
                <img src="https://via.placeholder.com/300x200" alt="Software CRM" />
                <h3>Software CRM Avanzado</h3>
                <p>Gestiona eficientemente las relaciones con tus clientes</p>
              </div>
              <div className="product-card">
                <img src="https://via.placeholder.com/300x200" alt="Software ERP" />
                <h3>ERP para Pequeñas Empresas</h3>
                <p>Optimiza los procesos de tu negocio</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-animate">
          <div className="container">
            <h2>Acerca de Nosotros</h2>
            <p>En Grupo Tecnológico AEL, nos dedicamos a ofrecer soluciones de software innovadoras y personalizadas para ayudar a las empresas a prosperar en la era digital.</p>
          </div>
        </section>
      </main>

      <footer className="scroll-animate">
        <div className="container">
          <p>Contáctanos en: info@ael.com</p>
          <p>&copy; 2024 Grupo Tecnológico AEL</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
