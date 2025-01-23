export default function GalleryCard({ artwork }) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <img src={artwork.image} alt={artwork.title} className="rounded mb-2" />
      <h2 className="text-lg font-semibold">{artwork.title}</h2>
      <p className="text-sm text-neutral-500">{artwork.artist}</p>
    </div>
  );
}
