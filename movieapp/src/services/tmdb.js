import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

// Map our short lang codes to TMDB's format
const getLangCode = (lang) => {
  const map = { en: 'en-US', es: 'es-ES', fr: 'fr-FR', hi: 'hi-IN', ml: 'ml-IN' };
  return map[lang] || 'en-US';
};

export const tmdb = {
  getTrending: (lang) => api.get('/trending/all/week', { params: { language: getLangCode(lang) } }),
  getPopular: (type = 'movie', lang) => api.get(`/${type}/popular`, { params: { language: getLangCode(lang) } }),
  getTopRated: (type = 'movie', lang) => api.get(`/${type}/top_rated`, { params: { language: getLangCode(lang) } }),
  getDiscover: (type = 'movie', genreId, lang) => api.get(`/discover/${type}`, { params: { with_genres: genreId, language: getLangCode(lang) } }),
  getDetails: (id, type = 'movie', lang) => api.get(`/${type}/${id}`, { params: { language: getLangCode(lang) } }),
  getGenres: (type = 'movie', lang) => api.get(`/genre/${type}/list`, { params: { language: getLangCode(lang) } }),
  search: (query, page = 1, type = 'movie', lang) => api.get(`/search/${type}`, { params: { query, page, language: getLangCode(lang) } }),
  discover: (page = 1, type = 'movie', genreId = '', lang) => api.get(`/discover/${type}`, { params: { page, with_genres: genreId, language: getLangCode(lang) } }),
  getCredits: (id, type = 'movie', lang) => api.get(`/${type}/${id}/credits`, { params: { language: getLangCode(lang) } })
};