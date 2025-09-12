import type { MovieSummary } from "../../api/types";
import MovieCard from "../MovieCard/MovieCard";

type Props = {
  movies: MovieSummary[];
  favIds?: number[];
  genresMap?: Map<number, string>;
};
const Grid = ({ movies, favIds = [], genresMap }: Props) => {
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          isFavorite={favIds.includes(m.id)}
          genresMap={genresMap}
        />
      ))}
    </div>
  );
};

export default Grid;
