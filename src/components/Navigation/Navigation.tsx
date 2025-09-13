import { Outlet, NavLink, Link } from "react-router-dom";
import Header from "../Header/Header";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.container}>
        <Outlet />
      </main>
      <footer className={s.footer}>
        <NavLink to="/">Home</NavLink>·
        <NavLink to="/favorites">Favorites</NavLink>·
        <Link to="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          TMDB
        </Link>
      </footer>
    </div>
  );
};

export default Navigation;
