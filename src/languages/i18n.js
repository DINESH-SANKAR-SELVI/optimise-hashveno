// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/eng/translation.json';
import translationHIN from './locales/hin/translation.json';
import translationTAM from './locales/tam/translation.json';
import translationKAN from './locales/kan/translation.json';
import translationTEL from './locales/tel/translation.json';
import translationMAL from './locales/mal/translation.json';

const resources = {
  hin: { translation: translationHIN },
  en: { translation: translationEN },
  tam: { translation: translationTAM },
  tel: { translation: translationTEL },
  mal: { translation: translationMAL },
  kan: { translation: translationKAN }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;