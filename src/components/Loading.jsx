import React from "react";
import { useContext} from "react";
import ThemeContext from "../store/theme/ThemeContext";

const Loading = () => {
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);

    return (
        <>
        <div className={`main-base flex-center-column ${theme} primary`}>
        <div className="loading-spinner"></div>
        </div>
        </>
    )
}

export default Loading