import React from "react";
import { useContext, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const skills = [
    "Html",
    "Css",
    "Bootstrap",
    "Sass",
    "Javascript",
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

  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div className="container-base flex-center-column">
          <div className="flex-center-row pm-title">
            <h1>About</h1>
          </div>
          <div className="about-bio pm-hero">
            <img src="https://images.unsplash.com/photo-1725109431802-d73f9fda6ba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="about-bio-text">
  <h3>Sono un Web developer, studio a Palermo, Italia</h3>
  <p>
    Mi sono laureato alla facoltà del Dams, dove oltre ad aver studiato vari rami artistici come cinema e musica, 
    ho studiato visual design e ho avuto l'opportunità di conoscere la programmazione. Affascinato dalle logiche di funzionamento
    di <span className="text-accent">Python</span>, decido di approfondire questo mondo. Così, scopro la figura del web developer. 
    Un mondo incredibile in cui <em>la logica dei dati si mescola alla creatività del design</em>. <br/>
    Decido di seguire vari corsi di <span className="text-accent">front-end development</span>. Trovo il mio primo lavoro in una grande azienda di Milano e vengo affidato alla 
    <span className="text-accent"> Stellantis</span>, per la gestione dei siti dei più grandi marchi di auto sul mercato. 
    Qui, ho l'opportunità di mettermi alla prova e di accrescere le mie competenze. <br/>
    Finita questa esperienza, ho continuato e continuo tutt'oggi a studiare per accrescere le mie conoscenze e competenze.
  </p>
</div>
            <a href="mailto:giuseppe.caci97@libero.it"> <button>Contattami </button></a>
          </div>
          <div className={`paragraph-base size-normal flex-center-column ${theme} secondary`}>
  <h3>Design</h3>
  <p>
    Il design è uno degli aspetti più importanti dell'intero processo di sviluppo. Il mio approccio
    prevede fasi di <span className="text-accent">ricerca</span> e <span className="text-accent">test</span>, durante i quali pongo l'obiettivo di trovare la struttura visiva
    più adatta al contesto, che sia pratica, semplice ma soprattutto <em>elegante e visivamente stimolante</em>. <br/>
    Prediligo le <span className="text-accent">palette di colori delicati</span> e quando posso, amo sperimentare combinazioni cromatiche e nuovi stili. <br/>
    Credo che un buon designer debba saper bilanciare <em>precisione e disciplina</em> durante la fase di sviluppo, 
    e la <span className="text-accent">creatività</span> e l'<span className="text-accent">ambizione</span> nella ricerca dello stile e delle combinazioni di colori.
  </p>

  <h3>Engine</h3>
  <p>
    L'engine del mio processo di sviluppo si basa su <span className="text-accent">conoscenze solide</span> dei linguaggi di programmazione e sul metodo. 
    Utilizzo strumenti come <span className="text-accent">Javascript</span>, <span className="text-accent">React</span> e altre librerie per creare applicazioni interattive e funzionanti. 
    Il mio approccio prevede un'attenta analisi delle funzioni da sviluppare e la progettazione in <em>pseudo codice</em>, sia delle varie funzionalità sia dell'intera struttura del progetto.
    Mi pongo come obiettivo quello di creare <span className="text-accent">funzioni scalabili e semplici</span>. Infine, seguo una attenta fase di <span className="text-accent">testing</span> sulle varie funzioni.
    La mia filosofia è che nel coding si può realizzare ciò che si vuole, ma solo se si ha <em>metodo</em> e voglia di superare i propri limiti.
  </p>
</div>
          <div className="paragraph-base size-small flex-center-column">
            <div className="flex-center-column">
              <h3>Competenze tecniche</h3>
              <div className="container-skills flex-center-row">
                {skills.map((element) => (
                  <div key={element} className= {`skills-card ${theme} secondary`}>
                    <p>{element}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`paragraph-base size-small flex-center-column last-container ${theme} secondary`}
          >
           <h3>Soft Skills</h3>
<p>
  Ho ottime capacità di <span className="text-accent">integrazione</span> in lavori di squadra e in ambienti multiculturali.
  Mi piace l'ordine, l'organizzazione e avere metodo. Se non porto a termine il lavoro giornaliero il cielo 
  potrebbe crollare. Mi scoraggio difficilmente; sono dell'idea che <em>essere negativi è una perdita di tempo</em>, 
  soprattutto nei momenti di forte stress lavorativo. Mi piace ampliare le mie conoscenze e fare gioco di squadra. 
  Nei momenti di brainstorming e progettazione mi piace prendere appunti, fare schemi e toDoList.
  Infine, sono convinto che <span className="text-accent">l'educazione</span> e <span className="text-accent">l'empatia</span> siano tasselli fondamentali. 
  Un sorriso o un gesto di gentilezza possono cambiare l'esito della giornata.
</p>
            <a href="/documents/curriculum-prova.pdf" download="curriculum-CACI.pdf"><button>Curriculum in PDF</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
