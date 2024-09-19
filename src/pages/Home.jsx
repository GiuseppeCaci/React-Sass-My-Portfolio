import React from "react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/theme/ThemeContext";

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
        <div className={`container-base flex-center-row container-invisible ${isVisible ? 'visible' : ''}`}>
          <div className="container-hero">
            <h5 className="text-accent">CIAO! SONO GIUSEPPE</h5>
            <h2>sono un Web Developer</h2>
            <h5>
              più precisamente un front-end developer. <br /> mi occupo di
              progettare, creare e gestire web app.
            </h5>
            <h4>fatti un giro nel mio sito per conoscermi meglio!</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
