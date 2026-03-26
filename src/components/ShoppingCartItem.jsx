import React, { useContext } from 'react';
import { ScCartItem, ScCartItemDetails } from './scParts';
import { CartContext } from '../contexts/CartContext';

const Item = ({ id, title, image, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <ScCartItem>
      <img src={image} alt={`${title} book`} />

      <ScCartItemDetails>
        <h2>{title}</h2>
        <p>
          ${price.toFixed(2)} x {quantity} = ${(price * quantity).toFixed(2)}
        </p>
        <button onClick={() => removeItem(id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
