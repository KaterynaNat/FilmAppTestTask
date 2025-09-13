import { Outlet } from "react-router-dom";
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
        <p>© {new Date().getFullYear()} Made by Kateryna Naturkach</p>
      </footer>
    </div>
  );
};

export default Navigation;
