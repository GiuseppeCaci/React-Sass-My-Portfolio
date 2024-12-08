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

const ProgettoPanasci = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Sito Panasci | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const pluginUsati = [
    "Html",
    "Css",
    "Javascript",
    "Sass",
    "Bootstrap",
    "React",
    "Canvas"
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
              <p>Portfolio Personale </p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                Data pubblicazione
              </h5>
              <p>03/10/2024</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                Piattaforme
              </h5>
              <p>Netlify, Github</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                Visita il sito
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
    Questo sito è un portfolio personale creato con{" "}
    <strong className="text-accent">React</strong>,{" "}
    <strong className="text-accent">Bootstrap</strong> e{" "}
    <strong className="text-accent">Sass</strong>, dedicato a{" "}
    <strong>Salvatore Panasci</strong>, studente di neuropsicologia. È progettato
    per raccontare il suo percorso accademico e professionale.
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
      <strong>Studio preliminare:</strong> Ho condotto ricerche su siti di ambito
      medico e psicologico per individuare elementi utili alla struttura e al
      design del sito. Ho ripassato{" "}
      <strong className="text-accent">Bootstrap</strong>, integrandolo con{" "}
      <strong className="text-accent">Sass</strong> per una maggiore personalizzazione.
    </li>
    <li>
      <strong>Sviluppo organizzativo:</strong> Ho creato un design preliminare con{" "}
      <strong className="text-accent">Figma</strong>, avviato il progetto in{" "}
      <strong className="text-accent">React</strong> e sviluppato componenti modulari.
      Non ho avuto necessità di ampliare uno stato complesso su React, non essendoci funzioni avanzate.
    </li>
    <li>
      <strong>Design visivo:</strong>
      <ul>
        <li>
          Palette di colori: ho scelto un{" "}
          <strong className="text-accent">bianco tenue</strong> per lo sfondo, un{" "}
          <strong className="text-accent">blu intenso</strong> per i testi e un{" "}
          <strong className="text-accent">giallo caldo</strong> per i pulsanti.
        </li>
        <li>
          Tipografia: Ho utilizzato il font{" "}
          <strong className="text-accent">Inter</strong>, moderno e leggibile, in
          combinazione con stili sans-serif.
        </li>
      </ul>
    </li>
  </ul>

              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Progetto Figma e Canvas</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">Difficoltà principali:</h4>
              <p>
    Inizialmente ho avuto difficoltà a integrare{" "}
    <strong className="text-accent">Bootstrap</strong> con{" "}
    <strong className="text-accent">Sass</strong>, ma superata questa fase non ci sono stati altri problemi.
  </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">Risultati e conclusioni:</h4>
              <p>
    Il risultato è un portfolio che combina un design{" "}
    <i>minimalista</i> e una navigazione <i>efficace</i>. Il sito
    riflette professionalità e garantisce un’esperienza utente piacevole e
    coinvolgente.
  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoPanasci;
