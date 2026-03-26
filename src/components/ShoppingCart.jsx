import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="shopping-cart">
      <h2>Sepet</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.title} x {item.quantity}
            </span>
            <button onClick={() => removeItem(item.id)}>
              {' '}
              Remove from cart
            </button>
          </div>
        ))
      )}
      <p>Toplam: ${total.toFixed(2)}</p>
      <button disabled={cart.length === 0}>Ödeme</button>
    </section>
  );
};

export default ShoppingCart;
