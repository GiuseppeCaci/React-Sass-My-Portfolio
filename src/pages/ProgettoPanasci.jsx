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

const ProgettoPanasci = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Sito Panasci | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation('panasci');

  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const pluginUsati = [
    "Html",
    "Css",
    "Javascript",
    "Sass",
    "Bootstrap",
    "React",
    "Canva"
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  const figmaProject = [
    {
      src: "/assets/gallery/panasci-01.png",
      alt: "progetto-panasci-figma",
      thumb: "/assets/gallery/panasci-01.png",
    },
    {
      src: "/assets/gallery/panasci-02.png",
      alt: "flat-design-computer-giugla",
      thumb: "/assets/gallery/panasci-02.png",
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
                <h2>Salvatore Panasci</h2>
              </div>
              <h5 className="text-accent">
                {" "}
                <LightbulbIcon fontSize="small" /> {t('panasciPortfolio.siteType.heading')}
              </h5>
              <p>{t('panasciPortfolio.siteType.value')}</p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                {t('panasciPortfolio.publicationDate.heading')}
              </h5>
              <p>{t('panasciPortfolio.publicationDate.value')}</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                {t('panasciPortfolio.platforms.heading')}
              </h5>
              <p>{t('panasciPortfolio.platforms.value')}</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                {t('panasciPortfolio.visitWebsite.heading')}
              </h5>
              <div className="icon-project">
              <a
                  href="https://github.com/GiuseppeCaci/React-Bootstrap-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://salvatorepanasci.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div className="article-base flex-left-column">
            <p>
   <Trans i18nKey={t('panasciPortfolio.description.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
  </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>{t('panasciPortfolio.toolsUsed.heading')}</h4>
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
              <h4 className="text-accent">{t('panasciPortfolio.developmentPhases.heading')}</h4>
              <ul>
    <li>
    <Trans i18nKey={t('panasciPortfolio.developmentPhases.phase1.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
    </li>
    <li>
    <Trans i18nKey={t('panasciPortfolio.developmentPhases.phase2.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
    </li>
    <li>
{t('panasciPortfolio.developmentPhases.phase3.heading')}
<ul>
    {t('panasciPortfolio.developmentPhases.phase3.subPhases', { returnObjects: true }).map((subPhases, index) => (
      <li key={index} dangerouslySetInnerHTML={{ __html: subPhases.description }} />
    ))}
      </ul>
    </li>
  </ul>

              <div className={`${theme} gallery-background container-gallery`}>
                <h4>{t('panasciPortfolio.figma-bg')}</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">{t('panasciPortfolio.mainDifficulties.heading')}</h4>
              <p>
              <Trans i18nKey={t('panasciPortfolio.mainDifficulties.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
  </p>
            </div>
            <div className="article-base flex-left-column last-container">
              <h4 className="text-accent">{t('panasciPortfolio.resultsAndConclusions.heading')}</h4>
              <p>
              <Trans i18nKey={t('panasciPortfolio.resultsAndConclusions.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoPanasci;
