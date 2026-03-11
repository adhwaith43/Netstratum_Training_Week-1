import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation: { "home": "Home", "tvShows": "TV Shows", "movies": "Movies", "favorites": "Favorites", "signIn": "Sign In", "logout": "Logout", "searchPlaceholder": "Search movies, TV shows..." } },
  es: { translation: { "home": "Inicio", "tvShows": "Series", "movies": "Películas", "favorites": "Favoritos", "signIn": "Iniciar Sesión", "logout": "Cerrar Sesión", "searchPlaceholder": "Buscar..." } },
  fr: { translation: { "home": "Accueil", "tvShows": "Séries", "movies": "Films", "favorites": "Favoris", "signIn": "Se Connecter", "logout": "Déconnexion", "searchPlaceholder": "Rechercher..." } },
  hi: { translation: { "home": "होम", "tvShows": "टीवी शो", "movies": "फिल्में", "favorites": "पसंदीदा", "signIn": "साइन इन करें", "logout": "लॉग आउट", "searchPlaceholder": "खोजें..." } },
  ml: { translation: { "home": "ഹോം", "tvShows": "ടിവി ഷോകൾ", "movies": "സിനിമകൾ", "favorites": "പ്രിയപ്പെട്ടവ", "signIn": "സൈൻ ഇൻ ചെയ്യുക", "logout": "ലോഗൗട്ട്", "searchPlaceholder": "തിരയുക..." } }
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