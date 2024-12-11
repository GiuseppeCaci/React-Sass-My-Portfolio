import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { motion } from "framer-motion";

const ContattiChatBox = () => {
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([
    { sender: "box", text: [""], textButtons: [], buttons: [] },
  ]);

  const predefinedQuestions = [
    "Hai un portfolio?",
    "Mi piacerebbe sapere di più su di te!",
    "Come posso contattarti?",
  ];

  const messagesEndRef = useRef(null); // Riferimento per lo scroll del contenitore

  const handleUseMessage = (question) => {
    const useMessage = {
      sender: "user",
      text: [question],
      textButtons: [],
      buttons: [],
    };
    setMessages((prevMessage) => [...prevMessage, useMessage]);

    const botMessage = generateBotResponse(question);
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (question) => {
    let response;
    let buttons = [];
    let textButtonQuestion = [];
    switch (question) {

      case "Hai un portfolio?":
        response = [
          "Assolutamente! Puoi dare un'occhiata al mio portfolio! 💼",
        ];
        buttons = ["Vai al Portfolio", "/portfolio"];
        textButtonQuestion = ["Dettagli sul Portfolio"];
        break;

      case "Dettagli sul Portfolio":
        response = [
          "Il Portfolio è organizzato con il seguente ordine:",
          "• <strong>Collaborazioni</strong> <i>(esperienze lavorative nel settore)</i>",
          "• <strong>Siti Web</strong> <i>(realizzati e attivi online)</i>",
          "• <strong>Progetti</strong> <i>(sperimentali e pubblicati su GitHub)</i>",
        ];
        break;

      case "Mi piacerebbe sapere di più su di te!":
        response = [
          "Per saperne di più su di me, puoi visitare la mia pagina About o leggere la mia storia nel mio blog!",
        ];
        buttons = ["Vai ad About", "/about"];
        textButtonQuestion = ["Hai un Blog?"];
        break;

      case "Hai un Blog?":
        response = [
          "Esatto! Ho un blog dove condivido storie, consigli ed esercizi sul codice.😎",
        ];
        buttons = ["Vai al mio Blog", "https://adventurescode.com/"];
        break;

      case "Come posso contattarti?":
        response = [
          "Puoi mandarmi un'email, ti risponderò in giornata stessa!",
        ];
        buttons = ["Mandami un email"];
        break;

      case "Torna alle domande":
        response = ["Clicca su una delle seguenti domande per iniziare:"];
        textButtonQuestion = [
          "Hai un portfolio?",
          "Mi piacerebbe sapere di più su di te!",
          "Come posso contattarti?",
        ];
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

  // Funzione per scrollare fino alla fine solo quando ci sono nuovi messaggi
  useEffect(() => {
    if (messages.length > 1) {
      // Scorri solo se ci sono messaggi aggiuntivi
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Ogni volta che i messaggi cambiano

  return (
    <div className={`main-base chatBox-base ${theme} primary`}>
      <div className={`chatBox-messages`}>
      <h3>Chat Assistant</h3>
        <p>
          Ciao! <br />
          Sono una ChatBot creata da Giuseppe per aiutarti!
        </p>
        {predefinedQuestions.map((element, index) => (
          <button key={index} onClick={() => handleUseMessage(element)}>
            {element}
          </button>
        ))}
      </div>

      <div className="chatBox-sender">
  {messages
    .filter((msg) => msg.text.some((text) => text.trim() !== "")) // Filtra solo messaggi non vuoti
    .map((msg, index) => (
      <motion.div
        key={index}
        style={{
          textAlign: msg.sender === "user" ? "right" : "left",
        }}
        className={`${theme} ${
          msg.sender === "user"
            ? "primary chat-user"
            : "secondary chat-pc"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {msg.text.map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
        ))}

        {/* Raggruppa tutti i bottoni in un unico div */}
        <div className="button-chat">
          {/* bottone link */}
          {msg.buttons.length > 0 && (
            <Link to={`${msg.buttons[1]}`}>
              <button>{msg.buttons[0]}</button>
            </Link>
          )}

          {/* bottone domanda */}
          {msg.textButtons.length > 0 &&
            msg.textButtons.map((questionExtra, index) => (
              <button
                key={index}
                onClick={() => handleUseMessage(questionExtra)}
              >
                {questionExtra}
              </button>
            ))}

          {/* Bottone "Indietro" */}
          {msg.textButtons.length === 0 && msg.sender === "bot" && (
            <button onClick={() => handleUseMessage("Torna alle domande")}>
              indietro
            </button>
          )}
        </div>
      </motion.div>
    ))}
  <div ref={messagesEndRef} /> {/* Div che segna la fine dei messaggi */}
</div>
</div>
  );
};

export default ContattiChatBox;
