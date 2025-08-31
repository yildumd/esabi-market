import React, { useState, useEffect } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  // Sample product data with categories
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Premium Rice (50kg)', 
      price: 35000, 
      marketPrice: 38000, 
      savings: 3000, 
      emoji: '🍚',
      category: 'Rice & Grains',
      vendor: 'Obi Farms',
      rating: 4.5
    },
    { 
      id: 2, 
      name: 'Groundnut Oil (5L)', 
      price: 8500, 
      marketPrice: 9200, 
      savings: 700, 
      emoji: '🫒',
      category: 'Cooking Essentials',
      vendor: 'Natural Oils',
      rating: 4.2
    },
    { 
      id: 3, 
      name: 'Detergent (Large)', 
      price: 4200, 
      marketPrice: 4800, 
      savings: 600, 
      emoji: '🧴',
      category: 'Household Items',
      vendor: 'Clean Home',
      rating: 4.3
    },
    { 
      id: 4, 
      name: 'Tomato Paste (Crate)', 
      price: 12000, 
      marketPrice: 13500, 
      savings: 1500, 
      emoji: '🥫',
      category: 'Canned Foods',
      vendor: 'Fresh Foods',
      rating: 4.7
    },
    { 
      id: 5, 
      name: 'Bath Soap (Pack of 10)', 
      price: 2500, 
      marketPrice: 3000, 
      savings: 500, 
      emoji: '🧼',
      category: 'Toiletries',
      vendor: 'Clean Body',
      rating: 4.1
    },
    { 
      id: 6, 
      name: 'Spaghetti (Carton)', 
      price: 8500, 
      marketPrice: 9500, 
      savings: 1000, 
      emoji: '🍝',
      category: 'Packaged Goods',
      vendor: 'Pasta King',
      rating: 4.4
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Categories for filtering
  const categories = ['All', 'Rice & Grains', 'Cooking Essentials', 'Household Items', 'Canned Foods', 'Toiletries', 'Packaged Goods'];

  // Filter products by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Show confirmation message
    alert(`${product.name} added to cart!`);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Calculate total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Vendor product upload function (simulated)
  const handleProductUpload = (productData) => {
    const newProduct = {
      id: products.length + 1,
      ...productData
    };
    
    setProducts([...products, newProduct]);
    alert('Product uploaded successfully!');
  };

  return (
    <div className="product-showcase-container">
      <section className="product-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Market Products</h2>
            <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
              🛒
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.emoji}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="vendor">By {product.vendor}</p>
                  <div className="rating">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>({product.rating})</span>
                  </div>
                  <div className="price-section">
                    <span className="current-price">₦{product.price.toLocaleString()}</span>
                    <span className="original-price">₦{product.marketPrice.toLocaleString()}</span>
                  </div>
                  <div className="savings">Save ₦{product.savings.toLocaleString()}</div>
                  <button 
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
          </div>
          
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">{item.emoji}</div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>₦{item.price.toLocaleString()} × {item.quantity}</p>
                    </div>
                    <div className="item-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-total">
                <p>Total: <span>₦{cartTotal.toLocaleString()}</span></p>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Vendor Product Upload Form */}
      <div className="vendor-upload-section">
        <div className="container">
          <h3>Vendor Product Upload</h3>
          <ProductUploadForm onUpload={handleProductUpload} categories={categories.filter(cat => cat !== 'All')} />
        </div>
      </div>
    </div>
  );
};

// Product Upload Form Component
const ProductUploadForm = ({ onUpload, categories }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    marketPrice: '',
    category: '',
    emoji: '🛒',
    vendor: '',
    rating: 4.0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!productData.name || !productData.price || !productData.category) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Convert prices to numbers
    const processedData = {
      ...productData,
      price: parseInt(productData.price),
      marketPrice: parseInt(productData.marketPrice || productData.price),
      savings: parseInt(productData.marketPrice || productData.price) - parseInt(productData.price)
    };
    
    onUpload(processedData);
    
    // Reset form
    setProductData({
      name: '',
      price: '',
      marketPrice: '',
      category: '',
      emoji: '🛒',
      vendor: '',
      rating: 4.0
    });
  };

  return (
    <form className="product-upload-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Vendor Name *</label>
          <input
            type="text"
            name="vendor"
            value={productData.vendor}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Price (₦) *</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Market Price (₦)</label>
          <input
            type="number"
            name="marketPrice"
            value={productData.marketPrice}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Category *</label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Product Emoji</label>
          <select
            name="emoji"
            value={productData.emoji}
            onChange={handleChange}
          >
            <option value="🛒">🛒 General</option>
            <option value="🍚">🍚 Rice</option>
            <option value="🫒">🫒 Oil</option>
            <option value="🧴">🧴 Detergent</option>
            <option value="🥫">🥫 Canned Food</option>
            <option value="🧼">🧼 Soap</option>
            <option value="🍝">🍝 Pasta</option>
          </select>
        </div>
      </div>
      
      <button type="submit" className="upload-btn">Upload Product</button>
    </form>
  );
};

export default ProductShowcase;