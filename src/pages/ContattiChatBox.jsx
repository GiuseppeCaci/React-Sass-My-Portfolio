import React, { useEffect, useState, useRef, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeContext from "../store/theme/ThemeContext";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";

const ContattiChatBox = () => {
  const isVisible = useVisibilityAndScrollReset();
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([
    { sender: "box", text: [""], textButtons: [], buttons: [] },
  ]);
  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento

  const predefinedQuestions = [
    "Hai un portfolio?",
    "Mi piacerebbe sapere di più su di te!",
    "Come posso contattarti?",
    "Perché dovresti scegliere di lavorare con Giuseppe?",
    "Volevo solo Salutare!"
  ];

  const citazioni = [
    "Ci serve una barca piu grande!🦈",
    "Yippee-ki-yay!!💥",
    "Nella giungla dovrai stare finché un cinque o un otto non compare.🌴",
    "LEGGEN - non ti muovere - DARIO!⚔️",
    "Questa sì che è una bella montagna di m**!💩",
    "Peperonata? Alle otto del mattino? A mezzogiorno, topi morti?🐀",
    "Guarda oltre ciò che vedi!🦁"
  ];

  function getRandomQuote(citazioni) {
    const randomIndex = Math.floor(Math.random() * citazioni.length);
    return citazioni[randomIndex];
}

  const messagesEndRef = useRef(null);

  const handleUseMessage = (question) => {
    const useMessage = {
      sender: "user",
      text: [question],
      textButtons: [],
      buttons: [],
    };
    setMessages((prevMessage) => [...prevMessage, useMessage]);

    // Mostra messaggio di caricamento
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: ["💬..."], buttons: [], textButtons: [] },
    ]);
    setIsLoading(true); // Inizia il caricamento

    setTimeout(() => {
      const botMessage = generateBotResponse(question);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Rimuovi messaggio di caricamento
        botMessage,
      ]);
      setIsLoading(false); // Fine caricamento
    }, 1000);
  };

  const generateBotResponse = (question) => {
    let response;
    let buttons = [];
    let textButtonQuestion = [];
    switch (question) {
      case "Fammi sentire una citazione cinematografica!":
        case "Un'altra!":
            const citazione = getRandomQuote(citazioni);
            response = [citazione];
            textButtonQuestion = ["Un'altra!", "Torna alle domande"];
            break;
            case "Dimmi la tua preferita!":
              response = ["September dei Earth, Wind & Fire...Ma solo quando tutto nella programmazione è andato per il verso giusto! 🎉"];
              break;
              case "Non ascolto musica Funky..":
              response = ["...🤔"];
              break;
            case "Come si crea una Web App?":
              response = ["Conoscenze di programmazione, passione, dedizione, tante tazze di caffè e un po' di musica funky! 🕺"];
              textButtonQuestion = ["Non ascolto musica Funky..","Dimmi la tua preferita!"];
              break;
      case "Volevo solo Salutare!":
        response = ["Ciao! Grazie per aver visitato il sito, è stato un piacere!👋😊"];
        textButtonQuestion = ["Fammi sentire una citazione cinematografica!","Come si crea una Web App?"];
        break;
      case "Perché dovresti scegliere di lavorare con Giuseppe?":
        response = ["Con anni di esperienza nel coding, metto passione e dedizione in ogni progetto. E se la conoscenza non basta, c'è sempre la determinazione di imparare e trovare la soluzione giusta!💡"];
        break;
      case "Hai un portfolio?":
        response = ["Certamente! Dai pure un'occhiata al mio portfolio! 💻"];
        buttons = ["Vai al Portfolio", "/portfolio"];
        textButtonQuestion = ["Dettagli sul Portfolio"];
        break;
      case "Dettagli sul Portfolio":
        response = [
          "Il Portfolio è organizzato con il seguente ordine:",
          "• <strong>Collaborazioni</strong> <i>(esperienze lavorative nel settore)</i>",
          "• <strong>Siti Web</strong> <i>(realizzati e attivi online)</i>",
          "• <strong>Progetti</strong> <i>(sperimentali e pubblicati su GitHub)</i>",
          "Ogni Lavoro include una scheda dettagliata, in cui analizzo vari aspetti, dalle sfide tecniche alle soluzioni adottate, fino ai risultati ottenuti.📂",
        ];
        break;

      case "Mi piacerebbe sapere di più su di te!":
        response = [
          "Per saperne di più su di me, puoi visitare la mia pagina About o leggere la mia storia nel mio blog!📖",
        ];
        buttons = ["Vai ad About", "/about"];
        textButtonQuestion = ["Hai un Blog?"];
        break;

      case "Hai un Blog?":
        response = [
          "Assolutamente! Ma non è un blog qualsiasi. Oltre a condividere articoli e esercizi di codice, racconto anche storie d'avventura mescolate con la programmazione!😎",
        ];
        buttons = ["Vai al mio Blog", "https://adventurescode.com/"];
        break;

      case "Come posso contattarti?":
        response = ["Puoi inviarmi un'email, ti risponderò entro la giornata! 📧"];
        buttons = ["Mandami un email", `mailto:${import.meta.env.VITE_EMAIL}`];
        break;

      case "Torna alle domande":
        response = ["Clicca su una delle seguenti domande per iniziare:"];
        textButtonQuestion = predefinedQuestions;
        break;

      default:
        response = ["Non ho capito, puoi ripetere?"];
    }
    return {
      sender: "bot",
      text: response,
      textButtons: textButtonQuestion,
      buttons: buttons,
    };
  };

  useEffect(() => {
    if (messages.length > 1) {
      const debounceScroll = setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(debounceScroll);
    }
  }, [messages]);

  const Message = memo(({ msg, theme, handleUseMessage }) => (
    <div
      style={{
        textAlign: msg.sender === "user" ? "right" : "left",
      }}
      className={`${theme} ${
        msg.sender === "user" ? "primary chat-user" : "secondary chat-pc"
      }`}
    >
      {msg.text.map((text, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
      ))}

      <div className="button-chat">
        {msg.buttons.length > 0 && (
          <Link to={`${msg.buttons[1]}`}>
            <button>{msg.buttons[0]}</button>
          </Link>
        )}
        {msg.textButtons.length > 0 &&
          msg.textButtons.map((questionExtra, index) => (
            <button key={index} onClick={() => handleUseMessage(questionExtra)}>
              {questionExtra}
            </button>
          ))}
        {msg.textButtons.length === 0 && msg.sender === "bot" && !isLoading && (
          <button onClick={() => handleUseMessage("Torna alle domande")}>
            indietro
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <div
      className={`main-base chatBox-base ${theme} primary container-invisible ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className={`chatBox-messages`}>
        <h3>Chat Assistant</h3>
        <p> Salve!👋 </p>
        <p>
          {" "}
          Sono un chatbot creato da Giuseppe per rispondere alle tue domande!{" "}
        </p>
        <p> Come posso esserti utile?</p>
        {predefinedQuestions.map((element, index) => (
          <button key={index} onClick={() => handleUseMessage(element)}>
            {element}
          </button>
        ))}
      </div>

      <div className="chatBox-sender">
        {messages
          .filter((msg) => msg.text.some((text) => text.trim() !== ""))
          .map((msg, index) => (
            <Message
              key={index}
              msg={msg}
              theme={theme}
              handleUseMessage={handleUseMessage}
            />
          ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ContattiChatBox;
