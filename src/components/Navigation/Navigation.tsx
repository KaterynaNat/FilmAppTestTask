import { Outlet, NavLink, Link } from "react-router-dom";
import Header from "../Header/Header";

const Navigation = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
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
