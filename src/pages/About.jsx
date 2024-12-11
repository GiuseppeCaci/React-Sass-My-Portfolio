import React from "react";
import { useContext, useEffect } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";

const About = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "About | Giuseppe Caci";
  }, []);
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const skills = [
    // Front-End
    "Html",
    "Css",
    "Sass",
    "Bootstrap",
    "Tailwind",
    "Responsive Design",
    "Javascript",
    "React",
    "Redux",
  
    // Back-End
    "Node.js",
    "CRUD",
    "RestfulApi",
    "JWT",
  
    // Database
    "MongoDB",
  
    // Design
    "Figma",
    "Adobe",
    "Canvas",
  
    // CMS
    "Wordpress",
    "Elementor",
    "Aem",
  
    // Generale
    "Git",
    "Github",
    "Postman",
    "SEO"
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();


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
            <img src="/assets/generic/img-about.jpg" alt="About"></img>
            <div className="about-bio-text">
              <p>
                Sono <strong className="text-accent">Giuseppe</strong>, sviluppatore <i>front-end</i> con competenze <i>full stack junior</i> e web designer. Amo trasformare idee innovative in realtà digitali, unendo creatività e logica. Continuo ad ampliare le mie conoscenze, esplorando il <i>back-end</i>, i <i>CMS</i> e il design.
              </p>
              <p>
                Mi sono laureato in <strong className="text-accent">DAMS</strong>, ho frequentato corsi di programmazione e design, e lavorato come Interactive Developer per <strong className="text-accent">Stellantis</strong>. Il mio sogno? Creare un’app che migliori la vita delle persone e lasci un impatto positivo sul mondo.
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
                Nel tempo libero suono la <strong>chitarra</strong>, faccio foto vintage con la mia <strong>Polaroid</strong> e mi alleno in palestra. Amo il <strong className="text-accent">rock</strong> e il cinema degli anni '80.
              </p>
            </div>
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
              {" "}
              <button className="button-class-1">Contattami</button>
            </a>
          </div>
          <div
            className={`paragraph-base size-normal flex-left-column ${theme} secondary`}
          >
          <h3>Design</h3>
<p>
  Nel design punto a combinare <strong className="text-accent">estetica</strong> e <strong className="text-accent">funzionalità</strong>, 
  creando interfacce moderne, intuitive e <i>responsive</i>. Utilizzo strumenti come <strong className="text-accent">Figma </strong> 
  per la progettazione visiva e mi affido a principi di <i>usabilità</i> per garantire 
  un’esperienza utente ottimale. Credo che un design ben studiato sia il ponte perfetto tra l’idea e la sua realizzazione tecnica.
</p>

<h3>Engine</h3>
<p>
  Il mio processo di sviluppo si fonda su una solida conoscenza dei <strong className="text-accent">linguaggi di programmazione</strong> e
   su un metodo strutturato. Analizzo le funzioni da sviluppare, le progetto in <i>pseudo codice</i> e seguo una 
   fase di <strong>testing</strong> accurata. L’obiettivo? Creare applicazioni scalabili, interattive e ben 
   funzionanti.
</p>
            <div className="flex-center-column">
              <Link to="/portfolio">
                <button className="button-class-1">Portfolio</button>
              </Link>
            </div>
          </div>
          <div className="paragraph-base size-small flex-center-column">
            <div className="flex-center-column">
              <h3 className="text-accent">Competenze tecniche</h3>
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
              Ho ottime capacità di integrazione in team multiculturali e prediligo un approccio organizzato e metodico al lavoro. Sono resiliente anche sotto stress e credo nell'importanza di mantenere un atteggiamento positivo, trasformando ogni difficoltà in un'opportunità per accrescere le mie conoscenze. Durante brainstorming e progettazione, adoro prendere appunti, creare schemi e <i>To-Do list</i> per ottimizzare il processo. Ritengo che <strong className="text-accent">educazione</strong> ed <strong className="text-accent">empatia</strong> siano fondamentali, perché un gesto di gentilezza può fare la differenza.
            </p>
            <div className="flex-center-column">
              <a
                href={import.meta.env.VITE_CV_URL}
                download="curriculum-CACI.pdf"
              >
                <button className="button-class-1">Curriculum in PDF</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default About;
