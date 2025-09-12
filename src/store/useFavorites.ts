import { create } from "zustand";

type FavState = {
  ids: number[];
  toggle: (id: number) => void;
  isFav: (id: number) => boolean;
};

const KEY = "favorites_ids";

const load = (): number[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

export const useFavorites = create<FavState>((set, get) => ({
  ids: load(),
  toggle: (id) => {
    const { ids } = get();
    const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
    localStorage.setItem(KEY, JSON.stringify(next));
    set({ ids: next });
  },
  isFav: (id) => get().ids.includes(id),
}));
