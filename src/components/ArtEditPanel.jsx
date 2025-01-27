import { useState } from "react"

export default function ArtEditPanel({ artwork }) {
  const [form, setForm] = useState({
    title: artwork.title,
    description: artwork.description,
    category: artwork.category,
    type: artwork.type,
    style: artwork.style
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="mt-6 border-t pt-4 border-neutral-200 dark:border-neutral-700">
      <h3 className="text-sm font-semibold mb-2 text-neutral-600 dark:text-neutral-300">
        Mock Edit Panel
      </h3>

      <form className="grid gap-3 text-sm">
        <label>
          Title
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="w-full mt-1 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
          />
        </label>
        <label>
          Category
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
          />
        </label>
        <label>
          Type
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
          />
        </label>
        <label>
          Style
          <input
            name="style"
            value={form.style}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
          />
        </label>
      </form>

      <p className="mt-2 text-xs text-neutral-400">
        This is a visual mockup. Changes are local only and not persisted.
      </p>
    </div>
  )
}
