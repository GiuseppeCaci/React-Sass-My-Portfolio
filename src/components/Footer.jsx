import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
const {theme} = useContext(ThemeContext);

  return(
    <>
      <div className={`container-footer ${theme} secondary`}>
    <div className="section-footer">
        <ul>
          <li><a href="https://github.com/GiuseppeCaci?tab=projects"><GitHubIcon fontSize="large"/></a></li>
          <li><a href="https://www.linkedin.com/in/giuseppe-caci-415364262/"><LinkedInIcon fontSize="large"/></a></li>
          <li><a href="https://www.instagram.com/caci.g/"><InstagramIcon fontSize="large"/></a></li>
          <li><a href="/documents/curriculum-prova.pdf" download="curriculum-CACI.pdf">CV</a></li>
          <li><a href="mailto:giuseppe.caci97@libero.it"><EmailIcon fontSize="large"/></a></li>
        </ul>
    </div>
    </div>
    </>
  )
};

export default Footer;
