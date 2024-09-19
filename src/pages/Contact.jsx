import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const Contact = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "Contatti | Giuseppe Caci";
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
        <div className={`container-base flex-center-row container-invisible ${isVisible ? 'visible' : ''}`}>
          <div className="paragraph-base size-large flex-center-column pm-super-hero">
            <h3>Contatti</h3>
            <h5>
              Mandami un Email a{" "}
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                giuseppe.caci@libero.it
              </a>
              <br /> Oppure visita le mie pagine su{" "}
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
                GitHub,{" "}
              </a>
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
                Linkedin
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
