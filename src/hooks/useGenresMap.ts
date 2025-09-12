import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../api/tmdb";
import type { Genre } from "../api/types";

export function useGenresMap() {
  const { data } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: 1000 * 60 * 60,
  });

  const map = new Map<number, string>();
  (data?.genres ?? []).forEach((g: Genre) => map.set(g.id, g.name));
  return map;
}
