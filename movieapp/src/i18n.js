import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "tvShows": "TV Shows",
      "movies": "Movies",
      "favorites": "Favorites",
      "signIn": "Sign In",
      "logout": "Logout",
      "searchPlaceholder": "Titles, people, genres..."
    }
  },
  es: {
    translation: {
      "home": "Inicio",
      "tvShows": "Series",
      "movies": "Películas",
      "favorites": "Favoritos",
      "signIn": "Iniciar Sesión",
      "logout": "Cerrar Sesión",
      "searchPlaceholder": "Títulos, personas, géneros..."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;