import { create } from "zustand"

const useFavoritesStore = create((set, get) => ({
  favorites: [],
  toggleFavorite: (art) => {
    const exists = get().favorites.find((a) => a.id === art.id)
    const updated = exists
      ? get().favorites.filter((a) => a.id !== art.id)
      : [...get().favorites, art]
    set({ favorites: updated })
  },
  isFavorite: (id) => get().favorites.some((a) => a.id === id)
}))

export default useFavoritesStore
