import React from "react";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const Contact = () => {
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Contatti | Giuseppe Caci';
  }, []);

  return (
    <>
    <div className={`main-base ${theme} primary`}>
      <div className="container-base flex-center-row">
        <div className="paragraph-base size-large flex-center-column pm-super-hero">
        <h3>Contatti</h3>
          <h5>Mandami un Email a <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>giuseppe.caci@libero.it</a> 
          <br/> Oppure visita le mie pagine su <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">GitHub, </a>
          <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">Linkedin</a></h5>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
