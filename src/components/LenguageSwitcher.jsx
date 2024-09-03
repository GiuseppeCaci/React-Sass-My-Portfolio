import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const storedLanguage = localStorage.getItem('language') || 'it';
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language, i18n]);

  const handleLanguageChange = (lng) => {
    setLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>EN</button>
      <button onClick={() => handleLanguageChange('it')}>IT</button>
    </div>
  );
};

export default LanguageSwitcher;
