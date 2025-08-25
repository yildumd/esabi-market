import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Supermarket Quality at Market Prices</h2>
        <p>Get all your groceries and household essentials delivered directly from Nigeria's vibrant open markets to your doorstep. Save money without sacrificing convenience.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Shop Groceries</button>
          <button className="btn-secondary">Become a Vendor</button>
        </div>
        
        <div className="featured-categories">
          <span className="category-tag">🍚 Rice & Grains</span>
          <span className="category-tag">🛒 Packaged Goods</span>
          <span className="category-tag">🧴 Household Items</span>
          <span className="category-tag">🥫 Canned Foods</span>
          <span className="category-tag">🧼 Toiletries</span>
          <span className="category-tag">🍶 Cooking Essentials</span>
        </div>
      </div>
      <div className="hero-image">
        <div className="placeholder-image">
          🛒 🍚 🧴 🧼
        </div>
      </div>
    </section>
  );
};

export default Hero;