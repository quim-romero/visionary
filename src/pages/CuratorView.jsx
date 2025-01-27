import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import artworks from "../data/artworks.json"
import useCuratorStore from "../context/useCuratorStore"
import ArtEditPanel from "../components/ArtEditPanel"

export default function CuratorView() {
  const { curatorMode, toggleCuratorMode } = useCuratorStore()

  useEffect(() => {
    if (!curatorMode) toggleCuratorMode()
  }, [curatorMode, toggleCuratorMode])

  return (
    <>
      <Helmet>
        <title>Curator Mode – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen px-4 py-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-display mb-2">Curator Mode</h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Internal view for reviewing, editing, and auditing artwork metadata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 bg-white dark:bg-neutral-900 shadow-sm"
            >
              <img src={art.image} alt={art.title} className="rounded w-full h-auto mb-4" />
              <h2 className="text-xl font-semibold mb-1">{art.title}</h2>
              <p className="text-sm text-neutral-500 mb-2">by {art.artist}</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">{art.description}</p>
              <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                <li><strong>ID:</strong> {art.id}</li>
                <li><strong>Category:</strong> {art.category}</li>
                <li><strong>Type:</strong> {art.type}</li>
                <li><strong>Style:</strong> {art.style}</li>
              </ul>

              <ArtEditPanel artwork={art} />
            </div>
          ))}
        </div>
      </motion.main>
    </>
  )
}
