import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}