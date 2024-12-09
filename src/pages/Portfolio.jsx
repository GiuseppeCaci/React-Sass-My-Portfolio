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
        <div className={`container-base flex-center-column container-invisible ${isVisible ? 'visible' : ''}`}>
            <div className="container-project">
            <h3>Collaborazioni</h3>
            <div className="projects-grid">
            <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-publicis.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/collaborazione-01"
              >
              </Link>
            </div>
          </div>
          <div className="container-project">
            <h3>Siti Web</h3>
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
              </Link>
            </div>
            
          </div>
          <div className="container-project last-container">
            <h3>Progetti Realizzati</h3>
            <div className="projects-grid">
              <Link
                className="link-project project-box"
                style={{
                  backgroundImage:
                    "url('/assets/generic/bg-streaming-project.png')",
                  color: "#FAFAFA",
                }}
                to="/portfolio/progetto-04"
              >
              </Link>
            </div>
          </div>
          
          </div>
        </div>
    </>
  );
};

export default Portfolio;
