import { create } from "zustand";
import toast from "react-hot-toast";

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
    let next: number[];

    if (ids.includes(id)) {
      next = ids.filter((x) => x !== id);
      toast.error("❌ Removed from favorites");
    } else {
      next = [...ids, id];
      toast.success("⭐ Added to favorites");
    }

    localStorage.setItem(KEY, JSON.stringify(next));
    set({ ids: next });
  },
  isFav: (id) => get().ids.includes(id),
}));
