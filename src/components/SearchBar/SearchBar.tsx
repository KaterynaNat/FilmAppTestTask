import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const debounced = useDebounce(q, 400);

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (debounced) {
      next.set("q", debounced);
      next.set("page", "1");
    } else {
      next.delete("q");
      next.set("page", "1");
    }
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return (
    <form className="search">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search movies..."
        aria-label="Search movies"
        className="input"
      />
    </form>
  );
};

export default SearchBar;
