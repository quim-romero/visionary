import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen flex items-center justify-center text-center px-4 bg-white dark:bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Home – Visionary Gallery</title>
        <meta
          name="description"
          content="Discover curated digital artworks by visionary artists."
        />
      </Helmet>

      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display mb-4">
          Curated Digital Works
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Explore featured pieces from our visionary artists.
        </p>
      </div>
    </motion.main>
  );
}
