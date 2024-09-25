// src/components/SplineScene.js
import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline/next';

function SplineScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/QS6eDX7L73dX9nz0/scene.splinecode" 
      />
    </main>
  );
    // Aquí pegaremos el código proporcionado por Spline
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
}

export default SplineScene;
