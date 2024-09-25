// src/pages/Products.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Helmet } from 'react-helmet';
import './Products.css';


function Products() {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Software Empresarial',
      description: 'Optimiza tus procesos con nuestra solución integral.',
      price: 100,
      image: '/images/product1.jpg'
    },
    // Agrega más productos aquí
  ];

  return (
    <div className="products">
      <Helmet>
        <title>Productos - Grupo Tecnológico AEL</title>
        <meta name="description" content="Explora nuestros productos innovadores." />
      </Helmet>
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="btn-comprar" onClick={() => addToCart(product)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
