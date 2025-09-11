import { useState } from "react";
import type { MovieSummary } from "../../api/types";
import MovieGrid from "../../components/Grid/Grid";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);
  const [movies] = useState<MovieSummary[]>([]);

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorMessage
        title="Something went wrong"
        description={error}
        type="error"
        action={{
          label: "Retry",
          onClick: () => {},
        }}
      />
    );
  if (!movies.length)
    return (
      <ErrorMessage
        title="No movies yet"
        description="Popular movies will appear here tomorrow ✨"
        type="empty"
      />
    );

  return (
    <section>
      <h1>Popular / Search</h1>
      <MovieGrid movies={movies} favIds={[]} />
    </section>
  );
};

export default HomePage;
