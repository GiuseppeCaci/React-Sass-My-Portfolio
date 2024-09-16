import React from "react";
import { useContext, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const CollaborazionePS = () => {
  const { theme } = useContext(ThemeContext);
  const strumenti = [
    "Aem",
    "Jira",
    "Adobe",
    "Figma",
    "Visual Studio",
    "Html",
    "Json",
    "Microsoft Power Point",
  ];

  return (
    <>
      <div className={`main-base ${theme} primary`}>
        <div className="flex-center-column">
          <div className="size-large">
            <div className="flex-center-column pm-title">
              <h2>Pubblic Sapient</h2>
              <p>Dal 02/2023 al 03/2024</p>
            </div>

            <div className="article-base flex-left-column">
              <h4>Le mie mansioni</h4>
              <p>
                Assunto da Publicis Sapient (azienda globale specializzata nella
                consulenza e nei servizi digitali), sono stato assegnato al
                cliente Stellantis come Junior Interactive Developer. In questo
                ruolo mi sono occupato di sviluppare, monitorare e mantenere
                diverse pagine web e servizi correlati, collaborando con vari
                team su progetti importanti.
              </p>
              <p>
                Per comprendere appieno il mio contributo, è utile spiegare il
                contesto: <br />
                Stellantis gestisce i siti web di alcuni dei più noti marchi
                automobilistici, tra cui Alfa Romeo, Abarth, Jeep, Fiat e
                Citroën, suddivisi per molti mercati europei. Ogni marchio aveva
                un sito per ogni paese, che differiva principalmente per lingua,
                contenuti e dominio, mantenendo però una struttura simile.
                <br />I team di sviluppo, suddivisi per marchio, collaboravano
                con i web designer per soddisfare le esigenze specifiche dei
                vari mercati e dei clienti finali.
              </p>
              <p>
                Nel mio team, ci occupavamo della gestione quotidiana delle
                richieste per le varie versioni del sito. Queste richieste,
                gestite tramite ticket sulla piattaforma Jira, includevano
                aggiornamenti mensili, espansione di nuove pagine e la
                manutenzione costante del codice.
              </p>
            </div>

            <div className="article-base flex-left-column">
              <h4>I vari progetti</h4>
              <p>
                Oltre alla gestione quotidiana dei ticket, ho partecipato a
                diversi progetti paralleli all'interno dell'azienda.
              </p>
              <p>
                Uno dei progetti più significativi è stato l'aggiornamento e la
                transizione dei siti web dei marchi Fiat Chrysler/PSA al nuovo
                gruppo Stellantis.
                <br />
                Ho anche contribuito all'espansione dei nuovi siti Fiat, dove,
                oltre a gestire le richieste quotidiane, ho avuto l'opportunità
                di creare alcune delle nuove pagine.
                <br />
                Infine, in alcuni periodi mi sono occupato di formare e seguire
                i nuovi arrivati e i tirocinanti nel processo di inserimento e
                apprendimento del lavoro.
              </p>
            </div>

            <div
              className={`paragraph-base size-small flex-center-column ${theme} secondary`}
            >
              <div className="flex-center-column">
                <h4>Strumenti usati</h4>
                <div className="container-skills flex-center-row">
                  {strumenti.map((element) => (
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
              <h4>Skills sviluppate</h4>
              <p>
                Con questa esperienza, ho avuto l'opportunità di apprendere e
                consolidare le mie capacità di lavorare efficacemente
                all'interno di un team, cooperando con diverse figure aziendali,
                dai designer ai project manager. Ho affinato la mia capacità di
                comunicare con i clienti, comprendere le loro esigenze e fornire
                soluzioni entro le scadenze prefissate.
                <br />
                La collaborazione con team e clienti provenienti da diversi
                paesi mi ha permesso di comprendere meglio le dinamiche del
                lavoro in un contesto globale e multiculturale.
              </p>
              <p>
                I vari progetti a cui ho partecipato mi hanno offerto la
                possibilità di affrontare nuove sfide, mettendomi alla prova e
                superando i miei limiti in termini di problem-solving e gestione
                del tempo. Questo mi ha permesso di sviluppare una forte
                attenzione ai dettagli e una capacità di adattamento alle
                diverse esigenze dei progetti.
                <br />
                Questa esperienza mi ha inoltre permesso di acquisire
                familiarità con la piattaforma AEM, occupandomi della gestione e
                della manutenzione dei siti attraverso la configurazione di vari
                settaggi, la gestione di file JSON e HTML, e la creazione di
                nuove pagine. Ho avuto l'opportunità di approfondire il sistema
                organizzativo di Jira, gestendo quotidianamente i flussi di
                lavoro e la collaborazione tra i vari team. Inoltre, ho
                consolidato la mia conoscenza di strumenti come Figma,
                utilizzato per il design e la prototipazione, e il pacchetto
                Microsoft Office, impiegato quotidianamente per la gestione e
                l’organizzazione dei progetti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollaborazionePS;
