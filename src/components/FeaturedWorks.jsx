export default function FeaturedWorks() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-display mb-8">Featured Works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="h-40 bg-neutral-100 dark:bg-neutral-800 rounded" />
        <div className="h-40 bg-neutral-100 dark:bg-neutral-800 rounded" />
        <div className="h-40 bg-neutral-100 dark:bg-neutral-800 rounded" />
      </div>
    </section>
  )
}
