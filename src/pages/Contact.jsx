import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";

const Contact = () => {
  const { t } = useTranslation("contact");
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className={`container-contact ${theme} primary`}>
        <div className="main-container-secondary--large">
          <h3>Contatti</h3>
          <p>Mandami un Email a <a href="mailto:giuseppe.caci97@libero.it">giuseppe.caci@libero.it</a> 
          <br/> Oppure visita le mie pagine su <a href="">Instagram</a> /<a href="">GitHub</a> /<a href="">Linkedin</a></p>
        </div>
      </div>
    </>
  );
};

export default Contact;
