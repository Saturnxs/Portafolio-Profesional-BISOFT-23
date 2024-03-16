import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import global_es from "../assets/translations/es/global.json";
import global_en from "../assets/translations/en/global.json";
import projects_es from "../assets/translations/es/projects.json";
import projects_en from "../assets/translations/en/projects.json";

// i18n configuration
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
