import { Link } from "react-router-dom";
import type { MovieSummary } from "../../api/types";
import { useFavorites } from "../../store/useFavorites";

type Props = {
  movie: MovieSummary;
  isFavorite?: boolean;
  genresMap?: Map<number, string>;
};
const IMG = import.meta.env.VITE_TMDB_IMG ?? "https://image.tmdb.org/t/p";

const MovieCard = ({ movie, isFavorite, genresMap }: Props) => {
  const year = movie.release_date?.slice(0, 4) ?? "—";
  const poster = movie.poster_path
    ? `${IMG}/w342${movie.poster_path}`
    : "/poster-fallback.png";
  const toggle = useFavorites((s) => s.toggle);

  const genreNames = (movie.genre_ids || [])
    .map((id) => genresMap?.get(id))
    .filter(Boolean)
    .slice(0, 3) as string[];

  return (
    <article className="card">
      <Link to={`/movie/${movie.id}`} className="card__image">
        <img src={poster} alt={movie.title} loading="lazy" />
      </Link>
      <div className="card__body">
        <div className="card__header">
          <h3 className="card__title">{movie.title}</h3>
          <button
            aria-label="Toggle favorite"
            className="fav-btn"
            onClick={() => toggle(movie.id)}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
        <p className="card__meta">{year}</p>
        {!!genreNames.length && (
          <ul className="tags">
            {genreNames.map((g) => (
              <li key={g} className="tag">
                {g}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};
export default MovieCard;
