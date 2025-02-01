import { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function FiltersBar({ artworks, onFilter }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unique = [...new Set(artworks.map((item) => item.category))];
    setCategories(["All", ...unique]);
  }, [artworks]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilter = (category) => {
    setActive(category);
    const filtered =
      category === "All"
        ? artworks
        : artworks.filter((art) => art.category === category);
    onFilter(filtered);
    setShowMobileFilters(false);
  };

  return (
    <div
      className={`sticky top-16 z-40 border-b border-neutral-200 dark:border-neutral-800 py-4 mb-6 transition-colors ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="md:hidden px-4 mb-3">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 text-sm font-medium px-3 py-2 border rounded-full"
        >
          <FiFilter className="w-4 h-4" />
          Filters
        </button>
      </div>
      <AnimatePresence initial={false}>
        {(showMobileFilters || window.innerWidth >= 768) && (
          <motion.div
            className="flex flex-wrap items-center gap-3 px-4 max-w-7xl mx-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                    : "text-neutral-500 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
