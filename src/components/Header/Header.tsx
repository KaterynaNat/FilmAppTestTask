import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.row}>
        <Link to="/" className={s.logo}>
          🎬 FilmApp
        </Link>
        <nav className={s.nav}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
      <div className={s.searchWrap}>
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
