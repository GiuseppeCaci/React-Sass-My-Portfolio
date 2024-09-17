import React from "react";
import { useContext, useEffect } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Home | Giuseppe Caci';
  }, []);

  
  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div className="container-base flex-center-row">
          <div className="container-hero">
            <h5 className="text-accent">CIAO! SONO GIUSEPPE</h5>
            <h2>sono un Web Developer</h2>
            <h5>più precisamente un front-end developer. <br/> mi occupo di progettare, creare e gestire web app.</h5>
            <h4>fatti un giro nel mio sito per conoscermi meglio!</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
