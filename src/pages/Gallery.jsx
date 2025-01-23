import { useEffect, useState } from "react";
import artworks from "../data/artworks.json";
import { Helmet } from "react-helmet";

export default function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(artworks);
  }, []);

  return (
    <main className="min-h-screen px-4 py-24 max-w-7xl mx-auto">
      <Helmet>
        <title>Gallery – Visionary Gallery</title>
      </Helmet>
      <h1 className="text-3xl font-display mb-8 text-center">Digital Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((art) => (
          <div
            key={art.id}
            className="bg-neutral-100 dark:bg-neutral-800 rounded p-4"
          >
            <img src={art.image} alt={art.title} className="rounded mb-2" />
            <h2 className="text-lg font-semibold">{art.title}</h2>
            <p className="text-sm text-neutral-500">{art.artist}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
