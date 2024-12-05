import React from "react";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import Gallery from "../components/GalleryComponent/Gallery";
import "react-photo-view/dist/react-photo-view.css";
import CodeSnippet from "../components/CodeSnippet";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloudIcon from '@mui/icons-material/Cloud';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkIcon from '@mui/icons-material/Link';


const ProgettoAdventuresCode = () => {
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
                <h2>Adventures Code</h2>
                {/*
                 <div style={{ backgroundColor: "#193832" }}></div>
                <div style={{ backgroundColor: "#2a6355" }}></div>
                <div style={{ backgroundColor: "#f0f5f5" }}></div>
                <div style={{ backgroundColor: "#4fbb64" }}></div>
                */}
              </div>
              <h5 className="text-accent"> <LightbulbIcon fontSize="small"/> Tipo di progetto</h5>
              <p>Blog di scrittura e Programmazione</p>
              <h5 className="text-accent"> <AccessTimeIcon fontSize="small"/>Data pubblicazione</h5>
              <p>05/10/2024</p>
              <h5 className="text-accent"> <CloudIcon fontSize="small"/>Piattaforme</h5>
              <p>SiteGround</p>
              <h5 className="text-accent"> <LinkIcon fontSize="small"/>Visita il sito</h5>
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
              Questo sito è il mio{" "}
  <strong>biglietto da visita digitale</strong>, una rappresentazione del mio{" "}
  <strong>percorso di crescita professionale</strong> come sviluppatore, ma anche una raccolta delle mie{" "}
  <span className="text-accent">creazioni</span> e
  <span className="text-accent"> progetti</span> nel campo del{" "}
  <strong>web development</strong>. Il sito ha l'obiettivo primario di mostrare a potenziali{" "}
  <strong>datori di lavoro</strong>, <strong>clienti</strong> e{" "}
  <strong>colleghi</strong> le mie{" "}
  <span className="text-accent">abilità</span> nel campo dello sviluppo. In secondo luogo, funge da{" "}
  <span className="text-accent">archivio</span> delle mie <span className="text-accent">collaborazioni</span>,
  siti e progetti. Infine, quando terminerò di ampliare questa sezione, il sito diventerà anche un{" "}
  <strong>blog</strong> in cui condividerò <span className="text-accent">idee</span>,
  guide e notizie sul mondo dello sviluppo.
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
                Non essendomi mai cimentato nella creazione di un{" "}
                <strong>progetto portfolio</strong>, la prima cosa fatta è stata
                quella di orientare le mie ricerche sulla comprensione delle{" "}
                <span className="text-accent">strutture standard</span> per
                questo tipo di sito. Con tutto il materiale raccolto (come{" "}
                <span className="text-accent">siti CMS a pagamento</span> che
                offrivano template,{" "}
                <span className="text-accent">classifiche</span> dei migliori
                portfolio di web developer e{" "}
                <span className="text-accent"> esempi di siti </span>) mi sono
                fatto un'idea generale del tipo di sito.
              </p>
              <p>
                Successivamente, mi sono posto alcune domande: <br />
                <strong>Che servizi offrirà il mio sito?</strong> <br />
                <strong>
                  Sarà un sito elegante e minimalista o vivace e ricco di
                  animazioni?
                </strong>{" "}
                <br />
                Dopo essermi fatto un'idea delle funzioni e del design, ho
                cominciato a <strong>progettare</strong> il sito.
              </p>
              <h5>SVILUPPO TECNICO</h5>
              <p>
                Una volta scelti i componenti e le funzionalità, ho avuto una
                chiara comprensione della{" "}
                <strong>complessità del progetto</strong>. Le funzionalità
                scelte per il sito non richiedevano la creazione di un{" "}
                <span className="text-accent">back-end</span>, permettendomi di
                concentrarmi completamente sullo sviluppo{" "}
                <strong>front-end</strong>. Questo ha semplificato notevolmente
                il processo.
              </p>
              <p>
                Ho definito la{" "}
                <span className="text-accent">struttura del sito</span> e uno
                schema delle interazioni tra le funzionalità, cercando al
                contempo di identificare e creare{" "}
                <span className="text-accent">
                  componenti scalabili e riutilizzabili
                </span>
                .
              </p>
              <p>
                Per la realizzazione del sito, ho utilizzato{" "}
                <strong>JavaScript orientato a React</strong>. Inizialmente, ho
                creato le pagine e impostato una struttura di routing con{" "}
                <strong>react-router-dom</strong>. Non ho avuto bisogno di una
                gestione avanzata dello stato, poiché l'unica funzionalità
                richiesta era il{" "}
                <span className="text-accent">cambio tema</span>. Pertanto, ho
                scelto di utilizzare il <strong>Context API</strong> per
                collegare le varie pagine e fornire il tema salvato nel{" "}
                <span className="text-accent">LocalStorage</span>.
              </p>
              <p>
                Dopo aver completato questa fase, mi sono concentrato
                sull'espansione delle logiche relative al{" "}
                <span className="text-accent">layout</span> e sulla ricerca di{" "}
                <span className="text-accent">componenti riutilizzabili</span>,
                per garantire la <strong>scalabilità</strong> del sito.
              </p>
              <p>Come ad esempio questo:</p>
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
                Questo codice definisce un componente chiamato{" "}
                <strong>CodeSnippet</strong>, progettato per visualizzare
                frammenti di codice con{" "}
                <span className="text-accent">
                  evidenziazione della sintassi
                </span>{" "}
                all'interno della pagina. Per realizzare questa funzionalità, ho
                utilizzato il modulo <strong>react-syntax-highlighter</strong>.
                La particolarità di questo componente scalabile è la sua
                integrazione con il <strong>Context API</strong> per il{" "}
                <span className="text-accent">cambio tema</span>, che permette
                di adattare l'aspetto del codice in base alla modalità
                selezionata tramite{" "}
                <span className="text-accent">ternary operator</span>.
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
                Il design visivo del sito è stato progettato per trasmettere
                un'estetica <strong>minimalista</strong> e{" "}
                <strong>professionale</strong>. Ho optato per un approccio{" "}
                <span className="text-accent">sobrio</span>, evitando{" "}
                <span className="text-accent">animazioni eccessive</span>,
                preferendo invece di riservare tali esperimenti per progetti
                secondari. Questo ha permesso di mantenere un focus chiaro sul{" "}
                <strong>contenuto del portfolio</strong>.
              </p>
              <p>
                Per quanto riguarda la <strong>palette dei colori</strong>, ho
                optato per una combinazione che offre un'esperienza coesa e
                armoniosa. Ho scelto due colori dominanti per le modalità:{" "}
                <span className="text-accent">sfumature di verde scuro</span>{" "}
                per la modalità scura, e un mix di{" "}
                <span className="text-accent">grigio chiaro</span> e{" "}
                <span className="text-accent">verde</span> per quella chiara.
                Questi colori primari e secondari sono stati bilanciati tra le
                due modalità, garantendo che ogni elemento si integri
                perfettamente nell'insieme. Questo approccio non solo facilita
                la navigazione, ma valorizza anche i miei lavori, creando
                un'atmosfera <span className="text-accent">accogliente</span> e{" "}
                <strong>professionale</strong>.
              </p>
              <p>
                Per quanto riguarda la <strong>tipografia</strong>, i font{" "}
                <strong>Poppins</strong> e <strong>Inter</strong> sono i
                predominanti. Ho optato per dei font moderni che si abbinino ai
                colori delicati del sito.
              </p>
              <p>
                Infine, ho integrato{" "}
                <span className="text-accent">animazioni sottili</span> che
                migliorano l'interazione senza distrarre l'utente.
              </p>

              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Progetti Figma</h4>
                <Gallery images={figmaProject} />
              </div>
              <h4>Difficoltà e Soluzioni</h4>
              <p>
                Non ho riscontrato particolari <strong>difficoltà</strong> nella
                realizzazione del sito. L'unico aspetto complicato è stata la{" "}
                <span className="text-accent">ricerca</span> e la{" "}
                <span className="text-accent">scelta</span> dei{" "}
                <strong>colori finali</strong>. Dopo vari tentativi e
                campionamenti, sono riuscito a trovare un{" "}
                <span className="text-accent">equilibrio</span> e un mix di
                palette che mi soddisfano pienamente. Questo processo mi ha
                permesso di trovare il <strong>design</strong> e garantire che i
                colori rispecchiassero l'estetica{" "}
                <span className="text-accent">minimalista</span> e{" "}
                <strong>professionale</strong> che desideravo.
              </p>
            </div>
            <div className="article-base flex-left-column">
              <h4>Risultati e Conclusioni</h4>
              <p>
                Il progetto è stato relativamente <strong>semplice</strong>,
                soprattutto per quanto riguarda la parte{" "}
                <span className="text-accent">funzionale</span>. Tuttavia,
                l'importanza del sito ha reso insidiosa la scelta del{" "}
                <strong>design</strong> e dello <strong>stile finale</strong>.
                Ogni dettaglio contava, e ho voluto assicurarmi che il design
                riflettesse le mie{" "}
                <span className="text-accent">competenze</span> e il mio{" "}
                <span className="text-accent">approccio professionale</span>.
                Questo ha richiesto un'attenta riflessione e un equilibrio tra{" "}
                <span className="text-accent">estetica</span> e{" "}
                <strong>funzionalità</strong>.
              </p>
              <div className={`${theme} gallery-background container-gallery`}>
                <h4>Sui vari dispositivi</h4>
                <Gallery images={dispositives} />
              </div>
            </div>
            <div></div>
            <div className="article-base flex-left-column">
              <h4>Futuri Aggiornamenti</h4>
              <p>
                Come futuri <strong>aggiornamenti</strong>, ho in programma di
                ampliare la sezione <strong>blog</strong> per condividere{" "}
                <span className="text-accent">idee</span>,{" "}
                <span className="text-accent">guide</span> e{" "}
                <span className="text-accent">esperienze</span> nel campo dello
                sviluppo. Inoltre, intendo aggiungere la funzionalità di{" "}
                <strong>cambio lingua</strong>, permettendo così a un pubblico
                più ampio di accedere ai contenuti del sito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoAdventuresCode;
