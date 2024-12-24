import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import ProjectBox from "../components/ProjectBox";
import { useTranslation } from "react-i18next";

const Home = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Home | Giuseppe Caci";
  }, []);
  const { t } = useTranslation("home");

  const [langUser, setLangUser] = useState("it");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    setLangUser(savedLanguage);
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div
          className={`container-base flex-center-column container-invisible ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="container-hero">
            <h5 className="text-accent">{t("welcome1")}</h5>
            <h2>{t("welcome2")}</h2>
            <h5>{t("welcome3")}</h5>
          </div>

          <div className="container-project last-container">
            <div className="projects-grid">
              <ProjectBox
                backgroundImage={`/assets/generic/bg-seica-boat-${langUser}.png`}
                to="/portfolio/progetto-05"
                className="link-project project-box"
              ></ProjectBox>
              <ProjectBox
                backgroundImage={`/assets/generic/bg-giuseppe-caci-${langUser}.png`}
                to="/portfolio/progetto-01"
                className="link-project project-box"
              ></ProjectBox>
              <ProjectBox
                backgroundImage={`/assets/generic/bg-streaming-project-${langUser}.png`}
                to="/portfolio/progetto-04"
                className="link-project project-box"
              ></ProjectBox>
              <ProjectBox
                backgroundImage={`/assets/generic/bg-publicis-${langUser}.png`}
                to="/portfolio/collaborazione-01"
                className="link-project project-box"
              ></ProjectBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
