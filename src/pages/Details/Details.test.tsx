import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { test, expect, vi } from "vitest";
import Details from "./Details";

vi.mock("../../api/tmdb", () => ({
  getMovie: () =>
    Promise.resolve({
      id: 1,
      title: "Mock Movie",
      poster_path: null,
      overview: "Mock overview",
      genres: [{ id: 1, name: "Drama" }],
    }),
  getRecommendations: () =>
    Promise.resolve({
      page: 1,
      results: [
        { id: 2, title: "Recommended Movie", poster_path: null, genre_ids: [] },
      ],
      total_pages: 1,
      total_results: 1,
    }),
}));

function renderWithProviders(ui: React.ReactNode) {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={["/movie/1"]}>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
}

test("renders movie details and recommendations", async () => {
  renderWithProviders(<Details />);
  expect(await screen.findByText("Mock Movie")).toBeInTheDocument();
  expect(screen.getByText("Drama")).toBeInTheDocument();
  expect(await screen.findByText("Recommended Movie")).toBeInTheDocument();
});
