import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Header shadow on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Section detection for active nav highlighting
      const sections = ['home', 'vendors', 'how-it-works', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleVendorLogin = () => {
    // This would typically open a modal or navigate to a login page
    alert('Vendor login functionality would open here. This could be a modal or separate page.');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span className="logo-icon">🛒</span>
          <h1>E-Sabi Market</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#vendors" 
            className={activeSection === 'vendors' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('vendors');
            }}
          >
            Vendors
          </a>
          <a 
            href="#how-it-works" 
            className={activeSection === 'how-it-works' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('how-it-works');
            }}
          >
            How It Works
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <button className="cta-button" onClick={handleVendorLogin}>
            Vendor Login
          </button>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;