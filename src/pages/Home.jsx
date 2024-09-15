import React from "react";
import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThemeContext from "../store/theme/ThemeContext";
import { useLocation } from "react-router-dom";


const Home = () => {
const {t} = useTranslation("home");
const {theme} = useContext(ThemeContext);

  return (
    <>
    <div className={`main-base ${theme} primary`}>
      <div className="container-base flex-center-row">
        <div className="paragraph-base size-large flex-center-column pm-super-hero">
          <h2>Ciao! Sono Giuseppe</h2>
          <h5>sono un Web Developer, <br/> piu precisamente in front-end developer <br/> mi occupo di progettare, creare e gestire web app</h5>
        </div>
        </div>
    </div>
    </>
  );
};

export default Home;
