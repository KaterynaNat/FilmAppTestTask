import { Outlet, NavLink, Link } from "react-router-dom";
import Header from "../Header/Header";

const Navigation = () => {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
        <Outlet />
      </main>
      <footer style={{ padding: 16, opacity: 0.6, textAlign: "center" }}>
        <NavLink to="/">Home</NavLink> ·{" "}
        <NavLink to="/favorites">Favorites</NavLink> ·{" "}
        <Link to="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          TMDB
        </Link>
      </footer>
    </>
  );
};

export default Navigation;
