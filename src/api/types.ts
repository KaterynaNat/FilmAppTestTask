export type MovieSummary = {
  id: number;
  title: string;
  original_title?: string;
  poster_path: string | null;
  release_date?: string;
  genre_ids?: number[];
};

export type Genre = { id: number; name: string };

export type PaginatedResult<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type MovieDetails = {
  id: number;
  title: string;
  overview?: string;
  genres?: Genre[];
  poster_path: string | null;
  release_date?: string;
  runtime?: number;
  vote_average?: number;
};
