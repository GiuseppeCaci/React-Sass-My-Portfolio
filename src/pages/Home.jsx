import React from "react";
import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThemeContext from "../store/theme/ThemeContext";


const Home = () => {
const {t} = useTranslation("home");
const {theme} = useContext(ThemeContext);

  return (
    <>
    <div className={`main-base ${theme} primary`}>
      <div className="container-base flex-center-row">
        <div className="paragraph-hero flex-center-column">
          <h2>Ciao! Sono Giuseppe</h2>
          <p>sono un Web Developer, <br/> piu precisamente in front-end developer <br/> mi occupo di progettare, creare e gestire web app</p>
        </div>
        </div>
    </div>
    </>
  );
};

export default Home;
