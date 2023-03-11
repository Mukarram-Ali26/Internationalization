import i18n from 'i18next';
import Backend from 'i18next-locize-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// const isProduction = process.env.NODE_ENV === 'production';


const locizeOptions = {
    projectId: process.env.REACT_APP_LOCIZE_PROJECT_ID,// '0bbc223a-9aba-4a90-ab93-ab9d7bf7f780', 2c388fd6-983c-4b42-b295-51221fcef406
    apiKey: process.env.REACT_APP_LOCIZE_API,//'aaad4141-54ba-4625-ae37-657538fe29e7',ca58828e-649d-41c4-b2a1-65b0540a29be // YOU should not expose your apps API key to production!!!
    referenceLng: 'en',

    // for production
    // projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
    // apiKey: process.env.REACT_APP_LOCIZE_APIKEY, // YOU should not expose your apps API key to production!!!
    // referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
    // version: process.env.REACT_APP_LOCIZE_VERSION
  };

//   if (!isProduction) {
//     // locize-lastused
//     // sets a timestamp of last access on every translation segment on locize
//     // -> safely remove the ones not being touched for weeks/months
//     // https://github.com/locize/locize-lastused
//     i18n.use(LastUsed);
//   }

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs: [ 'en', 'fr', 'de', 'ar'],
    fallbackLng: 'en',
    debug: true,
    // Options for language detector
    detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['localStorage','cookie'],
      },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // react: {useSuspense: false}
    // for local translated files
    // backend: {
    //     loadPath: '/assets/locales/{{lng}}/translation.json',
    //   },
    // for Locize 
    backend: locizeOptions,
    saveMissing: true
    // saveMissing: !isProduction // you should not use saveMissing in production
  });

export default i18n;