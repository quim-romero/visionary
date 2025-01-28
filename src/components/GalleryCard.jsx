import { FiHeart, FiCheck } from "react-icons/fi";
import useFavoritesStore from "../context/useFavoritesStore";
import { motion } from "framer-motion";

export default function GalleryCard({ artwork }) {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const fav = isFavorite(artwork.id);

  return (
    <motion.div data-cy="gallery-card" className="relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(artwork);
        }}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 border hover:scale-110 transition-transform"
      >
        {fav ? (
          <FiCheck className="text-green-600 w-4 h-4" />
        ) : (
          <FiHeart className="text-neutral-600 w-4 h-4" />
        )}
      </button>

      <img
        src={artwork.image}
        alt={artwork.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <h2 className="text-lg font-semibold">{artwork.title}</h2>
      <p className="text-sm text-neutral-500">{artwork.artist}</p>
      <p className="text-xs text-neutral-400">{artwork.category}</p>
    </motion.div>
  );
}
