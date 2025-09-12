import http from "./http";
import type {
  Genre,
  MovieDetails,
  MovieSummary,
  PaginatedResult,
} from "./types";

export async function getPopular(page = 1) {
  const { data } = await http.get<PaginatedResult<MovieSummary>>(
    `/movie/popular`,
    { params: { language: "en-US", page } }
  );
  return data;
}

export async function searchMovies(query: string, page = 1) {
  const { data } = await http.get<PaginatedResult<MovieSummary>>(
    `/search/movie`,
    { params: { query, include_adult: false, language: "en-US", page } }
  );
  return data;
}

export async function getGenres() {
  const { data } = await http.get<{ genres: Genre[] }>(`/genre/movie/list`, {
    params: { language: "en-US" },
  });
  return data;
}

export async function getMovie(id: number) {
  const { data } = await http.get<MovieDetails>(`/movie/${id}`, {
    params: { language: "en-US" },
  });
  return data;
}

export async function getRecommendations(id: number, page = 1) {
  const { data } = await http.get<PaginatedResult<MovieSummary>>(
    `/movie/${id}/recommendations`,
    { params: { language: "en-US", page } }
  );
  return data;
}
