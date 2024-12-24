import React, { useEffect, useState, useRef, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeContext from "../store/theme/ThemeContext";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';

const ContattiChatBox = () => {
  const { t } = useTranslation('chatBox');
  const isVisible = useVisibilityAndScrollReset();
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([
    { sender: "box", text: [""], textButtons: [], buttons: [] },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedQuestions = t('predefinedQuestions', { returnObjects: true }); // Ottieni le domande dal file JSON
  const citazioni = t('quotes', { returnObjects: true }); // Ottieni le citazioni dal file JSON

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * citazioni.length);
    return citazioni[randomIndex];
  };

  const messagesEndRef = useRef(null);

  const handleUseMessage = (question) => {
    const useMessage = {
      sender: "user",
      text: [question],
      textButtons: [],
      buttons: [],
    };
    setMessages((prevMessage) => [...prevMessage, useMessage]);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: ['💬...'], buttons: [], textButtons: [] },
    ]);
    setIsLoading(true);

    setTimeout(() => {
      const botMessage = generateBotResponse(question);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        botMessage,
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const generateBotResponse = (question) => {
    let response;
    let buttons = [];
    let textButtonQuestion = [];

    switch (question) {
      case t('responses.quoteRequest.question'):
      case t('responses.anotherQuote.question'):
        const citazione = getRandomQuote();
        response = [citazione];
        textButtonQuestion = [t('responses.anotherQuote.question'), t('messages.buttonBackToQuestions')];
        break;

 
        case t('responses.webAppCreation.question'):
          response = [t('responses.webAppCreation.response')];
          textButtonQuestion = [t('responses.notListenMusicFunky.question'), t('responses.favoriteQuote.question')];
          break;
          case t('responses.notListenMusicFunky.question'):
            response = [t('responses.notListenMusicFunky.response')];
            break;
            case t('responses.favoriteQuote.question'):
              response = [t('responses.favoriteQuote.response')];
              break;

      case t('responses.greet.question'):
        response = [t('responses.greet.response')];
        textButtonQuestion = [t('responses.quoteRequest.question'), t('responses.webAppCreation.question')];
        break;

      case t('responses.chooseGiuseppe.question'):
        response = [t('responses.chooseGiuseppe.response')];
        break;

      case t('responses.portfolio.question'):
        response = [t('responses.portfolio.response')];
        buttons = [t('buttons.GoPortfolio'), "/portfolio"];
        textButtonQuestion = [t('buttons.portfolioDetails')];
        break;

      case t('buttons.portfolioDetails'):
        response = [t('responses.portfolioMoreDetails.response')];
        break;

      case t('responses.aboutMe.question'):
        response = [t('responses.aboutMe.response')];
        buttons = [t('buttons.AboutMe'), "/about"];
        textButtonQuestion = [t('responses.myBlog.question')];
        break;

      case t('responses.myBlog.question'):
        response = [t('responses.myBlog.response')];
        buttons = [t('buttons.myBlog'), "https://adventurescode.com/"];
        break;

      case t('responses.contactMe.question'):
        response = [t('responses.contactMe.response')];
        buttons = [t('buttons.contactMe'), `mailto:${import.meta.env.VITE_EMAIL}`];
        break;

      case t('messages.buttonBackToQuestions'):
        response = [t('messages.chatbotDescription')];
        textButtonQuestion = predefinedQuestions;
        break;

      default:
        response = [t('messages.defaultResponse') || "Non ho capito, puoi ripetere?"];
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
      }, 300);
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
      } ${msg.text[0] === '💬...'? "pc-write" : null}`}
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
          <button onClick={() => handleUseMessage(t('messages.buttonBackToQuestions'))}>
            {t('cta-1')}
          </button>
        )}
      </div>
    </div>
  ));
 
  return (
    <div
      className={`main-base-chat chatBox-base ${theme} primary container-invisible ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className={`chatBox-messages`}>
        <h3>{t('messages.chatbotIntro')}</h3>
        <p>{t('messages.chatbotDescription')}</p>
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
