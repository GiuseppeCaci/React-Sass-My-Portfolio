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
          <div className={`main-base ${theme} primary`}>
      <div className="container-portfolio-title">
        <h2>Portolio</h2>
        <p>Collaborazioni e progetti</p>
      </div>
      <div className="base-container-normal">
        <div className={`container-portfolio-curriculum ${theme} secondary`}>
          <h4>Collaborazioni</h4>
          <div>
            <p><Link to="/collaborazione-01">Lorem, ipsum dolor.</Link></p>
            <p>date</p>
            <span></span>
          </div>
        </div>
      </div>
      </div>
  
    </>
  );
};

export default Portfolio;
