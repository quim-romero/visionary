import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FeaturedWorks from "../components/FeaturedWorks";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center bg-white dark:bg-black"
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

      <section className="w-full px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Curated Digital Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            Explore featured pieces from our visionary artists.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <FeaturedWorks />
        </div>
      </section>
    </motion.main>
  );
}
