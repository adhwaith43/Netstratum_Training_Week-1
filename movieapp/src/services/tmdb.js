import axios from "axios";

const API_KEY = "db54a2f84e163d35a8576e7caf17d953";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export const getTrending = async () => {

const res = await api.get(
`/trending/all/week?api_key=${API_KEY}`
);

return res.data.results;

};

export const searchMulti = async (query) => {

const res = await api.get(
`/search/multi?api_key=${API_KEY}&query=${query}`
);

return res.data.results;

};

export const getDetails = async (id, type) => {

const res = await api.get(
`/${type}/${id}?api_key=${API_KEY}`
);

return res.data;

};