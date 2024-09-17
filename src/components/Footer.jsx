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
        <li><a href={import.meta.env.VITE_GITHUB_URL} target="_blank"><GitHubIcon fontSize="large" /></a></li>
            <li><a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank"><LinkedInIcon fontSize="large" /></a></li>
            <li><a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank"><InstagramIcon fontSize="large" /></a></li>
            <li><a href={import.meta.env.VITE_CV_URL} download="curriculum-CACI.pdf">CV</a></li>
            <li><a href={`mailto:${import.meta.env.VITE_EMAIL}`} target="_blank"><EmailIcon fontSize="large" /></a></li>
        </ul>
    </div>
    </div>
    </>
  )
};

export default Footer;
