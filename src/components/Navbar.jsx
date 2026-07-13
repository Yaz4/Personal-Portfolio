import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">Y<span>D</span></a>
        <ul className="nav-links">
          <li><a href="#about">Chi Sono</a></li>
          <li><a href="#skills">Competenze</a></li>
          <li><a href="#projects">Progetti</a></li>
          <li><a href="#contact" className="nav-cta">Contatti</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
