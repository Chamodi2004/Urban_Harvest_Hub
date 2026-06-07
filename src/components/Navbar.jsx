import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
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

  return (
    <nav className="bg-ecoGreen text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
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
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`pb-1 transition duration-200 ${isActive ? "border-b-2 border-white" : "border-b-2 border-transparent"} hover:border-white hover:text-gray-200`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* LANGUAGE SELECTOR */}
          <LanguageSelecter />

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black p-2 rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-ecoGreen px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`pb-2 transition duration-200 ${isActive ? "border-b-2 border-white" : "border-b-2 border-transparent"} hover:border-white hover:text-gray-200`}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            );
          })}

          {/* Mobile language selector */}
          <div>
            <LanguageSelecter className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;