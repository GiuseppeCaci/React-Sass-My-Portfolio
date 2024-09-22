import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const Portfolio = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Portfolio | Giuseppe Caci";
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
      <div className={`main-base ${theme} primary`}>
        <div className={`flex-center-column pm-title container-invisible ${isVisible ? 'visible' : ''}`}>
          <h2>Portfolio</h2>
          <p>Collaborazioni e progetti</p>
        </div>
        <div className={`flex-center-row container-invisible ${isVisible ? 'visible' : ''}`}>
          <div
            className={`portfolio-curriculum flex-center-column ${theme} secondary`}
          >
            <h4>Collaborazioni</h4>
            <div>
              <p>
                <Link to="/portfolio/collaborazione-01">Publicis Sapient.</Link>
              </p>
              <p>2023</p>
              <span className="line-portfolio"></span>
            </div>
          </div>
        </div>
        <div className={`container-base flex-center-column container-invisible ${isVisible ? 'visible' : ''}`}>
        <div className="container-project">
            <div className="flex-center-column pm-title">
              <h3>Progetti</h3>
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
    </>
  );
};

export default Portfolio;
