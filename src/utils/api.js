const axios = require("axios");

const PORT = 3003 || 3004;
const baseURL = `http://localhost:${PORT}/api/game`;
const API = axios.create({ baseURL: baseURL });

const Urls = {
  all: "/all",
  getGames: "/games",
  top_rated: "/top_rated",
  most_anticipated: "/most_anticipated",
  search: "/search",
  get: "/get",
};

export const top_rated = async (offset = 0, limit = 6) =>
  API.get(`${Urls.top_rated}?offset=${offset}&limit=${limit}`);

export const most_anticipated = async (offset = 0, limit = 6) =>
  API.get(`${Urls.most_anticipated}?offset=${offset}&limit=${limit}`);

export const search = async (search, limit = 4) =>
  API.get(`${Urls.search}?search=${search}&limit=${limit}`);

export const getGame = async (id) => API.get(`${Urls.get}/${id}`);
