import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const {theme} = useContext(ThemeContext);

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
      <div onClick={handleLangMenu} className={`nav-setting-changeLanguage ${theme} ${langMenu ? 'open primary' : 'secondary'} ${theme}`}>
        {langMenu ? (
          <>
          <div>
         <p onClick={() => handleLanguageChange("en")}>en</p>
         <p onClick={() => handleLanguageChange("it")}>it</p>
         </div>
         </>
        ) : <p>{language}</p>}
      </div>
    </>
  );
};

export default LanguageSwitcher;
