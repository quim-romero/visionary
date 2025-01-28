import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/favorites", label: "Favorites" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"
      >
        <div className="flex gap-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium hover:underline transition-colors ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-neutral-700 dark:text-neutral-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
