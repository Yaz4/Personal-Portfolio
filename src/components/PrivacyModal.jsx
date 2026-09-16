import React, { useEffect } from 'react';
import './PrivacyModal.css';

const PrivacyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="privacy-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title">
      <div className="privacy-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-modal-header">
          <h2 id="privacy-modal-title">Informativa sulla <span>Privacy & Cookie</span></h2>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Chiudi finestra modale">&times;</button>
        </div>
        
        <div className="privacy-modal-content">
          <p><em>Ultimo aggiornamento: 16 settembre 2026</em></p>
          
          <p>
            Benvenuto sul mio portfolio personale. La protezione dei tuoi dati personali è per me una priorità assoluta. 
            La presente Informativa sulla Privacy descrive le modalità con cui questo sito web gestisce i dati degli utenti 
            in conformità al Regolamento Generale sulla Protezione dei Dati dell'Unione Europea (GDPR - Regolamento UE 2016/679).
          </p>

          <h3>1. Titolare del Trattamento</h3>
          <p>
            Il Titolare del trattamento dei dati è <strong>Yazan Daseqi</strong>.<br />
            Per qualsiasi chiarimento o richiesta relativa al trattamento dei dati personali, è possibile contattarmi all'indirizzo email: 
            <a href="mailto:yazan.daseqi04@gmail.com" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline', marginLeft: '0.3rem' }}>
              yazan.daseqi04@gmail.com
            </a>.
          </p>

          <h3>2. Tipologia di Dati Trattati e Finalità</h3>
          <p>Questo sito ha finalità esclusivamente informative e professionali. Nello specifico:</p>
          <ul>
            <li>
              <strong>Dati di navigazione:</strong> Durante la consultazione del sito, i sistemi informatici e le procedure software preposte al funzionamento del sito acquisiscono automaticamente alcuni dati tecnici (es. indirizzo IP, tipo di browser, orario della richiesta, codice di risposta del server). Tali dati vengono eventualmente raccolti dal fornitore di hosting esclusivamente per motivi di sicurezza e corretto funzionamento della rete.
            </li>
            <li>
              <strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.
            </li>
          </ul>

          <h3>3. Cookie e Strumenti di Tracciamento</h3>
          <p>
            Questo sito web <strong>NON utilizza cookie di profilazione, cookie analitici o cookie di terze parti</strong> per il tracciamento del comportamento degli utenti (come ad es. Google Analytics o Facebook Pixel). 
            Non è pertanto richiesto alcun banner di consenso preventivo ai sensi delle linee guida del Garante Privacy.
          </p>

          <h3>4. Base Giuridica del Trattamento</h3>
          <p>
            La base giuridica del trattamento per i dati forniti volontariamente via email è l'esecuzione di misure precontrattuali o contrattuali adottate su richiesta dell'interessato (Art. 6.1.b del GDPR), nonché il legittimo interesse del Titolare a rispondere alle comunicazioni ricevute.
          </p>

          <h3>5. Modalità e Tempi di Conservazione dei Dati</h3>
          <p>
            I dati forniti via email vengono trattati con strumenti automatizzati e conservati per il tempo strettamente necessario a gestire ed evadere le comunicazioni o eventuali rapporti professionali scaturiti, nel rispetto della normativa vigente. I dati non vengono ceduti a terzi né diffusi.
          </p>

          <h3>6. Diritti dell'Interessato</h3>
          <p>In quanto interessato, ai sensi degli artt. 15 e ss. del GDPR hai il diritto di:</p>
          <ul>
            <li>Chiedere l'accesso ai tuoi dati personali e la loro rettifica o cancellazione;</li>
            <li>Chiedere la limitazione del trattamento o opporti al trattamento stesso;</li>
            <li>Revocare in qualsiasi momento il consenso (ove prestato);</li>
            <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).</li>
          </ul>
        </div>

        <div className="privacy-modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Ho capito</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
