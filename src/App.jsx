import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navigation />
        <Products />
        <ShoppingCart />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
