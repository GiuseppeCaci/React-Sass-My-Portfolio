import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const Home = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Home | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

  //transizione scesa div al montaggio
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //resetta lo scroll a Y0 al montaggio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div
          className={`container-base flex-center-column container-invisible ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="container-hero">
            <h5 className="text-accent">CIAO! SONO GIUSEPPE</h5>
            <h2>sono un Web Developer</h2>
            <h5>
              più precisamente un front-end developer. <br /> mi occupo di
              progettare, creare e gestire web app.
            </h5>
          </div>

          <div className="container-project">
            <div className="project-title">
              <h2>Ultimi Progetti</h2>
            </div>
            <div className="projects-grid">
              <Link className="link-project" to="/portfolio/progetto-01">
                <div className="project-box">
                  <h3>Progetto Portfolio</h3>
                  <p>
                    {" "}
                    giuseppecaci.com è il mio portfolio e biglietto da visita
                    digitale, un archivio di progetti, collaborazioni e idee. In
                    futuro, ospiterà anche un blog.{" "}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  <div className="container-base flex-left-column">
            <div className="project-title flex-left-column">
              <h2>Utimi progetti</h2>
            </div>
            <div className="container-project"></div>
          </div> */}
    </>
  );
};

export default Home;
