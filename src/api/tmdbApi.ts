import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MovieSummary, PaginatedResult } from "./types";

const baseUrl = import.meta.env.VITE_TMDB_API_URL as string;
const bearer = import.meta.env.VITE_TMDB_BEARER as string;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${bearer}`);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getPopular: build.query<PaginatedResult<MovieSummary>, { page: number }>({
      query: ({ page }) => `/movie/popular?language=en-US&page=${page}`,
    }),
  }),
});

export const { useGetPopularQuery } = tmdbApi;
