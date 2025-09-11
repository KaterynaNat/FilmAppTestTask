import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieGrid from "../../components/Grid/Grid";
import type { MovieSummary } from "../../api/types";

const Favorites = () => {
  const navigate = useNavigate();

  const favoritesIds: number[] = [];
  const favoriteMovies: MovieSummary[] = [];

  if (!favoritesIds.length) {
    return (
      <ErrorMessage
        title="No favorites yet"
        description="Add movies to your favorites list."
        type="empty"
        action={{
          label: "Go to Home",
          onClick: () => {
            navigate("/");
          },
        }}
      />
    );
  }

  return (
    <section>
      <h1>Favorites</h1>
      <MovieGrid movies={favoriteMovies} favIds={favoritesIds} />
    </section>
  );
};

export default Favorites;
