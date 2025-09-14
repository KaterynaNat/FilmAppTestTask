import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { test, expect, vi } from "vitest";
import HomePage from "./HomePage";

vi.mock("../../api/tmdb", () => ({
  getPopular: () =>
    Promise.resolve({
      page: 1,
      results: [
        { id: 1, title: "Mock Movie 1", poster_path: null, genre_ids: [] },
        { id: 2, title: "Mock Movie 2", poster_path: null, genre_ids: [] },
      ],
      total_pages: 1,
      total_results: 2,
    }),
  searchMovies: () =>
    Promise.resolve({ page: 1, results: [], total_pages: 1, total_results: 0 }),
  getGenres: () => Promise.resolve({ genres: [{ id: 1, name: "Drama" }] }),
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

test("renders popular movies list", async () => {
  renderWithProviders(<HomePage />);
  expect(await screen.findByText("Mock Movie 1")).toBeInTheDocument();
  expect(screen.getByText("Mock Movie 2")).toBeInTheDocument();
});
