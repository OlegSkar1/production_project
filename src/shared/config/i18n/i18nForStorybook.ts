import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enAbout from '../../../../public/locales/en/about.json';
import enArticles from '../../../../public/locales/en/articles.json';
import enMain from '../../../../public/locales/en/main.json';
import enProfile from '../../../../public/locales/en/profile.json';
import enTranslation from '../../../../public/locales/en/translation.json';
import ruAbout from '../../../../public/locales/ru/about.json';
import ruArticles from '../../../../public/locales/ru/articles.json';
import ruMain from '../../../../public/locales/ru/main.json';
import ruProfile from '../../../../public/locales/ru/profile.json';
import ruTranslation from '../../../../public/locales/ru/translation.json';

const resources = {
  en: {
    translation: enTranslation,
    main: enMain,
    about: enAbout,
    profile: enProfile,
    articles: enArticles,
  },
  ru: {
    translation: ruTranslation,
    main: ruMain,
    about: ruAbout,
    profile: ruProfile,
    articles: ruArticles,
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
