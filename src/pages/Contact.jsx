import React from "react";
import { useContext, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const Contact = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
    <div className={`main-base ${theme} primary`}>
      <div className="container-base flex-center-row">
        <div className="paragraph-base size-large flex-center-column pm-super-hero">
        <h3>Contatti</h3>
          <h5>Mandami un Email a <a href="mailto:giuseppe.caci97@libero.it">giuseppe.caci@libero.it</a> 
          <br/> Oppure visita le mie pagine su <a href="">Instagram</a> <a href="">GitHub</a> <a href="">Linkedin</a></h5>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
