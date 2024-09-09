import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
