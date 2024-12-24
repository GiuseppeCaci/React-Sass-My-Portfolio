import React, { useState, useEffect } from 'react';
import i18n from 'i18next';

const LanguageSwitcherDESK = () => {
  // Stato per la lingua attuale
  const [language, setLanguage] = useState('en'); 

  // Funzione per cambiare la lingua
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia la lingua con i18n
    setLanguage(lang);          // Aggiorna lo stato
    localStorage.setItem('language', lang);  // Salva la lingua nel localStorage
    window.location.reload();
  };

  // Effetto per caricare la lingua dal localStorage all'avvio
  useEffect(() => {
    let savedLanguage = localStorage.getItem('language'); // Recupera la lingua salvata
  
    // Se la lingua non è presente, assegna 'en' come valore di default
    if (!savedLanguage) {
      savedLanguage = 'en';
      localStorage.setItem('language', savedLanguage); // Salva la lingua di default nel localStorage
    }
  
    i18n.changeLanguage(savedLanguage); // Imposta la lingua appena viene caricato
    setLanguage(savedLanguage); // Imposta lo stato della lingua
  }, []);

  return (
    <div className="lang-container">
      <img
        src="/assets/lang/ita.png"
        alt="Italian"
        onClick={() => changeLanguage('it')}
        style={{ cursor: 'pointer', opacity: language === 'it' ? 1 : 0.5 }}
      />
      <img
        src="/assets/lang/en.png"
        alt="English"
        onClick={() => changeLanguage('en')}
        style={{ cursor: 'pointer', opacity: language === 'en' ? 1 : 0.5 }}
      />
    </div>
  );
};

export default LanguageSwitcherDESK;
