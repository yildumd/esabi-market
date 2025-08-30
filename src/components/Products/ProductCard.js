import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="vendor">By {product.vendor}</p>
        <div className="price-section">
          <span className="current-price">₦{product.price.toLocaleString()}</span>
          <span className="original-price">₦{product.marketPrice.toLocaleString()}</span>
        </div>
        <div className="rating">{"⭐".repeat(Math.floor(product.rating))}</div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}