import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";

const CollaborazionePS = () => {
  const { theme } = useContext(ThemeContext);
  const strumenti = [
    "AEM",
    "JIRA",
    "ADOBE",
    "FIGMA",
    "VISUAL STUDIO",
    "HTML",
    "JSON",
    "MICROSOFT POWER POINT",
  ];
  return (
    <>
      <div className={`main-base ${theme} primary`}>
        <div className="container-collaborazione-title">
          <h2>Pubblic Sapient</h2>
          <p>Dal 02/2023 al 03/2024</p>
        </div>
        <div className="base-container-normal">
          <div className="main-container-secondary--large">
            <h2>Le mie mansioni</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              ullam nemo at a ducimus voluptate rerum vel? Veritatis nesciunt
              voluptatum, atque tempora beatae, repellendus voluptate quibusdam
              saepe doloremque rem sapiente. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dolor, ullam nemo at a ducimus
              voluptate rerum vel? Veritatis nesciunt voluptatum, atque tempora
              beatae, repellendus voluptate quibusdam saepe doloremque rem
              sapiente.
            </p>
          </div>
        </div>
        <div className="base-container-normal">
          <div className={`container-collaborazione ${theme} secondary`}>
            <h3>Strumenti usati</h3>
            <div className="container-collaborazione-box">
              {strumenti.map((element) => (
                <div className="collaborazione-card line-card">
                  <p>{element}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="base-container-normal">
          <div className="main-container-secondary--large">
            <h2>Skills sviluppate</h2>
            <p>
              Ho studiato all’università di Palermo alla facoltà del Dams
              (discipline delle arti, musica e spettacolo), dove, oltre ad aver
              studiato cinema, ho studiato design e programmazione.ho
              frequentato diversi corsi di front end developer e ancora oggi
              studio per affinare le mie conoscenze.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollaborazionePS;
