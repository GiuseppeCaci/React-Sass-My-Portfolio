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
      <div className=" flex-center-column pm-title">
          <h2>Portfolio</h2>
          <p>Collaborazioni e progetti</p>
        </div>


        <div className="flex-center-row">

          <div className={`portfolio-curriculum flex-center-column ${theme} secondary`}>
            <h4>Collaborazioni</h4>
            <div>
              <p>
                <Link to="/collaborazione-01">Publicis Sapient.</Link>
              </p>
              <p>2023</p>
              <span className="line-portfolio"></span>
            </div>
          </div>

        </div>

        
      </div>
    </>
  );
};

export default Portfolio;
