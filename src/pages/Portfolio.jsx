import React, { useState } from "react";
import { useContext, useEffect } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import ProjectBox from "../components/ProjectBox";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Portfolio | Giuseppe Caci";
  }, []);

  const [langUser, setLangUser] = useState("it")

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    setLangUser(savedLanguage)
  },[])

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
    const { t } = useTranslation('portfolio');


  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  return (
    <>
      <div className={`main-base ${theme} primary`}>
        <div className={`container-base flex-center-column container-invisible ${isVisible ? 'visible' : ''}`}>
            <div className="container-project">
            <h3>{t('title-1')}</h3>
            <div className="projects-grid">
              <ProjectBox
               backgroundImage={`/assets/generic/bg-publicis-${langUser}.png`}
               to="/portfolio/collaborazione-01"
               className="link-project project-box"
              ></ProjectBox>
            </div>
          </div>
          <div className="container-project">
            <h3>{t('title-2')}</h3>
            <div className="projects-grid">
            <ProjectBox
               backgroundImage={`/assets/generic/bg-seica-boat-${langUser}.png`}
               to="/portfolio/progetto-05"
               className="link-project project-box"
              ></ProjectBox>
               <ProjectBox
               backgroundImage={`/assets/generic/bg-salvatore-panasci-${langUser}.png`}
               to="/portfolio/progetto-03"
               className="link-project project-box"
              ></ProjectBox>
              <ProjectBox
               backgroundImage={`/assets/generic/bg-adventurescode-${langUser}.png`}
               to="/portfolio/progetto-02"
               className="link-project project-box"
              ></ProjectBox>
              <ProjectBox
              backgroundImage={`/assets/generic/bg-giuseppe-caci-${langUser}.png`}
               to="/portfolio/progetto-01"
               className="link-project project-box"
              ></ProjectBox>
            </div>
            
          </div>
          <div className="container-project last-container">
            <h3>{t('title-3')}</h3>
            <div className="projects-grid">
              <ProjectBox
              backgroundImage={`/assets/generic/bg-streaming-project-${langUser}.png`}
               to="/portfolio/progetto-04"
               className="link-project project-box"
              ></ProjectBox>
            </div>
          </div>
          
          </div>
        </div>
    </>
  );
};

export default Portfolio;
