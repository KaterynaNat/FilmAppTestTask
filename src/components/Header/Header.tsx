import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
        <Link to="/" className="logo">
          🎬 FilmApp
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
      <div className="header__search">
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
