import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useTranslation } from 'react-i18next';
import LanguageSelecter from './LanguageSelecter';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { darkMode, setDarkMode } = useAppContext();

  const { t } = useTranslation();

  const navLinks = [
    { to: "/", key: "home" },
    { to: "/products", key: "products" },
    { to: "/events", key: "events" },
    { to: "/workshops", key: "workshops" },
  ];

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav aria-label="Global Navigation" className="bg-ecoGreen text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded-lg">
          <img
            src="/Logo.png"
            alt="Urban Harvest Hub Logo"
            className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-full bg-white/20 p-1"
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Urban Harvest Hub
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`pb-1 transition duration-200 ${isActive ? "border-b-2 border-white" : "border-b-2 border-transparent"} hover:border-white hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* LANGUAGE SELECTOR */}
          <LanguageSelecter />

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-ecoGreen px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block pb-2 transition duration-200 ${isActive ? "border-b-2 border-white" : "border-b-2 border-transparent"} hover:border-white hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile language selector */}
          <div className="mt-4">
            <LanguageSelecter className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;