import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          padding: 12,
        }}
      >
        <Link to="/" style={{ fontWeight: 700, fontSize: 18 }}>
          🎬 FilmApp
        </Link>
        <nav style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 12px 12px" }}>
        <SearchBar onSearch={() => {}} />
      </div>
    </header>
  );
};

export default Header;
