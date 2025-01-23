export default function GalleryCard({ artwork }) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 rounded p-4 shadow-sm">
      <img src={artwork.image} alt={artwork.title} className="rounded mb-2" />
      <h2 className="text-lg font-semibold">{artwork.title}</h2>
      <p className="text-sm text-neutral-500">{artwork.artist}</p>
    </div>
  )
}
