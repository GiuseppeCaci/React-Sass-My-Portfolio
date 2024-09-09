import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <>
        <div onClick={toggleTheme}>
            {theme === "light"?  <LightModeIcon></LightModeIcon> :  <NightlightIcon></NightlightIcon>}</div>
        </>
    )

}

export default ThemeToggle