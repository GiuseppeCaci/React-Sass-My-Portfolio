import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/theme/ThemeContext";
import useVisibilityAndScrollReset from "../components/UseHooks/useVisibilityAndScrollReset";
import { useTranslation, Trans } from 'react-i18next';

const CollaborazionePS = () => {
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation('publicis');
  
  //creo lista array per ciclo di map e semplificazione quantità di contenuto
  const strumenti = [
    "Aem",
    "Jira",
    "Adobe",
    "Figma",
    "Visual Studio",
    "Html",
    "Json",
    "Microsoft Power Point",
  ];

  //uso hook personalizzato per la transizione iniziale e la partezza del sito a Y-0
  const isVisible = useVisibilityAndScrollReset();

  return (
    <>
      <div className={`main-base ${theme} primary`}>
        <div className={`flex-center-column container-invisible ${isVisible ? 'visible' : ''}`}>
          <div className="size-large">
            <div className="flex-center-column pm-title">
              <h2>{t('publicis.title')}</h2>
              <p>{t('publicis.date')}</p>
            </div>

            <div className="article-base flex-left-column">
              <h4>{t('publicis.tasks.heading')}</h4>
              <p>
                <Trans i18nKey={t('publicis.tasks.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, em:<em/> }} />
              </p>
              <p>
                <Trans i18nKey={t('publicis.tasks.paragraph2')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/> }} />
              </p>
              <p>
                <Trans i18nKey={t('publicis.tasks.paragraph3')} components={{ strong: <strong className="text-accent" />, i: <i /> }} />
              </p>
            </div>

            <div className="article-base flex-left-column">
              <h4>{t('publicis.projects.heading')}</h4>
              <p>
                <Trans i18nKey={t('publicis.projects.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/> }} />
              </p>
            </div>

            <div className={`paragraph-base size-small flex-center-column ${theme} secondary`}>
              <div className="flex-center-column">
                <h4>{t('publicis.tools.heading')}</h4>
                <div className="container-skills flex-center-row">
                  {strumenti.map((element) => (
                    <div key={element} className={`skills-card ${theme} primary`}>
                      <p>{element}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="article-base flex-left-column last-container">
              <h4>{t('publicis.skills.heading')}</h4>
              <p>
                <Trans i18nKey={t('publicis.skills.paragraph1')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
              <p>
              <Trans i18nKey={t('publicis.skills.paragraph2')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
              <p>
              <Trans i18nKey={t('publicis.skills.paragraph3')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
              <p>
              <Trans i18nKey={t('publicis.skills.paragraph4')} components={{ strong: <strong className="text-accent" />, i: <i />, span:<span/>, em:<em/> }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollaborazionePS;
