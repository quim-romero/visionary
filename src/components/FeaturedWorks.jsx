import { useMemo } from "react";
import artworks from "../data/artworks.json";
import GalleryCard from "./GalleryCard";

export default function FeaturedWorks() {
  const featured = useMemo(() => {
    const shuffled = [...artworks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  }, []);

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-display mb-8">Featured Works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featured.map((art) => (
          <GalleryCard key={art.id} artwork={art} />
        ))}
      </div>
    </section>
  );
}
