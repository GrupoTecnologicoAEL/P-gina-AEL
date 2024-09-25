// src/components/Animations.js
import React, { useEffect, useRef } from 'react';
import './Animations.css';


function Animations() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Código de animación (similar al que te proporcioné antes)
    // ...

    return () => {
      // Limpia la animación al desmontar el componente
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="background-animation"></canvas>
  );
}

export default Animations;
