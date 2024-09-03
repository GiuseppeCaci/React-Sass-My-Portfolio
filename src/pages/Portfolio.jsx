import React from "react";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation("portfolio");

  return (
    <>
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
      </div>
    </>
  );
};

export default Portfolio;
