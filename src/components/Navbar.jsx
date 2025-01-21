import { NavLink } from "react-router-dom"

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/favorites", label: "Favorites" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ]

  return (
    <header className="py-4 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 flex items-center gap-6">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline"
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
