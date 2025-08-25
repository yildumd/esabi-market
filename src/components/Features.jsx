import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '💰',
      title: 'Market Prices',
      description: 'Get the same low prices as traditional markets without the hassle of haggling or transportation.'
    },
    {
      icon: '🛒',
      title: 'Wide Selection',
      description: 'Everything from rice and beans to detergent and cooking oil - all your supermarket needs in one place.'
    },
    {
      icon: '🚚',
      title: 'Direct Delivery',
      description: 'From the market stalls directly to your home. Fresh, authentic, and convenient.'
    },
    {
      icon: '🤝',
      title: 'Trusted Vendors',
      description: 'All our vendors are verified and rated by the community for quality and reliability.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose E-Sabi Market?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;