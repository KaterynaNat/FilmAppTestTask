import { PacmanLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.wrap} role="status" aria-label="Loading">
    <PacmanLoader color="#7948b4ff" size={28} speedMultiplier={1} />
    <p>🍿 Fetching the popcorn…</p>
  </div>
);

export default Loader;
