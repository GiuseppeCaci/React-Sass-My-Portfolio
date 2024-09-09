import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const storedLanguage = localStorage.getItem("language") || "it";
  const [language, setLanguage] = useState(storedLanguage);
  const [langMenu, setLangMenu] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const handleLanguageChange = (lng) => {
    setLanguage(lng);
  };

  const handleLangMenu = () => {
    setLangMenu(!langMenu);
  };


  return (
    <>
      <div onClick={handleLangMenu}>
        {langMenu ? (
          <>
         <button onClick={() => handleLanguageChange("en")}>EN</button>
         <button onClick={() => handleLanguageChange("it")}>IT</button>
         </>
        ) : <p>{language}</p>}
      </div>
    </>
  );
};

export default LanguageSwitcher;
