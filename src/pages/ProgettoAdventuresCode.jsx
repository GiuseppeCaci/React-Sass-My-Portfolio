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
                <LightbulbIcon fontSize="small" /> Tipo di progetto
              </h5>
              <p>Blog, Storytelling </p>
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
                L'idea di fondo di questo sito nasce da una domanda: <br />
                <i>
                  {" "}
                  Cosa succede se mescolo la programmazione ai{" "}
                  <span className="text-accent"> racconti d'avventura?</span>
                </i>
              </p>
            </div>
              <img
                src="/assets/generic/adventures-code-01.png"
                className="img-project"
              ></img>
                <div className="article-base flex-left-column">
              <p>
                L'atmosfera in stile <i>Indiana Jones</i> si combina
                perfettamente con gli argomenti logici e spesso enigmatici della
                programmazione. Aggiungi un blog dedicato al coding, una sezione{" "}
                <strong className="text-accent">Note</strong> dove raccolgo i
                miei pensieri, una raccolta di esercizi di programmazione, e un
                tocco di <strong>flat design</strong> come sfondo, ed ecco a voi
                <strong className="text-accent"> Adventures Code</strong>.
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
                  <strong>Studio preliminare: </strong>
                  Ho approfondito le mie conoscenze su{" "}
                  <strong className="text-accent">WordPress</strong> e il plugin{" "}
                  <strong className="text-accent">Elementor</strong>, in quanto
                  non avevo molta sicurezza degli strumenti da usare.
                </li>
                <li>
                  <strong>Sviluppo organizzativo: </strong>
                  Ho avviato un nuovo progetto{" "}
                  <strong className="text-accent">WordPress</strong>,
                  realizzando il design preliminare con{" "}
                  <strong className="text-accent">Figma</strong> e definendo
                  l'alberatura delle pagine per garantire una navigazione
                  intuitiva.
                </li>
                <li>
                  <strong>Design visivo: </strong>
                  <ul>
                    <li>
                      Palette di colori: ho usato il{" "}
                      <strong className="text-accent">verde</strong> utilizzato
                      nel mio portfolio, per accentuare elementi chiave. Per il
                      background, ho scelto un{" "}
                      <strong className="text-accent">bianco tenue</strong>,
                      mentre il <strong className="text-accent">nero</strong>{" "}
                      per i menu.
                    </li>
                    <li>
                      Tipografia: Ho adottato il font{" "}
                      <strong className="text-accent">Roboto Flex</strong> per
                      la sua versatilità e modernità, accompagnato da caratteri{" "}
                      <strong className="text-accent">sans-serif</strong>, in
                      linea con il tono del sito.
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
                Ho studiato la <strong className="text-accent">SEO</strong> per
                la prima volta, imparando come ottimizzare il contenuto per i
                motori di ricerca, e ho preso confidenza con le illustrazioni su
                <strong> Figma</strong>, migliorando le mie competenze nel
                design grafico e nella creazione di elementi visivi
                accattivanti.
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4 className="text-accent">Risultati e conclusioni:</h4>
              <p>
                Un blog e sito di scrittura alternativo, con un design fresco e
                moderno, che offre un'esperienza utente coinvolgente e
                visivamente piacevole, facilmente navigabile e ben ottimizzato
                per il web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoAdventuresCode;
