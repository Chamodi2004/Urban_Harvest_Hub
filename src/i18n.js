import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import si from './locales/si.json';


const resources = {
  en: { translation: en },
  si: { translation: si },
};

const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null;

i18n.use(initReactI18next).init({
  resources,
  lng: saved || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
