import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");
  const { theme } = useContext(ThemeContext);

  return (
    <>
    <div className="container-wrapper-large">
      <div className={`container-portfolio-title ${theme} primary`}>
        <h2>Portolio</h2>
        <p>Collaborazioni e progetti</p>
      </div>
      <div className={`base-container-normal ${theme} primary`}>
        <div className={`container-portfolio-curriculum ${theme} secondary`}>
          <h4>Collaborazioni</h4>
          <div>
            <p><Link to="/collaborazione-01">Lorem, ipsum dolor.</Link></p>
            <p>date</p>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`container-wrappet ${theme} primary`}> 
      </div>
      </div>
      {/*
      <div className="content-wrappet-doubleTop">
      <div className="container-title">
      <h3>{t("title")}</h3>
        </div>
        <div className="container-portfolio-curriculum">
          <h3>cronologia lavorativa</h3>
          <div>
            <p>Lorem, ipsum dolor.</p>
            <p>date</p>
            <span></span>
          </div>
          <div>
            <p>Lorem, ipsum dolor.</p>
            <p>date</p>
            <span></span>
          </div>
          <div>
            <p>Lorem, ipsum dolor.</p>
            <p>date</p>
            <span></span>
          </div>
          <div>
            <p>Lorem, ipsum dolor.</p>
            <p>date</p>
            <span></span>
          </div>
        </div>
        <div className="container-portfolio-projects">
            <h2>dai un occhiata ai miei progetti</h2>
          <div className="container-portfolio-grid-projects">
            <div>
              <p>progetto1</p>
            </div>
            <div>
              <p>progetto1</p>
            </div>
            <div>
              <p>progetto1</p>
            </div>
            <div>
              <p>progetto1</p>
            </div>
            <div>
              <p>progetto1</p>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default Portfolio;
