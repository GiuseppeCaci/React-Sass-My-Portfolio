import React from "react";
import { useTranslation } from 'react-i18next';

const Home = () => {
const {t} = useTranslation("home");

  return (
    <>
      <div className="content-wrappet">
        <div className="container-hero">
          <h3>{t("title")}</h3>
        </div>
        <div className="container-project">
          <div className="container-project-title">
            <h2>i miei ultimi progetti</h2>
          </div>
          <div className="container-project-box">
            <div>progetto1</div>
            <div>progetto2</div>
            <div>progetto3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
