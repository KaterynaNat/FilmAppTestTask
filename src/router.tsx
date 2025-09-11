import { createBrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/HomePage/HomePage";
import MovieDetails from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);
