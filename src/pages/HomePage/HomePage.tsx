import { useSearchParams } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getPopular, searchMovies } from "../../api/tmdb";
import Grid from "../../components/Grid/Grid";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useFavorites } from "../../store/useFavorites";
import { useGenresMap } from "../../hooks/useGenresMap";
import type { PaginatedResult, MovieSummary } from "../../api/types";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const page = Number(params.get("page") ?? "1");

  const genresMap = useGenresMap();
  const favIds = useFavorites((st) => st.ids);

  const queryKey = q ? ["search", q, page] : (["popular", page] as const);
  const queryFn = () => (q ? searchMovies(q, page) : getPopular(page));

  const { data, isLoading, isError, refetch, isFetching } = useQuery<
    PaginatedResult<MovieSummary>
  >({
    queryKey,
    queryFn,
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.total_pages ?? 1;

  const setPage = (p: number) => {
    const next = new URLSearchParams(params);
    next.set("page", String(p));
    setParams(next, { replace: true });
    window.scrollTo({ top: 0 });
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <ErrorMessage
        title="Failed to load movies"
        type="error"
        action={{ label: "Retry", onClick: () => refetch() }}
      />
    );

  if (!data?.results?.length)
    return (
      <ErrorMessage
        title="No results"
        description="Try another query."
        type="empty"
      />
    );

  return (
    <section className={s.wrap}>
      <h1 className={s.title}>Popular {q && `/ Search: “${q}”`}</h1>

      <Grid movies={data.results} favIds={favIds} genresMap={genresMap} />

      <div className={s.pagination}>
        <button
          disabled={page <= 1 || isFetching}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          disabled={page >= totalPages || isFetching}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default HomePage;
