// src/components/Cart.jsx
import  { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems(prevItems => [...prevItems, product]);
  };

  const totalCost = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalCost}</p>
    </div>
  );
};

export default Cart;
