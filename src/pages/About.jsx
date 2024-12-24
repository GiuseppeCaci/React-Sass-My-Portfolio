import React from "react";
import { useContext, useEffect } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  //cambio nome alla pagina
  useEffect(() => {
    document.title = "About | Giuseppe Caci";
  }, []);
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
    const { t } = useTranslation('about');
  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const skills = [
    // Front-End
    "Html",
    "Css",
    "Sass",
    "Bootstrap",
    "Tailwind",
    "Responsive Design",
    "Javascript",
    "React",
    "Redux",
  
    // Back-End
    "Node.js",
    "CRUD",
    "RestfulApi",
    "JWT",
  
    // Database
    "MongoDB",
  
    // Design
    "Figma",
    "Adobe",
    "Canvas",
  
    // CMS
    "Wordpress",
    "Elementor",
    "Aem",
  
    // Generale
    "Git",
    "Github",
    "Postman",
    "SEO"
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();


  return (
    <>
      <div className={`main-base ${theme} primary color-change-4x`}>
        <div
          className={`container-base flex-center-column container-invisible ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="flex-center-column pm-title">
            <h1>{t('about-title')}</h1>
          </div>
          <div className="about-bio pm-hero">
            <img src="/assets/generic/img-about.jpg" alt="About"></img>
            <div className="about-bio-text">
  <p>
  <Trans i18nKey={t('about-intro')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
  </p>
  <p>
  <Trans i18nKey={t('about-education')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
  </p>
  <div className={`citazione ${theme} secondary`}>
    <p>
      <em>
      <Trans i18nKey={t('about-quote')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
      </em>
    </p>
    <p>
    <Trans i18nKey={t('about-quote-author')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
    </p>
  </div>
  <p>
  <Trans i18nKey={t('about-dream')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
</p>

  <p>
  <Trans i18nKey={t('about-hobby')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
  </p>
</div>
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
              {" "}
              <button className="button-class-1">{t('about-cta-1')}</button>
            </a>
          </div>
          <div
            className={`paragraph-base size-normal flex-left-column ${theme} secondary`}
          >
          <h3>Design</h3>
<p>
<Trans i18nKey={t('about-design')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
</p>

<h3>Engine</h3>
<p>
<Trans i18nKey={t('about-engine')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
</p>
            <div className="flex-center-column">
              <Link to="/portfolio">
                <button className="button-class-1">Portfolio</button>
              </Link>
            </div>
          </div>
          <div className="paragraph-base size-small flex-center-column">
            <div className="flex-center-column">
              <h3 className="text-accent">{t('about-title-skills')}</h3>
              <div className="container-skills flex-center-row">
                {skills.map((element) => (
                  <div
                    key={element}
                    className={`skills-card ${theme} secondary`}
                  >
                    <p>{element}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`paragraph-base size-small flex-left-column ${theme} secondary`}
          >
            <h3>Soft Skills</h3>
            <p>
            <Trans i18nKey={t('about-skills')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
            </p>
            <div className="flex-center-column">
              <a
                href={import.meta.env.VITE_CV_URL}
                download="curriculum-CACI.pdf"
              >
                <button className="button-class-1">{t('about-cta-2')}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default About;
