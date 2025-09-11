import type { MovieSummary } from "../../api/types";
import MovieCard from "../MovieCard/MovieCard";

type Props = { movies: MovieSummary[]; favIds?: number[] };
const MovieGrid = ({ movies, favIds = [] }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 12,
      }}
    >
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} isFavorite={favIds.includes(m.id)} />
      ))}
    </div>
  );
};

export default MovieGrid;
