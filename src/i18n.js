import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa i file di traduzione
import enHome from './langSetting/en/home.json';
import enAbout from './langSetting/en/about.json';
import enChatBox from './langSetting/en/chatBox.json';
import enPortfolio from './langSetting/en/portfolio.json';
import enPublicis from './langSetting/en/publicis.json';
import enSeicaBoat from './langSetting/en/seicaBoat.json';
import enPanasci from './langSetting/en/panasci.json';
import enAdventures from './langSetting/en/adventuresCode.json';
import enGiuseppeCaci from './langSetting/en/giuseppeCaci.json';
import enStreamingP from './langSetting/en/streamingP.json';
import enNavBar from './langSetting/en/navBar.json';
import enFooter from './langSetting/en/footer.json';


import itHome from './langSetting/it/home.json';
import itAbout from './langSetting/it/about.json';
import itChatBox from './langSetting/it/chatBox.json';
import itPortfolio from './langSetting/it/portfolio.json';
import itPublicis from './langSetting/it/publicis.json';
import itSeicaBoat from './langSetting/it/seicaBoat.json';
import itPanasci from './langSetting/it/panasci.json';
import itAdventures from './langSetting/it/adventuresCode.json';
import itGiuseppeCaci from './langSetting/it/giuseppeCaci.json';
import itStreamingP from './langSetting/it/streamingP.json';
import itNavBar from './langSetting/it/navBar.json';
import itFooter from './langSetting/it/footer.json';

const resources = {
  en: {
    home: enHome,
    about: enAbout,
    chatBox:enChatBox,
    portfolio:enPortfolio,
    publicis:enPublicis,
    seicaBoat:enSeicaBoat,
    panasci:enPanasci,
    adventuresCode:enAdventures,
    giuseppeCaci: enGiuseppeCaci,
    streamingP: enStreamingP,
    navBar:enNavBar,
    footer:enFooter,
  },
  it: {
    home: itHome,
    about: itAbout,
    chatBox:itChatBox,
    portfolio:itPortfolio,
    publicis:itPublicis,
    seicaBoat:itSeicaBoat,
    panasci:itPanasci,
    adventuresCode:itAdventures,
    giuseppeCaci: itGiuseppeCaci,
    streamingP: itStreamingP,
    navBar:itNavBar,
    footer:itFooter,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
