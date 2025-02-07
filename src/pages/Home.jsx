import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FeaturedWorks from "../components/FeaturedWorks";
import CallToAction from "../components/CallToAction.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Helmet>
        <title>Visionary Gallery – Curated Digital Art</title>
        <meta
          name="description"
          content="Browse curated digital artworks by visionary artists. Explore immersive art across categories and styles."
        />
        <meta
          property="og:title"
          content="Visionary Gallery – Curated Digital Art"
        />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Curated Digital Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            Explore featured pieces from our visionary artists. Each work is
            selected for its conceptual clarity and creative impact.
          </p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FeaturedWorks />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <CallToAction />
      </motion.section>
    </main>
  );
}
