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
import StorageIcon from '@mui/icons-material/Storage';
import { useTranslation, Trans } from 'react-i18next';

const ProgettoSeica = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Sito Seica Boat Excursions | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
    const { t } = useTranslation('seicaBoat');

  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const pacchettiUsati = [
    "Anywhere Elementor",
    "Polylang",
    "Easy Table of Contents",
    "Elementor",
    "Hustle",
    "Phlox Core Elements",
    "Photo Gallery",
    "Timeline",
    "Read Meter",
    "Smart Slider 3",
    "WPCode Lite",
    "Yoast SEO"
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  const figmaProject = [
    {
      src: "/assets/gallery/seica-01.png",
      alt: "design-libreria",
      thumb: "/assets/gallery/seica-01.png",
    },
    {
      src: "/assets/gallery/seica-02.png",
      alt: "design-libreria",
      thumb: "/assets/gallery/seica-02.png",
    },
    {
      src: "/assets/gallery/seica-03.png",
      alt: "design-libreria",
      thumb: "/assets/gallery/seica-03.png",
    },
    {
      src: "/assets/gallery/seica-04.png",
      alt: "design-libreria",
      thumb: "/assets/gallery/seica-04.png",
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
                <h2>{t('seicaBoatExcursions.title')}</h2>
              </div>
              <h5 className="text-accent">
                {" "}
                <LightbulbIcon fontSize="small" />{t('seicaBoatExcursions.siteType.heading')}
              </h5>
              <p>{t('seicaBoatExcursions.siteType.value')}</p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                {t('seicaBoatExcursions.publicationDate.heading')}
              </h5>
              <p>{t('seicaBoatExcursions.publicationDate.value')}</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                {t('seicaBoatExcursions.platforms.heading')}
              </h5>
              <p>{t('seicaBoatExcursions.platforms.value')}</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                {t('seicaBoatExcursions.visitWebsite.heading')}
              </h5>
              <div className="icon-project">
                <a
                  href="https://seicaboatexcursions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div className="article-base flex-left-column">
            <p>
   <Trans i18nKey={t('seicaBoatExcursions.description.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, em:<em/> }} />
  </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>{t('seicaBoatExcursions.toolsUsed.heading')}</h4>
                <div className="container-skills flex-center-row">
                  {pacchettiUsati.map((element) => (
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
              <h4 className="text-accent">{t('seicaBoatExcursions.developmentPhases.heading')}</h4>
              <ul>
    <li>
      <strong>{t('seicaBoatExcursions.developmentPhases.phase1.heading')}</strong> 
      <Trans i18nKey={t('seicaBoatExcursions.developmentPhases.phase1.description')} components={{ strong: <strong className="text-accent" />, i: <i />, em:<em/> }} />
    </li>
    <li>
      <strong>{t('seicaBoatExcursions.developmentPhases.phase2.heading')}</strong> 
      <ul>
    {t('seicaBoatExcursions.developmentPhases.phase2.tasks', { returnObjects: true }).map((task, index) => (
      <li key={index} dangerouslySetInnerHTML={{ __html: task.task }} />
    ))}
      </ul>
    </li>
    <li>
      <strong>{t('seicaBoatExcursions.developmentPhases.phase3.heading')}</strong>
      <ul>
    {t('seicaBoatExcursions.developmentPhases.phase3.subPhases', { returnObjects: true }).map((subPhase, index) => (
      <li key={index} dangerouslySetInnerHTML={{ __html: subPhase.description }} />
    ))}
  </ul>
    </li>
  </ul>
            
              <h4 className="text-accent">{t('seicaBoatExcursions.mainDifficulties.heading')}</h4>
              <p>  <Trans i18nKey={t('seicaBoatExcursions.mainDifficulties.description')} components={{ strong: <strong className="text-accent" />, i: <i />, em:<em/> }} /></p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">{t('seicaBoatExcursions.resultsAndConclusions.heading')}</h4>
    <ul>
      {t('seicaBoatExcursions.resultsAndConclusions.points', { returnObjects: true }).map((point, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  <br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoSeica;
