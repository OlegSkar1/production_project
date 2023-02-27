import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enAbout from '../../../../public/locales/en/about.json';
import enMain from '../../../../public/locales/en/main.json';
import enTranslation from '../../../../public/locales/en/translation.json';
import ruAbout from '../../../../public/locales/ru/about.json';
import ruMain from '../../../../public/locales/ru/main.json';
import ruTranslation from '../../../../public/locales/ru/translation.json';

const resources = {
  en: {
    translation: enTranslation,
    main: enMain,
    about: enAbout,
  },
  ru: {
    translation: ruTranslation,
    main: ruMain,
    about: ruAbout,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ru',
  debug: __IS_DEV__,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
