import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isGithubPages = window.location.hostname === 'vitalii120296.github.io';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: isGithubPages
        ? '/Portfolio/locales/{{lng}}/{{ns}}.json'
        : 'public/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
