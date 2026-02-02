import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importamos tus futuros diccionarios
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Conecta con React
  .init({
    resources,
    fallbackLng: 'es', // Si el idioma no se encuentra, usa español por defecto
    interpolation: {
      escapeValue: false // React ya nos protege de ataques XSS
    }
  });

export default i18n;