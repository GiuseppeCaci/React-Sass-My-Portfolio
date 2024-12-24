import React from "react";
import { useEffect, useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import Gallery from "../components/GalleryComponent/Gallery";
import "react-photo-view/dist/react-photo-view.css";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudIcon from "@mui/icons-material/Cloud";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LinkIcon from "@mui/icons-material/Link";
import StorageIcon from "@mui/icons-material/Storage";
import { useTranslation, Trans } from 'react-i18next';

const ProgettoStreaming = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Progetto Streaming | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation('streamingP');

  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const pacchettiUsati = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "React-Redux",
    "Axios",
    "JWT-Decode",
    "@MUI/Material",
    "Swiper",
    "Embla-Carousel-React",
    "TailwindCSS",
    "Vite",
    "Node.js",
    "Express",
    "PostMan",
    "MongoDB",
    "Figma",
    "Leonardo AI",
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  const figmaProject = [
    {
      src: "/assets/gallery/streaming-01.png",
      alt: "design-libreria",
      thumb: "/assets/gallery/streaming-thumb-01.jpg",
    },
    {
      src: "/assets/gallery/streaming-02.png",
      alt: "flat-design-computer-giugla",
      thumb: "/assets/gallery/streaming-thumb-02.jpg",
    },
    {
      src: "/assets/gallery/streaming-03.png",
      alt: "flat-design-monte",
      thumb: "/assets/gallery/streaming-thumb-03.jpg",
    },
    {
      src: "/assets/gallery/streaming-04.png",
      alt: "flat-design-monte",
      thumb: "/assets/gallery/streaming-thumb-04.jpg",
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
                <h2>{t('StreamingP.title')}</h2>
              </div>
              <h5 className="text-accent">
                {" "}
                <LightbulbIcon fontSize="small" />{t('StreamingP.siteType.heading')}
              </h5>
              <p>{t('StreamingP.siteType.value')} </p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                {t('StreamingP.publicationDate.heading')}
              </h5>
              <p> {t('StreamingP.publicationDate.value')}</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                {t('StreamingP.platforms.heading')}
              </h5>
              <p>{t('StreamingP.platforms.value')}</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                {t('StreamingP.visitWebsite.heading')}
              </h5>
              <div className="icon-project">
                <a
                  href="https://github.com/GiuseppeCaci/Streaming-Project-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://github.com/GiuseppeCaci/Streaming-Project-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StorageIcon fontSize="large" />
                </a>
                <a
                  href="https://project-streaming-web-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div className="article-base flex-left-column">
              <p>
       <Trans i18nKey={t('StreamingP.description1.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
            <div className="article-base flex-left-column">
              <p>
              <Trans i18nKey={t('StreamingP.description2.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>{t('StreamingP.toolsUsed.heading')}</h4>
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
              <h4 className="text-accent">{t('StreamingP.title-development')}</h4>
              <ul>
                <li>
                <Trans i18nKey={t('StreamingP.phase1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
                </li>
                <li>
                <Trans i18nKey={t('StreamingP.phase2')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
                <ul>
              {t('StreamingP.developmentPhases.description', { returnObjects: true }).map((phase, index) => (
  <li key={index} dangerouslySetInnerHTML={{ __html: phase.description }} />
))}
              </ul>
                </li>
                <li>
                  {t('StreamingP.phase3')} 
                  <ul>
                  {t('StreamingP.subPhases.description', { returnObjects: true }).map((phase, index) => (
  <li key={index} dangerouslySetInnerHTML={{ __html: phase.description }} />
))}
                  </ul>
                </li>
              </ul>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>{t('StreamingP.screenBg')} </h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent"> {t('StreamingP.mainDifficulties.heading')} </h4>
              <p>
              <Trans i18nKey={t('StreamingP.mainDifficulties.description')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">{t('StreamingP.title-result')}</h4>
              <ul>
              {t('StreamingP.results.description',{ returnObjects: true }).map((phase, index) => (
  <li key={index} dangerouslySetInnerHTML={{ __html: phase }} />
))}
                  </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoStreaming;
