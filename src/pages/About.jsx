import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const About = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "About | Giuseppe Caci";
  }, []);
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const skills = [
    "Html",
    "Css",
    "Bootstrap",
    "Sass",
    "Javascript",
    "Assoli di Chitarra",
    "Node.js",
    "React",
    "Git",
    "Restfulapi",
    "Mongodb",
    "Redux",
    "Responsive Design",
    "Github",
    "Tailwind",
    "Aem",
    "Figma",
  ];

  //transizione scesa div al montaggio
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //resetta lo scroll a Y0 al montaggio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div
          className={`container-base flex-center-column container-invisible ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="flex-center-column pm-title">
            <h1>About</h1>
          </div>
          <div className="about-bio pm-hero">
            <img src="/assets/generic/img-about.jpg"></img>
            <div className="about-bio-text">
              <p>
                Ciao! Sono <strong>Giuseppe</strong> e sono uno sviluppatore{" "}
                <strong>front-end</strong> con competenze{" "}
                <strong>full stack junior</strong> e{" "}
                <strong>web designer</strong>. Amo trasformare idee innovative
                in realtà digitali, mescolando{" "}
                <strong className="text-accent">creatività</strong> e
                <strong className="text-accent"> logica </strong> attraverso
                linguaggi di programmazione e markup. Continuo ad espandere le
                mie competenze esplorando altri rami dello sviluppo, come quello
                del <strong>back-end</strong>, dei <strong>CMS</strong> e del{" "}
                <strong>design</strong>.
              </p>
              <p>
                Mi sono laureato alla facoltà del <strong>DAMS</strong>, ho
                frequentato diversi corsi di{" "}
                <strong className="text-accent">programmazione</strong> e{" "}
                <strong className="text-accent">design</strong>, continuando poi
                a studiare per conto mio. Infine, ho lavorato come{" "}
                <strong>Interactive Developer</strong> per{" "}
                <strong className="text-accent">Stellantis</strong>.
              </p>
              <p>
                Il mio sogno è sviluppare un’app che possa migliorare la vita
                delle persone e avere un impatto positivo sul mondo.
              </p>
              <div className={`citazione ${theme} secondary`}>
                <p>
                  <em>
                    “Strade? Dove stiamo andando, non c’è bisogno di strade!”
                  </em>
                </p>
                <p>
                  - <strong>Ritorno al futuro</strong>
                </p>
              </div>
              <p>
                Nel mio tempo libero, mi piace suonare la{" "}
                <strong className="text-accent"> chitarra </strong> e dedicarmi
                all'attività fisica in palestra. Adoro anche scattare foto
                vintage con la mia{" "}
                <strong className="text-accent">Polaroid</strong>. Sono un fan
                della musica <strong>rock</strong> e amo il cinema degli{" "}
                <strong className="text-accent">anni '80</strong>.
              </p>
            </div>
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
              {" "}
              <button>Contattami </button>
            </a>
          </div>
          <div
            className={`paragraph-base size-normal flex-left-column ${theme} secondary`}
          >
            <h3>Design</h3>
            <p>
              L'engine del mio processo di sviluppo si basa su{" "}
              <span className="text-accent">conoscenze solide</span> dei
              linguaggi di programmazione e sul metodo. Utilizzo strumenti come{" "}
              <span className="text-accent">JavaScript</span>,{" "}
              <span className="text-accent">React</span> e altre librerie per
              creare applicazioni interattive e funzionanti. Il mio approccio
              prevede un'attenta analisi delle funzioni da sviluppare e la
              progettazione in <em>pseudo codice</em>, sia delle varie
              funzionalità sia dell'intera struttura del progetto. Mi pongo come
              obiettivo quello di creare{" "}
              <span className="text-accent">funzioni scalabili e semplici</span>
              . Infine, seguo una attenta fase di{" "}
              <span className="text-accent">testing</span> sulle varie funzioni.
              La mia filosofia è che nel coding si può realizzare ciò che si
              vuole, ma solo se si ha <em>metodo</em> e voglia di superare i
              propri limiti.
            </p>

            <h3>Engine</h3>
            <p>
              L'engine del mio processo di sviluppo si basa su{" "}
              <span className="text-accent">conoscenze solide</span> dei
              linguaggi di programmazione e sul metodo. Utilizzo strumenti come{" "}
              <span className="text-accent">Javascript</span>,{" "}
              <span className="text-accent">React</span> e altre librerie per
              creare applicazioni interattive e funzionanti. Il mio approccio
              prevede un'attenta analisi delle funzioni da sviluppare e la
              progettazione in <em>pseudo codice</em>, sia delle varie
              funzionalità sia dell'intera struttura del progetto. Mi pongo come
              obiettivo quello di creare{" "}
              <span className="text-accent">funzioni scalabili e semplici</span>
              . Infine, seguo una attenta fase di{" "}
              <span className="text-accent">testing</span> sulle varie funzioni.
              La mia filosofia è che nel coding si può realizzare ciò che si
              vuole, ma solo se si ha <em>metodo</em> e voglia di superare i
              propri limiti.
            </p>
             <div className="flex-center-column">
            <Link to="/portfolio"><button>Portfolio</button></Link>
            </div>
          </div>
          <div className="paragraph-base size-small flex-center-column">
            <div className="flex-center-column">
              <h3>Competenze tecniche</h3>
              <div className="container-skills flex-center-row">
                {skills.map((element) => (
                  <div
                    key={element}
                    className={`skills-card ${theme} secondary`}
                  >
                    <p>{element}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`paragraph-base size-small flex-left-column ${theme} secondary`}
          >
            <h3>Soft Skills</h3>
            <p>
              Ho ottime capacità di{" "}
              <span className="text-accent">integrazione</span> in lavori di
              squadra e in ambienti multiculturali. Mi piace l'ordine,
              l'organizzazione e avere metodo. Se non porto a termine il lavoro
              giornaliero, il cielo potrebbe crollare. Mi scoraggio
              difficilmente; sono dell'idea che{" "}
              <em>essere negativi è una perdita di tempo</em>, soprattutto nei
              momenti di forte stress lavorativo. Mi piace ampliare le mie
              conoscenze e fare gioco di squadra. Nei momenti di brainstorming e
              progettazione, mi piace prendere appunti, fare schemi e To-Do
              List. Infine, sono convinto che{" "}
              <span className="text-accent">l'educazione</span> e{" "}
              <span className="text-accent">l'empatia</span> siano tasselli
              fondamentali. Un sorriso o un gesto di gentilezza possono cambiare
              l'esito della giornata.
            </p>
            <div className="flex-center-column">
              <a
                href={import.meta.env.VITE_CV_URL}
                download="curriculum-CACI.pdf"
              >
                <button>Curriculum in PDF</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
