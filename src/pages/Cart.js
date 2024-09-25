// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Helmet } from 'react-helmet';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <Helmet>
        <title>Carrito - Grupo Tecnológico AEL</title>
        <meta name="description" content="Tu carrito de compras." />
      </Helmet>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
