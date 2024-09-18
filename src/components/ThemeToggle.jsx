import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
//importo icone
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
   //chiamo il context del tema per recuperare il tema inserito e la funzione che ne gestisce il cambio
  const { theme, toggleTheme } = useContext(ThemeContext);

  //utilizzo la funzione del bottone per il cambio tema e sulla base del tema salvato cambio l'icona
  return (
    <>
      <div onClick={toggleTheme} className="nav-setting-theme">
          {theme === "light-mode" ? (
            <LightModeIcon fontSize="large" />
          ) : (
            <DarkModeIcon fontSize="large" />
          )}
      </div>
    </>
  );
};

export default ThemeToggle;
