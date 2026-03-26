import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navigation">
      <a href="/" className="active">
        Products
      </a>
      <a href="/cart">
        Cart <span>{totalQuantity}</span>
      </a>
    </nav>
  );
};

export default Navigation;
