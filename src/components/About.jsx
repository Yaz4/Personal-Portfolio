import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Chi <span>Sono</span></h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <p>
              Sono un Ingegnere Informatico neolaureato con una forte passione per lo sviluppo di software, 
              le nuove tecnologie e la risoluzione di problemi complessi. Il mio percorso accademico mi ha 
              fornito solide basi in algoritmi, architetture dei sistemi, ingegneria del software e reti.
            </p>
            <p>
              Durante gli studi, ho sviluppato un interesse particolare per lo sviluppo web e per la creazione 
              di architetture scalabili. Amo esplorare nuovi framework e linguaggi per rimanere sempre aggiornato.
            </p>
            <p>
              Sono una persona curiosa, determinata e orientata al lavoro di squadra. Il mio obiettivo è 
              inserirmi in un ambiente stimolante dove posso contribuire attivamente, crescere professionalmente 
              e trasformare le mie competenze teoriche in soluzioni pratiche e innovative.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card glass-card">
              <h3>Laurea</h3>
              <p>Ingegneria Informatica</p>
            </div>
            <div className="stat-card glass-card">
              <h3>Passione</h3>
              <p>Sviluppo Software</p>
            </div>
            <div className="stat-card glass-card">
              <h3>Obiettivo</h3>
              <p>Innovazione Digitale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
