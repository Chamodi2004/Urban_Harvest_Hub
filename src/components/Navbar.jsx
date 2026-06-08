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
    <nav aria-label="Global Navigation" className="bg-ecoGreen/90 dark:bg-gray-950/80 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 border-b border-white/10 dark:border-gray-800/40 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 hover:scale-[1.02] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded-lg">
          <img
            src="/Logo.png"
            alt="Urban Harvest Hub Logo"
            className="w-10 h-10 object-contain rounded-full bg-white/20 p-1.5 shadow-inner"
          />
          <span className="text-lg sm:text-xl lg:text-2xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Urban Harvest Hub
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`font-display font-medium text-sm uppercase tracking-wider pb-1 transition duration-200 border-b-2 ${
                      isActive 
                        ? "border-white text-white font-semibold" 
                        : "border-transparent text-gray-200 hover:text-white hover:border-white/50"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded`}
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
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white p-2.5 rounded-xl transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* HAMBURGER */}
          <button
            className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-ecoGreen/95 dark:bg-gray-950/90 backdrop-blur-md px-6 pb-6 border-t border-white/10 dark:border-gray-800/40">
          <ul className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block py-2 px-3 rounded-lg font-display text-sm uppercase tracking-wider transition duration-200 ${
                      isActive 
                        ? "bg-white/20 text-white font-semibold" 
                        : "text-gray-200 hover:bg-white/10 hover:text-white"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
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
          <div className="mt-4 pt-4 border-t border-white/10">
            <LanguageSelecter className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;