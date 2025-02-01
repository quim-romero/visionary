import { useMemo } from "react";
import artworks from "../data/artworks.json";
import GalleryCard from "./GalleryCard";
import { motion } from "framer-motion";

function getRandomArtworks(data, count) {
  const shuffled = [...data];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function FeaturedWorks() {
  const featured = useMemo(() => getRandomArtworks(artworks, 3), []);

  return (
    <section className="px-4 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-display text-center mb-12">
          Featured Works
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
          {featured.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GalleryCard artwork={art} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
