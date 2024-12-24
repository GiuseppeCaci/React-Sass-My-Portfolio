import React from "react";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import Gallery from "../components/GalleryComponent/Gallery";
import "react-photo-view/dist/react-photo-view.css";
import CodeSnippet from "../components/CodeSnippet";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudIcon from "@mui/icons-material/Cloud";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation, Trans } from 'react-i18next';

const ProgettoAdventuresCode = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Sito Adventures Code | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
    const { t } = useTranslation('adventuresCode');

  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const pluginUsati = [
    "Wordpress",
    "Phlox",
    "Anywhere Elementor",
    "Elementor",
    "Phlox Core Elements",
    "Easy Table of Contents",
    "Enlighter",
    "Hustle",
    "Read Meter",
    "Site Kit by Google",
    "Smart Slider 3",
    "Yoast SEO",
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  const figmaProject = [
    {
      src: "/assets/gallery/adventures-code-02.png",
      alt: "flat-design-libreria",
      thumb: "/assets/gallery/adventures-code-02.png",
    },
    {
      src: "/assets/gallery/adventures-code-03.png",
      alt: "flat-design-computer-giugla",
      thumb: "/assets/gallery/adventures-code-03.png",
    },
    {
      src: "/assets/gallery/adventures-code-04.png",
      alt: "flat-design-monte",
      thumb: "/assets/gallery/adventures-code-04.png",
    },
  ];

  return (
    <>
      <div className={`main-base ${theme} primary`}>
        <div
          className={`flex-center-column container-invisible ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="size-large">
            <div className="article-informations">
              <div className="title-palette">
                <h2>Adventures Code</h2>
                {/*
                 <div style={{ backgroundColor: "#193832" }}></div>
                <div style={{ backgroundColor: "#2a6355" }}></div>
                <div style={{ backgroundColor: "#f0f5f5" }}></div>
                <div style={{ backgroundColor: "#4fbb64" }}></div>
                */}
              </div>
              <h5 className="text-accent">
                {" "}
                <LightbulbIcon fontSize="small" /> {t('adventuresCodePortfolio.siteType.heading')}
              </h5>
              <p>{t('adventuresCodePortfolio.siteType.value')} </p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                {t('adventuresCodePortfolio.publicationDate.heading')}
              </h5>
              <p> {t('adventuresCodePortfolio.publicationDate.value')}</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                {t('adventuresCodePortfolio.platforms.heading')}
              </h5>
              <p>{t('adventuresCodePortfolio.platforms.value')}</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                {t('adventuresCodePortfolio.visitWebsite.heading')}
              </h5>
              <div className="icon-project">
                <a
                  href="https://adventurescode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div className="article-base flex-left-column">
              <p>
            <Trans i18nKey={t('adventuresCodePortfolio.description.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
              <img
                src="/assets/generic/adventures-code-01.png"
                className="img-project"
              ></img>
                <div className="article-base flex-left-column">
              <p>
              <Trans i18nKey={t('adventuresCodePortfolio.description.paragraph2')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>{t('adventuresCodePortfolio.toolsUsed.heading')}</h4>
                <div className="container-skills flex-center-row">
                  {pluginUsati.map((element) => (
                    <div
                      key={element}
                      className={`skills-card ${theme} primary`}
                    >
                      <p>{element}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">{t('adventuresCodePortfolio.developmentPhases.heading')}</h4>
              <ul>
              {t('adventuresCodePortfolio.developmentPhases.phases', { returnObjects: true }).map((phase, index) => (
  <li key={index} dangerouslySetInnerHTML={{ __html: phase.description }} />
))}
              </ul>

              <div className={`${theme} gallery-background container-gallery`}>
                <h4>{t('adventuresCodePortfolio.figmaProject.heading')}</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">{t('adventuresCodePortfolio.mainDifficulties.heading')}</h4>
              <p>
              <Trans i18nKey={t('adventuresCodePortfolio.mainDifficulties.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
            <div className="article-base flex-left-column last-container">
              <h4 className="text-accent">{t('adventuresCodePortfolio.resultsAndConclusions.heading')}</h4>
              <p>
              <Trans i18nKey={t('adventuresCodePortfolio.resultsAndConclusions.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoAdventuresCode;
