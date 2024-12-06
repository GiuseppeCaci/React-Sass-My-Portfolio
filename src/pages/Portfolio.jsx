import React from "react";
import { useContext, useEffect } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";

const Portfolio = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Portfolio | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);


  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

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
              <p>2023/24</p>
              <span className="line-portfolio"></span>
            </div>
          </div>
        </div>
        <div className={`container-base flex-center-column container-invisible ${isVisible ? 'visible' : ''}`}>
        <div className="container-project">
            <div className="flex-center-column portfolio-pm-title">
              <h3>Progetti</h3>
            </div>
            <div className="container-project">
            <div className="projects-grid">
              <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-seica-boat.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/progetto-05"
              >
                <div>
                </div>
              </Link>
              <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-streaming-project.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/progetto-04"
              >
                <div>
                </div>
              </Link>
              <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-salvatore-panasci.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/progetto-03"
              >
                <div>
                </div>
              </Link>
              <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-adventurescode.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/progetto-02"
              >
                <div>
                </div>
              </Link>
              <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-giuseppe-caci.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/progetto-01"
              >
                <div></div>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
