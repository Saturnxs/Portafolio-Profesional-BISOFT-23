import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import global_es from "../data/translations/es/global.json";
import global_en from "../data/translations/en/global.json";
import projects_es from "../data/translations/es/projects.json";
import projects_en from "../data/translations/en/projects.json";

// i18n configuration
// TODO: Use only Trans component to change language in all the app
i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  resources: {
    en: {
      translation: global_en,
      projects: projects_en,
    },
    es: {
      translation: global_es,
      projects: projects_es,
    },
  },
});

export default i18next;
