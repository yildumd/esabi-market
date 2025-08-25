import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const products = [
    { name: 'Premium Rice (50kg)', price: '₦35,000', marketPrice: '₦38,000', savings: '₦3,000', emoji: '🍚' },
    { name: 'Groundnut Oil (5L)', price: '₦8,500', marketPrice: '₦9,200', savings: '₦700', emoji: '🫒' },
    { name: 'Detergent (Large)', price: '₦4,200', marketPrice: '₦4,800', savings: '₦600', emoji: '🧴' },
    { name: 'Tomato Paste (Crate)', price: '₦12,000', marketPrice: '₦13,500', savings: '₦1,500', emoji: '🥫' }
  ];

  return (
    <section className="product-showcase">
      <div className="container">
        <h2>Popular Market Deals</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-emoji">{product.emoji}</div>
              <h3>{product.name}</h3>
              <div className="price-section">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.marketPrice}</span>
              </div>
              <div className="savings">Save {product.savings}</div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;