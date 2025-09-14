import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.wrap}>
    <div className={s.spinner} />
    <p>🎬 Fetching the popcorn…</p>
  </div>
);

export default Loader;
