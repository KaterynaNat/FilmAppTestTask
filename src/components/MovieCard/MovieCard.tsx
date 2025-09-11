import { Link } from "react-router-dom";
import type { MovieSummary } from "../../api/types";

type Props = { movie: MovieSummary; isFavorite?: boolean };
const IMG = import.meta.env.VITE_TMDB_IMG ?? "https://image.tmdb.org/t/p";

const MovieCard = ({ movie, isFavorite }: Props) => {
  const year = movie.release_date?.slice(0, 4) ?? "—";
  const poster = movie.poster_path
    ? `${IMG}/w342${movie.poster_path}`
    : "/poster-fallback.png";

  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Link to={`/movie/${movie.id}`} style={{ display: "block" }}>
        <img
          src={poster}
          alt={movie.title}
          style={{
            width: "100%",
            aspectRatio: "2/3",
            objectFit: "cover",
            display: "block",
          }}
          loading="lazy"
        />
      </Link>
      <div style={{ padding: 8 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <h3 style={{ fontSize: 14, margin: 0, lineHeight: 1.3, flex: 1 }}>
            {movie.title}
          </h3>
          {isFavorite ? (
            <span title="In favorites">★</span>
          ) : (
            <span style={{ opacity: 0.3 }}>☆</span>
          )}
        </div>
        <p style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>{year}</p>
      </div>
    </article>
  );
};

export default MovieCard;
