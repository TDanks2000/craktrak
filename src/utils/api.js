const axios = require("axios");

const PORT = 3003 || 3004;
const baseURL = `http://localhost:${PORT}/api/game`;
const API = axios.create({ baseURL: baseURL });

const Urls = {
  all: "/get/all",
  getGames: "/get/games",
  top_rated: "/get/pc/top_rated",
  most_anticipated: "/get/pc/most_anticipated",
};

export const top_rated = async (offset = 0, limit = 6) =>
  API.get(`${Urls.top_rated}?offset=${offset}&limit=${limit}`);

export const most_anticipated = async (offset = 0, limit = 6) =>
  API.get(`${Urls.most_anticipated}?offset=${offset}&limit=${limit}`);
