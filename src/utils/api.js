const axios = require("axios");

const PORT = 3003 || 3004;
const baseURL = `http://localhost:${PORT}/api/game`;
const API = axios.create({ baseURL: baseURL });

const Urls = {
  all: "/all",
  getGames: "/games",
  top_rated: "/top_rated",
  most_anticipated: "/most_anticipated",
  trending: "/trending",
  popular: "/popular",
  search: "/search",
  get: "/get",
  recentlyCracked: "/crack/recently",
  gamesCalender: "/crack/calender",
};

export const top_rated = async (offset = 0, limit = 6) =>
  API.get(`${Urls.top_rated}?offset=${offset}&limit=${limit}`);

export const getAllGames = async (offset = 0, limit = 40) =>
  API.get(`${Urls.all}?offset=${offset}&limit=${limit}`);

export const most_anticipated = async (offset = 0, limit = 6) =>
  API.get(`${Urls.most_anticipated}?offset=${offset}&limit=${limit}`);

export const trending = async (offset = 0, limit = 6) =>
  API.get(`${Urls.trending}?offset=${offset}&limit=${limit}`);

export const search = async (search, limit = 5) =>
  API.get(`${Urls.search}?search=${search}&limit=${limit}`);

export const getGame = async (title, id) => {
  return title && !id
    ? API.get(`${Urls.get}?title=${title}`)
    : API.get(`${Urls.get}?title=${title}&id=${id}`);
};

export const popular = async (limit = 6) =>
  API.get(`${Urls.popular}?limit=${limit}`);

export const recentlyCracked = async () => API.get(Urls.recentlyCracked);

export const getGamesCalender = async () => API.get(Urls.gamesCalender);
