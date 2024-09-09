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
      <div onClick={handleLangMenu} className="nav-setting-changeLanguage">
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
