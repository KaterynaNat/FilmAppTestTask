import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../../api/tmdb";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Grid from "../../components/Grid/Grid";
import { useFavorites } from "../../store/useFavorites";
import type { MovieSummary, MovieDetails } from "../../api/types";
import s from "./Favorites.module.css";

const Favorites = () => {
  const fav = useFavorites();
  const ids = fav.ids;
  const hasFav = ids.length > 0;

  const { data, isLoading, isError } = useQuery<MovieDetails[]>({
    queryKey: ["favorites", ids],
    queryFn: () => Promise.all(ids.map((id) => getMovie(id))),
    enabled: hasFav,
  });

  if (!hasFav) {
    return (
      <ErrorMessage
        title="No favorites yet"
        description="Add movies to your favorites list."
        type="empty"
      />
    );
  }

  if (isLoading) return <Loader />;
  if (isError)
    return <ErrorMessage title="Failed to load favorites" type="error" />;

  const movies: MovieSummary[] = (data ?? []).map((m) => ({
    id: m.id,
    title: m.title,
    poster_path: m.poster_path,
    release_date: m.release_date,
    genre_ids: (m.genres || []).map((g) => g.id),
  }));

  return (
    <section className={s.wrap}>
      <h1 className={s.title}>Favorites</h1>
      <Grid movies={movies} favIds={fav.ids} />
    </section>
  );
};

export default Favorites;
