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
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloudIcon from '@mui/icons-material/Cloud';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkIcon from '@mui/icons-material/Link';

const ProgettoPortfolio = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Progetto Portfolio | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

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
                <div style={{ backgroundColor: "#193832" }}></div>
                <div style={{ backgroundColor: "#2a6355" }}></div>
                <div style={{ backgroundColor: "#f0f5f5" }}></div>
                <div style={{ backgroundColor: "#4fbb64" }}></div>
              </div>
              <h5 className="text-accent"> <LightbulbIcon fontSize="small"/> Tipo di progetto</h5>
              <p>Portfolio personale</p>
              <h5 className="text-accent"> <AccessTimeIcon fontSize="small"/>Pubblicato il </h5>
              <p>18/09/2024</p>
              <h5 className="text-accent"> <CloudIcon fontSize="small"/>Nelle piattaforme</h5>
              <p>Netlify, GitHub</p>
              <h5 className="text-accent"> <LinkIcon fontSize="small"/>Vai al sito</h5>
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
                Questo sito è il mio{" "}
                <strong>biglietto da visita digitale</strong>, una
                rappresentazione del mio{" "}
                <strong>percorso di crescita professionale</strong> come
                sviluppatore, ma anche una raccolta delle mie{" "}
                <span className="text-accent">creazioni</span> e
                <span className="text-accent"> progetti</span> nel campo del{" "}
                <strong>web development</strong>. Il sito ha l'obiettivo
                primario di mostrare a potenziali{" "}
                <strong>datori di lavoro</strong>, <strong>clienti</strong> e{" "}
                <strong>colleghi</strong> le mie{" "}
                <span className="text-accent">abilità</span> nel campo dello
                sviluppo. In secondo luogo, funge da{" "}
                <span className="text-accent">archivio</span> delle mie{" "}
                <span className="text-accent">collaborazioni</span>, siti e
                progetti.
              </p>
            </div>
            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>Strumenti usati</h4>
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
              <h4>Lo Sviluppo</h4>
              <h5>RICERCHE PRELIMINARI</h5>
              <p>
                Ho iniziato il mio progetto portfolio esplorando le strutture
                standard per siti simili, esaminando template di CMS,
                classifiche e esempi. Questo mi ha aiutato a definire l'idea del
                sito. Mi sono poi posto alcune domande chiave:{" "}
                <strong>Che servizi offrirà il mio sito?</strong> <br />
                <strong>Sarà minimalista o ricco di animazioni?</strong> Dopo
                aver definito funzioni e design, ho iniziato a progettare.
              </p>
              <h5>SVILUPPO TECNICO</h5>
              <p>
                Il sito non richiedeva un{" "}
                <span className="text-accent">back-end</span>, quindi mi sono
                concentrato sullo sviluppo <strong>front-end</strong>. Ho
                definito la <span className="text-accent">struttura</span> e
                creato componenti riutilizzabili.
              </p>
              <p>
                Utilizzando <strong>React</strong> e{" "}
                <strong>react-router-dom</strong> per la gestione delle pagine,
                ho implementato un cambio tema tramite{" "}
                <strong>Context API</strong> e memorizzato il tema nel{" "}
                <span className="text-accent">LocalStorage</span>.
              </p>
              <p>
                Il focus finale è stato espandere la logica del{" "}
                <span className="text-accent">layout</span> e sviluppare
                componenti scalabili. Ecco un esempio di codice per un
                componente di evidenziazione della sintassi:
              </p>
              <div>
                <CodeSnippet
                  code={`   <SyntaxHighlighter language={language} style={bgColor === "dark-mode"? atomDark : solarizedlight}>
              {code}
            </SyntaxHighlighter>
`}
                  language="javascript"
                  bgColor={theme}
                />
              </div>
              <p>
                Il componente <strong>CodeSnippet</strong> usa il modulo{" "}
                <strong>react-syntax-highlighter</strong> per evidenziare la
                sintassi e integra il <strong>Context API</strong> per cambiare
                tema dinamicamente.
              </p>
              <div>
                <CodeSnippet
                  code={`<CodeSnippet code={code} language="javascript" bgColor={theme}/>`}
                  language="javascript"
                  bgColor={theme}
                />
              </div>
              <h5>DESIGN VISIVO</h5>
              <p>
                Il design del sito è stato pensato per essere{" "}
                <strong>minimalista</strong> e <strong>professionale</strong>,
                con un focus sul <strong>contenuto del portfolio</strong>. Ho
                scelto un approccio <span className="text-accent">sobrio</span>,
                limitando le animazioni e riservandole per progetti secondari.
              </p>
              <p>
                Per la <strong>palette dei colori</strong>, ho scelto sfumature
                di <span className="text-accent">verde scuro</span> per la
                modalità scura, e un mix di{" "}
                <span className="text-accent">grigio chiaro</span> e{" "}
                <span className="text-accent">verde</span> per quella chiara.
                Questo bilanciamento crea un'atmosfera{" "}
                <span className="text-accent">accogliente</span> e{" "}
                <strong>professionale</strong>.
              </p>
              <p>
                Per la <strong>tipografia</strong>, ho scelto{" "}
                <strong>Poppins</strong> e <strong>Inter</strong>, per un look
                moderno che si abbina ai colori del sito. Ho inoltre integrato{" "}
                <span className="text-accent">animazioni sottili</span> per
                migliorare l'interazione senza distrarre l'utente.
              </p>

              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Progetti Figma</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4>Difficoltà e Soluzioni</h4>
              <p>
                La principale difficoltà è stata la{" "}
                <span className="text-accent">ricerca</span> e la{" "}
                <span className="text-accent">scelta</span> dei{" "}
                <strong>colori finali</strong>. Dopo vari tentativi, ho trovato
                l'<span className="text-accent">equilibrio</span> desiderato,
                garantendo un design <strong>minimalista</strong> e{" "}
                <strong>professionale</strong>.
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4>Risultati e Conclusioni</h4>
              <p>
                Il progetto è stato <strong>semplice</strong> dal punto di vista
                funzionale, ma la scelta del <strong>design</strong> e dello{" "}
                <strong>stile finale</strong> è stata fondamentale. Ogni
                dettaglio è stato pensato per riflettere le mie{" "}
                <span className="text-accent">competenze</span> e il mio{" "}
                <span className="text-accent">approccio professionale</span>.
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

export default ProgettoPortfolio;
