import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
const {theme} = useContext(ThemeContext);

  return(
    <>
      <div className={`container-footer ${theme} secondary`}>
    <div className="section-footer">
        <ul>
          <li><a href=""><GitHubIcon fontSize="large"/></a></li>
          <li><a href=""><InstagramIcon fontSize="large"/></a></li>
          <li><a href="">CV</a></li>
          <li><a href=""><EmailIcon fontSize="large"/></a></li>
        </ul>
    </div>
    </div>
    </>
  )
};

export default Footer;
