import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const LanguageSwitcherDESK = () => {
  // Stato per la lingua attuale
  const [language, setLanguage] = useState('it'); 
  gsap.registerPlugin(ScrollToPlugin);
  // Funzione per cambiare la lingua
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia la lingua con i18n
    setLanguage(lang);          // Aggiorna lo stato
    localStorage.setItem('language', lang);  // Salva la lingua nel localStorage
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false }, // Scorrere fino alla parte superiore della pagina
      duration: 1, // Tempo in secondi per il movimento
      ease: "power2.out", // Easing per un movimento fluido
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Ritardo di 2 secondi
  };

  // Effetto per caricare la lingua dal localStorage all'avvio
  useEffect(() => {
    let savedLanguage = localStorage.getItem('language'); // Recupera la lingua salvata
  
    // Se la lingua non è presente, assegna 'en' come valore di default
    if (!savedLanguage) {
      savedLanguage = 'it';
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
       <img
        src="/assets/lang/es.png"
        alt="Spanish"
        onClick={() => changeLanguage('es')}
        style={{ cursor: 'pointer', opacity: language === 'es' ? 1 : 0.5 }}
      />
    </div>
  );
};

export default LanguageSwitcherDESK;
