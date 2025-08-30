import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // In a real app, this would filter products or navigate to search results
    }
  };

  const categories = [
    { name: "Rice & Grains", icon: "🍚", color: "#FBBF24" },
    { name: "Packaged Goods", icon: "🛒", color: "#60A5FA" },
    { name: "Household Items", icon: "🧴", color: "#34D399" },
    { name: "Canned Foods", icon: "🥫", color: "#F87171" },
    { name: "Toiletries", icon: "🧼", color: "#A78BFA" },
    { name: "Cooking Essentials", icon: "🍶", color: "#F472B6" }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Supermarket Quality at <span className="highlight">Market Prices</span></h1>
            <p>Get all your groceries and household essentials delivered directly from Nigeria's vibrant open markets to your doorstep. Save money without sacrificing convenience.</p>
            
            <form onSubmit={handleSearch} className="search-bar">
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="What are you looking for today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                  <span className="search-icon">🔍</span>
                  Search
                </button>
              </div>
            </form>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                <span className="btn-icon">🛒</span>
                Shop Groceries
              </button>
              <button className="btn-secondary">
                <span className="btn-icon">👨‍🌾</span>
                Become a Vendor
              </button>
            </div>
            
            <div className="stats-container">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Vendors</span>
              </div>
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="floating-card card-1">
              <div className="card-emoji">🍚</div>
              <div className="card-text">
                <span className="card-title">Premium Rice</span>
                <span className="card-price">₦35,000</span>
              </div>
            </div>
            
            <div className="floating-card card-2">
              <div className="card-emoji">🧴</div>
              <div className="card-text">
                <span className="card-title">Detergent</span>
                <span className="card-price">₦4,200</span>
              </div>
            </div>
            
            <div className="floating-card card-3">
              <div className="card-emoji">🫒</div>
              <div className="card-text">
                <span className="card-title">Cooking Oil</span>
                <span className="card-price">₦8,500</span>
              </div>
            </div>
            
            <div className="main-image">
              <div className="image-placeholder">
                <div className="shopping-cart">🛒</div>
                <div className="floating-items">
                  <span className="floating-item item-1">🍚</span>
                  <span className="floating-item item-2">🧴</span>
                  <span className="floating-item item-3">🥫</span>
                  <span className="floating-item item-4">🧼</span>
                  <span className="floating-item item-5">🍶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="featured-categories">
          <h3>Popular Categories</h3>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-tag"
                style={{ '--category-color': category.color }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;