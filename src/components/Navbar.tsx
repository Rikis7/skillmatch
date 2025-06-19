import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Discover", path: "/discover" },
    { label: "Profile", path: "/profile" },
    { label: "Login", path: "/login" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/90 backdrop-blur border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-sky-600 dark:text-white tracking-tight hover:opacity-80">
          SkillMatch
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold px-3 py-1 rounded-md transition duration-200 tracking-wide
                ${location.pathname === item.path
                  ? "text-sky-600 dark:text-white border-b-2 border-sky-500 dark:border-white"
                  : "text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-white"}
              `}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-4 p-2 rounded-md transition hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3BottomRightIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-slate-800 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-semibold px-3 py-2 rounded-md tracking-wide transition duration-150
                ${location.pathname === item.path
                  ? "text-sky-600 dark:text-white bg-sky-50 dark:bg-slate-700"
                  : "text-gray-700 dark:text-white hover:text-sky-600 dark:hover:text-sky-400"}
              `}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 dark:text-white hover:text-sky-600 dark:hover:text-sky-400"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
