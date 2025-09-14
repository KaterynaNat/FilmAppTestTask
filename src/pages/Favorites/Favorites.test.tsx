import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { useFavorites } from "../../store/useFavorites";
import { test, expect, vi } from "vitest";
import Favorites from "./Favorites";

vi.mock("../../api/tmdb", () => ({
  getMovie: (id: number) =>
    Promise.resolve({
      id,
      title: `Fav ${id}`,
      poster_path: null,
      genres: [],
      release_date: "2024-01-01",
    }),
}));

function renderWithProviders(ui: React.ReactNode) {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
}

test("shows empty state when no favorites", () => {
  useFavorites.setState({ ids: [] });
  renderWithProviders(<Favorites />);
  expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
});

test("renders favorites list when ids exist", async () => {
  useFavorites.setState({ ids: [10, 20] });
  renderWithProviders(<Favorites />);
  expect(await screen.findByText("Fav 10")).toBeInTheDocument();
  expect(await screen.findByText("Fav 20")).toBeInTheDocument();
});
