import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";

const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button onClick={toggleTheme}>
            {theme === "light"? "dark" : "light"} mode
        </button>
    )

}

export default ThemeToggle