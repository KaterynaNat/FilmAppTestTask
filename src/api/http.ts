import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_API_URL as string;
const BEARER = import.meta.env.VITE_TMDB_BEARER as string;

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER}`,
    Accept: "application/json",
  },
});

export default http;
