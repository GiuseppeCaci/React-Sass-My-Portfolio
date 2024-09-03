import React from "react";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);

    
    
    const toggleTheme = () => {
        const newTheme = theme === "light"? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    },[theme])



    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
        </>
    )

}

export default ThemeProvider