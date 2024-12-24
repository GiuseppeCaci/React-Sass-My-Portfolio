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

const ProgettoPortfolio = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Sito Portfolio | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
    const { t } = useTranslation('giuseppeCaci');

  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const strumentiUsati = [
    "Figma",
    "Html",
    "Css",
    "Sass",
    "Javascript",
    "React",
    "mui/material",
    "react-photo-view",
    "react-syntax-highlighter ",
    "i18n"
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  const figmaProject = [
    {
      src: "/assets/gallery/figma-desk.png",
      alt: "Figma-desk",
      thumb: "/assets/gallery/figma-desk.png",
    },
    {
      src: "/assets/gallery/figma-mobile.png",
      alt: "Figma-mobile",
      thumb: "/assets/gallery/figma-mobile.png",
    },
  ];
  const dispositives = [
    {
      src: "/assets/gallery/desk-version.png",
      alt: "responsive-desk",
      thumb: "/assets/gallery/desk-thumb.png",
    },
    {
      src: "/assets/gallery/tablet-version.png",
      alt: "responsive-tablet",
      thumb: "/assets/gallery/tablet-thumb.png",
    },
    {
      src: "/assets/gallery/mobile-version.png",
      alt: "responsive-mobile",
      thumb: "/assets/gallery/mobile-thumb.png",
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
                <h2>Giuseppe Caci</h2>
              </div>
              <h5 className="text-accent">
                {" "}
                <LightbulbIcon fontSize="small" /> {t('progettoPortfolio.siteType.heading')}
              </h5>
              <p> {t('progettoPortfolio.siteType.value')}</p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                {t('progettoPortfolio.publicationDate.heading')}
              </h5>
              <p>{t('progettoPortfolio.publicationDate.value')}</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                {t('progettoPortfolio.platforms.heading')}
              </h5>
              <p>{t('progettoPortfolio.platforms.value')}</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                {t('progettoPortfolio.visitWebsite.heading')}
              </h5>
              <div className="icon-project">
                <a
                  href="https://github.com/GiuseppeCaci/React-Sass-My-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://giuseppecaci.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div className="article-base flex-left-column">
              <p>
               <Trans i18nKey={t('progettoPortfolio.description.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>{t('progettoPortfolio.toolsUsed.heading')}</h4>
                <div className="container-skills flex-center-row">
                  {strumentiUsati.map((element) => (
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
              <h4 className="text-accent">{t('progettoPortfolio.developmentPhases.heading')}</h4>
              <ul>
              {t('progettoPortfolio.developmentPhases.phases', { returnObjects: true }).map((phase, index) => (
  <li key={index} dangerouslySetInnerHTML={{ __html: phase.description }} />
))}
              </ul>
                  </div>
                    <CodeSnippet
                      code={`   <SyntaxHighlighter language={language} style={bgColor === "dark-mode"? atomDark : solarizedlight}>
              {code}
            </SyntaxHighlighter>
`}
                      language="javascript"
                      bgColor={theme}
                    />
                    <div className="article-base flex-left-column">
                <ul>
                <li>
                <Trans i18nKey={t('progettoPortfolio.developmentPhases.phases2')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
                </li>
              </ul>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>{t('progettoPortfolio.figmaProject.heading')}</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">{t('progettoPortfolio.mainDifficulties.heading')}</h4>
              <p>
              {t('progettoPortfolio.mainDifficulties.description')}
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">{t('progettoPortfolio.resultsAndConclusions.heading')}</h4>
              <p>
              <Trans i18nKey={t('progettoPortfolio.resultsAndConclusions.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>{t('progettoPortfolio.dispositives.heading')}</h4>
                <Gallery images={dispositives} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoPortfolio;
