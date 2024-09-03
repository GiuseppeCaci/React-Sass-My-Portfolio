import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeIT from './utils/i18n/it/home.json'
import portfolioIT from './utils/i18n/it/portfolio.json'
import contactIT from './utils/i18n/it/contact.json'
import blogIT from './utils/i18n/it/blog.json'
import aboutIT from './utils/i18n/it/about.json'

import homeEN from './utils/i18n/en/home.json'
import portfolioEN from './utils/i18n/en/portfolio.json'
import contactEN from './utils/i18n/en/contact.json'
import blogEN from './utils/i18n/en/blog.json'
import aboutEN from './utils/i18n/en/about.json'

const resources = {
    it:{
        home:homeIT,
        about:aboutIT,
        contact:contactIT,
        blog:blogIT,
        portfolio:portfolioIT
    },
    en:{
        home:homeEN,
        about:aboutEN,
        contact:contactEN,
        blog:blogEN,
        portfolio:portfolioEN
    }
};

i18n
  .use(initReactI18next) // Passa i18n a react-i18next
  .init({
    resources,
    lng: 'en', // Lingua di default
    fallbackLng: 'en', // Lingua di fallback
    ns: ['home', 'about', 'contact', 'blog','portfolio'], // Namespace usati
    defaultNS: 'home', // Namespace di default
    interpolation: {
      escapeValue: false, // React già gestisce la protezione XSS
    },
  });

  export default i18n