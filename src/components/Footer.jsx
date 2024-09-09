import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";


const Footer = () => {
const {theme} = useContext(ThemeContext);

  return(
    <>
      <div className={`footer ${theme} secondary`}>
    <div>
        <h5>About</h5>
        <ul>
          <li><a href="">GitHub</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">CV</a></li>
        </ul>
    </div>
    <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="">Email</a></li>
        </ul>
    </div>
  </div>
    </>
  )
};

export default Footer;
