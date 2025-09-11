import { useState } from "react";

type Props = { onSearch: (q: string) => void; initial?: string };

const SearchBar = ({ onSearch, initial = "" }: Props) => {
  const [q, setQ] = useState(initial);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(q.trim());
      }}
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search movies..."
        aria-label="Search movies"
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #e5e7eb",
          outline: "none",
        }}
      />
    </form>
  );
};

export default SearchBar;
