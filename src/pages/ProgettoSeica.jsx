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
    document.title = "Progetto Portfolio | Giuseppe Caci";
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
                <LightbulbIcon fontSize="small" /> Tipo di progetto
              </h5>
              <p>Sito Escursioni </p>
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
    <strong className="text-accent"> Elementor</strong>. Un progetto che coniuga
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
      <strong className="text-accent">template</strong> per siti di escursioni in barca, 
      analizzando stili visivi e tecniche per l’utilizzo di 
      <strong className="text-accent">Elementor</strong>.
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
          <strong className="text-accent">256D85</strong>, <strong className="text-accent">3B82F6</strong>, 
          e <strong className="text-accent">FDFDFD</strong>.
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
                <h4>Flat Design su Figma</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">Difficoltà principali:</h4>
              <p>
    Questo progetto mi ha messo alla prova su numerosi fronti. 
    Lato <i>backend</i>, inizialmente ho trovato complessa la gestione delle funzioni legate 
    all'<strong className="text-accent">autenticazione</strong> tramite token e all'invio email. 
    Lato <i>frontend</i>, la creazione di stati Redux ramificati in tutto il sito ha rappresentato una sfida, 
    così come l'implementazione del <strong className="text-accent">localStorage</strong> per ottimizzare il flusso dati.
  </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">Risultati e conclusioni:</h4>
              <ul>
    <li>Funzionalità di registrazione e accesso utente, con conferma tramite email.</li>
    <li>Gestione del cambio password e dell'immagine del profilo utente.</li>
    <li>Possibilità per gli utenti di aggiungere e rimuovere media dai preferiti.</li>
    <li>Caricamento e gestione dei film sulla piattaforma, con opzioni di modifica ed eliminazione.</li>
    <li>Ottimizzazione delle chiamate API tramite Redux e utilizzo del <strong className="text-accent">localStorage</strong>.</li>
    <li>Integrazione di funzionalità avanzate di <i>backend</i>, inclusa l'autenticazione basata su token.</li>
    <li>Creazione di un design moderno e accattivante ispirato alla piattaforma <strong className="text-accent">Netflix</strong>.</li>
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
