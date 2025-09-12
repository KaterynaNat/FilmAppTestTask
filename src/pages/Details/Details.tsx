import { useParams, Link } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getMovie, getRecommendations } from "../../api/tmdb";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieGrid from "../../components/Grid/Grid";
import { useFavorites } from "../../store/useFavorites";
import type {
  MovieDetails as TMovieDetails,
  PaginatedResult,
  MovieSummary,
} from "../../api/types";

const IMG = import.meta.env.VITE_TMDB_IMG ?? "https://image.tmdb.org/t/p";

const Details = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const fav = useFavorites();

  const movieQ = useQuery<TMovieDetails>({
    queryKey: ["movie", movieId],
    queryFn: () => getMovie(movieId),
    enabled: !!movieId,
  });

  const recsQ = useQuery<PaginatedResult<MovieSummary>>({
    queryKey: ["recs", movieId, 1],
    queryFn: () => getRecommendations(movieId, 1),
    enabled: !!movieId,
    placeholderData: keepPreviousData,
  });

  if (movieQ.isLoading) return <Loader />;
  if (movieQ.isError)
    return (
      <ErrorMessage
        title="Failed to load movie"
        type="error"
        action={{ label: "Retry", onClick: () => movieQ.refetch() }}
      />
    );

  const m = movieQ.data!;
  const poster = m.poster_path
    ? `${IMG}/w500${m.poster_path}`
    : "/poster-fallback.png";

  return (
    <section className="stack">
      <Link to="/">← Back</Link>

      <header className="movie-header">
        <img src={poster} alt={m.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{m.title}</h1>
          {m.genres?.length ? (
            <ul className="tags">
              {m.genres.map((g) => (
                <li key={g.id} className="tag">
                  {g.name}
                </li>
              ))}
            </ul>
          ) : null}
          <p>{m.overview || "No overview."}</p>
          <button className="fav-btn" onClick={() => fav.toggle(m.id)}>
            {fav.isFav(m.id) ? "★ In favorites" : "☆ Add to favorites"}
          </button>
        </div>
      </header>

      <h2>Recommended</h2>
      {recsQ.isLoading && <Loader />}
      {recsQ.isError && (
        <ErrorMessage
          title="Failed to load recommendations"
          type="error"
          action={{ label: "Retry", onClick: () => recsQ.refetch() }}
        />
      )}
      {recsQ.data?.results?.length ? (
        <MovieGrid movies={recsQ.data.results} favIds={fav.ids} />
      ) : (
        !recsQ.isLoading && (
          <ErrorMessage title="No recommendations" type="empty" />
        )
      )}
    </section>
  );
};

export default Details;
