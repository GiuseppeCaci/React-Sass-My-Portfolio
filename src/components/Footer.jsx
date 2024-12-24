import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import LanguageSwitcherDESK from "./LanguageSwitcherDESK";
import { useTranslation, Trans } from 'react-i18next';
//icone
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Footer = () => {
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
    const { t } = useTranslation('footer');

  return(
    <>
      <div className={`container-footer ${theme} secondary`}>

    <div className="section-footer-1">
      <div>
        <ul> <h3>{t('contact')}</h3>
            <li><a href={import.meta.env.VITE_CV_IT_URL} download="curriculum-CACI.pdf">Curriculum (Ita)</a></li>
            <li><a href={import.meta.env.VITE_CV_EN_URL} download="curriculum-CACI.pdf">Curriculum (Eng)</a></li>
            <li><a href={`mailto:${import.meta.env.VITE_EMAIL}`} target="_blank">Email</a></li>
        </ul>
        </div>
        <div>
        <ul> <h3>{t('work')}</h3>
        <li><a href={import.meta.env.VITE_GITHUB_URL} target="_blank">GitHub</a></li>
            <li><a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">LinkedIn</a></li>
        </ul>
        </div>
    </div>

    <div className="section-footer-lang">
      <LanguageSwitcherDESK/>
    </div>

    <div  className="section-footer-copyright">
      <p>{t('copyright')}</p>
    </div>

    </div>
    </>
  )
};

export default Footer;
