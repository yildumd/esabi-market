import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/Products/ProductList';
import './App.css';

// Sample products data
const products = [
  {
    id: 1,
    name: "Premium Rice (50kg)",
    price: 35000,
    marketPrice: 38000,
    category: "Rice & Grains",
    vendor: "Obi Farms",
    rating: 4.5,
    image: "🍚",
    description: "High quality long grain rice"
  },
  // Add more products...
];

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <Hero />
          <ProductList products={products} />
          {/* Other components will go here */}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;