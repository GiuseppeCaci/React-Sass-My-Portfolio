import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";

const Contact = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Contatti | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  return (
    <>
      <div
        className={`main-base ${theme} primary container-invisible ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="container-contact">
          <h1>Contatti</h1>
          <ul>
            <li>
              <EmailIcon fontSize="large"/>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                giuseppe.caci97@libero.it{" "}
              </a>{" "}
            </li>
            <li>
            <GitHubIcon fontSize="large"/>
              {" "}
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
                Visita il mio GitHub{" "}
              </a>{" "}
            </li>
            <li>
            <LinkedInIcon fontSize="large"/>
              {" "}
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
                Visita il mio Linkedin{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
