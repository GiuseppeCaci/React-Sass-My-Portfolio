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
import StorageIcon from "@mui/icons-material/Storage";

const ProgettoStreaming = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Progetto Streaming | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

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
                <h2>Progetto Streaming</h2>
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
              <p>Piattaforma Streaming </p>
              <h5 className="text-accent">
                {" "}
                <AccessTimeIcon fontSize="small" />
                Data pubblicazione
              </h5>
              <p>05/11/2024</p>
              <h5 className="text-accent">
                {" "}
                <CloudIcon fontSize="small" />
                Piattaforme
              </h5>
              <p>Netlify, Heroku, MongoDB, Github</p>
              <h5 className="text-accent">
                {" "}
                <LinkIcon fontSize="small" />
                Visita il sito
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
                Questo progetto simula una piattaforma streaming (simile a
                Netflix), mettendo alla prova le mie competenze sul design,
                sulla gestione degli stati complessi in <i>React </i>e
                sull'implementazione di{" "}
                <strong className="text-accent">API RESTful</strong>.
              </p>
            </div>
            <div className="article-base flex-left-column">
              <p>
                Ho affrontato ogni fase del progetto, dalla pianificazione
                iniziale alla realizzazione completa delle funzionalità
                (Database, Server, Client), includendo il design, la gestione
                degli utenti e la costruzione di una UX intuitiva. Questo
                progetto rappresenta una sfida significativa per consolidare le
                mie competenze nello sviluppo <i>full stack</i>.
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
                  <strong>Studio preliminare: </strong>
                  Per il progetto è stata necessaria una lunga fase di
                  organizzazione e di creazioni di strutture in
                  <strong className="text-accent"> pseudocodice</strong>. Ho
                  iniziato strutturando il database (<i>MongoDB</i>),
                  successivamente il server e le chiamate API, per poi procedere
                  al <strong className="text-accent">frontend</strong>,
                  includendo sia la struttura stilistica che la gestione degli
                  stati in React.
                </li>
                <li>
                  <strong>Sviluppo organizzativo: </strong>
                  <ul>
                    <li>
                      <strong className="text-accent">Database: </strong>
                      Creazione della struttura dati per gli utenti
                      (registrazione, accesso, conferma email), preferiti (media
                      salvati dagli utenti) e media (dati sui singoli
                      contenuti).
                    </li>
                    <li>
                      <strong className="text-accent">Backend: </strong>
                      Implementazione delle funzioni <i>CRUD</i> per gestire
                      utenti, prodotti e preferiti. Successivamente, ogni
                      endpoint è stato testato con{" "}
                      <strong className="text-accent">Postman</strong> per
                      verificarne il corretto funzionamento.
                    </li>
                    <li>
                      <strong className="text-accent">Frontend: </strong>
                      Strutturazione del sito sia dal lato client (alberatura
                      delle pagine) che dal lato gestione stati (<i>Redux</i>).
                      L'uso di Redux mi ha permesso di creare stati complessi e
                      ben ramificati per gestire le chiamate API. Una volta
                      completata l'integrazione col backend, ho finalizzato il
                      design visivo del sito.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Design visivo: </strong>
                  <ul>
                    <li>
                      <strong>Palette di colori: </strong>
                      Ho utilizzato colori ispirati a{" "}
                      <strong className="text-accent">Netflix</strong>, tra cui:
                      <strong className="text-accent"> rosso</strong> (#E50914)
                      per gli accenti principali,
                      <strong className="text-accent"> nero</strong> (#141414)
                      per il background, e
                      <strong className="text-accent"> grigio</strong> (#B3B3B3)
                      per i dettagli.
                    </li>
                    <li>
                      <strong>Tipografia: </strong>
                      Ho adottato un font moderno e leggibile:
                      <strong className="text-accent"> sans-serif</strong>.
                    </li>
                    <li>
                      <strong>Immagini: </strong>
                      Per le locandine dei media, ho creato immagini
                      personalizzate utilizzando
                      <strong className="text-accent"> Leonardo AI</strong>, per
                      garantire un design unico e specifico.
                    </li>
                  </ul>
                </li>
              </ul>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Screenshoot del Progetto</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4 className="text-accent">Difficoltà principali:</h4>
              <p>
                Questo progetto mi ha messo alla prova su numerosi fronti. Lato{" "}
                <i>backend</i>, inizialmente ho trovato complessa la gestione
                delle funzioni legate all'
                <strong className="text-accent">autenticazione</strong> tramite
                token e all'invio email. Lato <i>frontend</i>, la creazione di
                stati Redux ramificati in tutto il sito ha rappresentato una
                sfida, così come l'implementazione del{" "}
                <strong className="text-accent">localStorage</strong> per
                ottimizzare il flusso dati.
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">Risultati e conclusioni:</h4>
              <ul>
                <li>
                  Funzionalità di registrazione e accesso utente, con conferma
                  tramite email.
                </li>
                <li>
                  Gestione del cambio password e dell'immagine del profilo
                  utente.
                </li>
                <li>
                  Possibilità per gli utenti di aggiungere e rimuovere media dai
                  preferiti.
                </li>
                <li>
                  Caricamento e gestione dei film sulla piattaforma, con opzioni
                  di modifica ed eliminazione.
                </li>
                <li>
                  Ottimizzazione delle chiamate API tramite Redux e utilizzo del{" "}
                  <strong className="text-accent">localStorage</strong>.
                </li>
                <li>
                  Integrazione di funzionalità avanzate di <i>backend</i>,
                  inclusa l'autenticazione basata su token.
                </li>
                <li>
                  Creazione di un design moderno ispirato alla
                  piattaforma <strong className="text-accent">Netflix</strong>.
                </li>
                <li>
  Implementazione di un <strong className="text-accent">algoritmo</strong>  per filtrare i media simili.
</li>
<li>
  Implementazione di tre tipi di risposta nel motore di ricerca: 
  <i> nessun media trovato</i>, <i>un media trovato</i>, <i>più di un media trovato</i>.
</li>
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
