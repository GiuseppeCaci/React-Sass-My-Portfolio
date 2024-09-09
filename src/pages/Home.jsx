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
      <div className={`content-wrappet ${theme}`}>
        <div className={`container-hero ${theme} primary `}>
          <h1>h1 Ciao! sono Giuseppe</h1>
          <p>sono un Web Developer, piu precisamente un front-end developermi occupo di progettare, creare e gestire web app</p>
        </div>
      </div>
    </>
  );
};

export default Home;
