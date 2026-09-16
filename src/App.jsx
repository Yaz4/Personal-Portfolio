import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
            onClick={() => setIsPrivacyOpen(true)} 
            style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', textDecoration: 'underline' }}
            aria-label="Apri Informativa Privacy e Cookie"
          >
            Privacy & Cookie Policy
          </button>
        </p>
      </footer>
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}

export default App;
