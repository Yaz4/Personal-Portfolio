import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting">Ciao, sono</p>
          <h1 className="name">Yazan Daseqi</h1>
          <h2 className="title">Dottore in Ingegneria Informatica</h2>
          <p className="description">
            Neolaureato in Ingegneria Informatica. Appassionato di sviluppo software, problem solving e innovazione tecnologica. Trasformo idee complesse in soluzioni digitali eleganti.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">I Miei Progetti</a>
            <a href="#contact" className="btn btn-secondary">Contattami</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
