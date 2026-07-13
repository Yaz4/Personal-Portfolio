import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>&copy; {new Date().getFullYear()} Yazan Daseqi. Tutti i diritti riservati.</p>
        <p style={{ fontSize: '0.85rem' }}>
          <button 
            onClick={() => alert("Privacy & Cookie Policy\n\nQuesto sito web funge da portfolio personale statico. Non utilizza cookie di tracciamento o profilazione, né raccoglie dati personali. I contatti avvengono tramite client di posta esterno (mailto).")} 
            style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Privacy & Cookie Policy
          </button>
        </p>
      </footer>
    </>
  );
}

export default App;
