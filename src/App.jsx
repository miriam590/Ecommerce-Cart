import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SearchSort from './components/SearchSort';
import './styles/App.css';

const initialProducts = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 }
];

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  // Add item to cart or increase quantity if already in cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      return existingItem
        ? prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update item quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Simple E-Commerce Cart</h1>
      <SearchSort onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
