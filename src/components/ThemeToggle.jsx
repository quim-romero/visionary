export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  )
}
