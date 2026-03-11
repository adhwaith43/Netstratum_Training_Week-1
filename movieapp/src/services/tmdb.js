import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const tmdb = {
  getTrending: () => api.get('/trending/movie/week'),
  getPopular: () => api.get('/movie/popular'),
  getTopRated: () => api.get('/movie/top_rated'),
  getDiscover: (genreId) => api.get('/discover/movie', { params: { with_genres: genreId } }),
  getDetails: (id, type = 'movie') => api.get(`/${type}/${id}`),
  getGenres: () => api.get('/genre/movie/list'),
  search: (query, page = 1, genreId = '') => api.get('/search/movie', { params: { query, page, with_genres: genreId } }),
  discover: (page = 1, genreId = '') => api.get('/discover/movie', { params: { page, with_genres: genreId } })
};