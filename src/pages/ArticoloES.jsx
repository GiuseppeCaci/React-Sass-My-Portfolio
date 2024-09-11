import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const ArticoloES = () => {
  const { t } = useTranslation("blog");
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`base-container-article ${theme} primary`}>
        <div className="container-article-title">
          <h2>La programmazione</h2>
          <p>5 minuti di lettura</p>
        </div>
        <div className="container-article">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="foto-coding"
          ></img>
          <h4>La programmazione</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eius qui dicta itaque minus odit maiores aut dolore similique a?
            Eligendi eum laudantium iusto voluptates maxime quas itaque ad
            exercitationem repellat iste Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur, eius qui dicta itaque minus odit maiores
            aut dolore similique a? Eligendi eum laudantium iusto voluptates
            maxime quas itaque ad exercitationem repellat iste
          </p>
        </div>
        <div className="container-article">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="foto-coding"
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eius qui dicta itaque minus odit maiores aut dolore similique a?
            Eligendi eum laudantium iusto voluptates maxime quas itaque ad
            exercitationem repellat iste Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur, eius qui dicta itaque minus odit maiores
            aut dolore similique a? Eligendi eum laudantium iusto voluptates
            maxime quas itaque ad exercitationem repellat iste
          </p>
        </div>
        <div className="container-article">
            <h4>Links</h4>
          <ul>
            <li><a href="">Link alla pagina esterna</a></li>
            <li><a href="">Link alla pagina esterna</a></li>
            <li><a href="">Link alla pagina esterna</a></li>
            <li><a href="">Link alla pagina esterna</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticoloES;
