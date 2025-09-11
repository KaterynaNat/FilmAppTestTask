import { useParams, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetails = () => {
  const { id } = useParams();
  const loading = false;
  const error: string | null = null;

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorMessage
        title="Failed to load movie"
        description={error}
        type="error"
        action={{
          label: "Retry",
          onClick: () => {},
        }}
      />
    );

  return (
    <section>
      <Link to="/">← Back</Link>
      <h1 style={{ fontSize: 24, margin: "8px 0 12px" }}>Movie #{id}</h1>
      <p>Details will appear here tomorrow.</p>
      <h2 style={{ marginTop: 24, fontSize: 18 }}>Recommended</h2>
      <p>Recommendations grid (tomorrow).</p>
    </section>
  );
};

export default MovieDetails;
