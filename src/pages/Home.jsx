import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThemeContext from "../store/theme/ThemeContext";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation("home");
  const { theme } = useContext(ThemeContext);
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div className="container-base flex-center-row">
          <div className="container-hero">
            <h5 className="accent">CIAO! SONO GIUSEPPE</h5>
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
