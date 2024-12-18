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

const ProgettoSeica = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Sito Seica Boat Excursions | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

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
                <h2>Seica Boat Excursions</h2>
                {/*
                 <div style={{ backgroundColor: "#193832" }}></div>
                <div style={{ backgroundColor: "#2a6355" }}></div>
                <div style={{ backgroundColor: "#f0f5f5" }}></div>
                <div style={{ backgroundColor: "#4fbb64" }}></div>
                */}
              </div>
              <h5 className="text-accent">
                {" "}
                <LightbulbIcon fontSize="small" /> Tipo di Sito
              </h5>
              <p>E-commerce Specializzato</p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                Data pubblicazione
              </h5>
              <p>18/11/2024</p>
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
    Un sito di <strong className="text-accent">escursioni in barca</strong> creato con
    <strong className="text-accent"> WordPress</strong>, utilizzando il tema
    <strong className="text-accent"> Phlox</strong> e il builder
    <strong className="text-accent"> Elementor</strong>. Un sito che coniuga
    creatività e funzionalità, pensato per valorizzare l’esperienza turistica.
  </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>Strumenti Usati</h4>
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
              <h4 className="text-accent">Fasi dello sviluppo:</h4>
              <ul>
    <li>
      <strong>Studio preliminare:</strong> Ho effettuato una ricerca approfondita sui
      <strong className="text-accent"> template</strong> per siti di escursioni in barca, 
      analizzando stili visivi e tecniche per l’utilizzo di 
      <strong className="text-accent"> Elementor</strong>.
    </li>
    <li>
      <strong>Sviluppo organizzativo:</strong> 
      <ul>
        <li>Progettazione della struttura del design con <strong className="text-accent">Figma</strong>.</li>
        <li>Creazione dell’alberatura delle pagine e loro sviluppo in <strong className="text-accent">WordPress</strong>.</li>
        <li>Inserimento di contenuti testuali e multimediali.</li>
        <li>
          Realizzazione di <strong className="text-accent">disegni in background</strong> con Figma, 
          per aggiungere un tocco personalizzato.
        </li>
        <li>Ottimizzazione del sistema <strong className="text-accent">SEO</strong> per aumentare la visibilità.</li>
      </ul>
    </li>
    <li>
      <strong>Design visivo:</strong>
      <ul>
        <li>
          <strong>Palette di colori:</strong> Ho scelto una combinazione cromatica che rispecchia i colori del mare:
          <strong className="text-accent"> #256D85</strong> (Teal Blue), <strong className="text-accent">#3B82F6</strong> (Blue Cornflower), 
          e <strong className="text-accent">#FDFDFD</strong> (White Smoke).
        </li>
        <li>
          <strong>Tipografia:</strong> <strong className="text-accent">Nunito </strong> 
          e <strong className="text-accent">Lora</strong>.
        </li>
        <li>
          <strong>Immagini:</strong> Tutti gli elementi visivi sono stati disegnati a mano 
          con <strong className="text-accent">Figma</strong>.
        </li>
      </ul>
    </li>
  </ul>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Background di Figma</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">Difficoltà principali:</h4>
              <p>Non ho incontrato difficoltà particolari nello sviluppo di questo sito.</p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">Risultati e conclusioni:</h4>
              <ul>
    <li>Un sito web di <strong className="text-accent">escursioni in barca</strong> dal design accattivante.</li>
    <li>Esperienza visiva coinvolgente grazie all’uso di colori vivaci e contenuti personalizzati.</li>
    <li>
      Una struttura <strong className="text-accent">SEO</strong> ampliata per migliorare la 
      visibilità sui motori di ricerca.
    </li>
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
