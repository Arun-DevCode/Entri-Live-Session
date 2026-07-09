import axios from "axios";

// Base URL
const SERVER_URL = `https://fakestoreapi.com`;

// Axios config
const api = axios.create({
  baseURL: SERVER_URL,
});

export default api;
