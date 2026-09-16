import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content glass-card">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Mettiamoci in <span>Contatto</span></h2>
          <p className="contact-text">
            Attualmente sono alla ricerca di nuove opportunità professionali. 
            Che tu abbia una domanda o voglia semplicemente fare un saluto, 
            farò del mio meglio per risponderti!
          </p>
          
          <div className="contact-actions">
            <a href="mailto:yazan.daseqi04@gmail.com" className="btn btn-primary btn-lg" aria-label="Invia un'email a Yazan Daseqi">
              Scrivimi un'Email
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yazan-daseqi-148b41242/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Profilo LinkedIn di Yazan Daseqi (si apre in una nuova scheda)">LinkedIn</a>
            <a href="https://github.com/Yaz4" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Profilo GitHub di Yazan Daseqi (si apre in una nuova scheda)">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
