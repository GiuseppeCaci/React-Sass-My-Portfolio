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

const ProgettoAdventuresCode = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Progetto Portfolio | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

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
    "Yoast SEO"
  ];
  const strumentiDesign = [
"Figma", "Adobe Illustrator"
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
                <LightbulbIcon fontSize="small" /> Tipo di progetto
              </h5>
              <p>Blog di Programmazione</p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                Data pubblicazione
              </h5>
              <p>05/10/2024</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                Piattaforme
              </h5>
              <p>SiteGround</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                Visita il sito
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
                Il sito è una vetrina digitale del mio{" "}
                <strong>percorso professionale</strong> come sviluppatore,
                progettato per mostrare
                <span className="text-accent"> abilità</span>,{" "}
                <span className="text-accent">progetti</span> e{" "}
                <span className="text-accent">collaborazioni</span>. Il focus è
                su <i>design minimalista</i> e <i>funzionalità intuitive</i>,
                offrendo una panoramica chiara delle mie{" "}
                <strong>competenze</strong>.
              </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>Strumenti Usati</h4>
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
              <h4 className="text-accent">Fasi dello sviluppo:</h4>
              <ul>
                <li>
                  <strong>Ricerche preliminari:</strong> Analisi di{" "}
                  <i>template</i> e <i>standard</i> per definire funzioni e
                  design.
                </li>
                <li>
                  <strong>Sviluppo tecnico:</strong> Uso di{" "}
                  <span className="text-accent">React</span> per un front-end
                  scalabile, gestione delle pagine con
                  <span className="text-accent">react-router-dom</span> e cambio
                  tema dinamico tramite{" "}
                  <span className="text-accent">Context API</span>.
                </li>
                <li>  <strong>
                    Esempio di codice per evidenziare la sintassi:
                  </strong>
                  </li>
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
                  <strong>Design visivo:</strong>
                  <ul>
                    <li>
                      Palette di colori:{" "}
                      <span className="text-accent">verde scuro</span> per
                      modalità scura,{" "}
                      <span className="text-accent">grigio chiaro</span> e
                      <span className="text-accent"> verde</span> per quella
                      chiara.
                    </li>
                    <li>
                      Tipografia: <span className="text-accent">Poppins</span> e{" "}
                      <span className="text-accent">Inter</span> per un look
                      moderno e professionale.
                    </li>
                    <li>Animazioni sottili per migliorare l'interazione.</li>
                  </ul>
                </li>
              </ul>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Progetti Figma</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">Difficoltà principali:</h4>
              <p>
                La scelta dei colori ha richiesto diversi tentativi per ottenere
                il giusto equilibrio.
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">Risultati e conclusioni:</h4>
              <p>
                Un <i>design minimalista</i> e <i>funzionale</i> che rispecchia
                le mie <strong>competenze professionali</strong> e offre
                un'esperienza utente
                <span className="text-accent"> intuitiva</span>.
              </p>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Sui vari dispositivi</h4>
                <Gallery images={dispositives} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoAdventuresCode;
