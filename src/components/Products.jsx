import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
  const { addItem } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img alt={`${product.title} kitabı`} src={product.image} />
          <h1>{product.title}</h1>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      ))}
    </section>
  );
};

export default Products;
