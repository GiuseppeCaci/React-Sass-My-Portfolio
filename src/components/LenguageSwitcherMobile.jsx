import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcherMobile = () => {
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
      <div onClick={handleLangMenu} className="nav-setting-changeLanguageMobile">
      <p onClick={() => handleLanguageChange("en")} className={language === "en" ? "active-language" : ""}>en</p>
      <p onClick={() => handleLanguageChange("it")} className={language === "it" ? "active-language" : ""}>it</p>
      </div>
    </>
  );
};

export default LanguageSwitcherMobile;
