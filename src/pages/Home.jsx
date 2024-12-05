import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";

const Home = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Home | Giuseppe Caci";
  }, []);

  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div
          className={`container-base flex-center-column container-invisible ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="container-hero">
            <h5 className="text-accent">Ciao! Sono Giuseppe</h5>
            <h2>sono un Web Developer</h2>
            <h5>Mi occupo di progettare, creare e gestire web app.</h5>
          </div>

          <div className="container-project">
            <div className="projects-grid">
              <Link className="link-project" to="/portfolio/progetto-01">
                <div
                  className="project-box"
                  style={{
                    backgroundImage:
                      "url('/assets/generic/bg-giuseppe-caci.png')",
                    color: "#FAFAFA",
                  }}
                >
                  <div>
                    <h4 style={{color:" #eaeaea"}}>REACT</h4>
                    <h4 style={{color:" #eaeaea"}}>SASS</h4>
                    <h3>Giuseppe Caci</h3>
                  </div>
                </div>
              </Link>
              <Link className="link-project" to="/portfolio/progetto-02">
                <div
                  className="project-box"
                  style={{
                    backgroundImage:
                      "url('/assets/generic/bg-adventurescode.png')",
                    color: "#FAFAFA",
                  }}
                >
                  <div>
                    <h4 style={{color:" #727272"}}>WORDPRESS</h4>
                    <h3 style={{color:" #3d3d3d"}}>Adventures Code</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
