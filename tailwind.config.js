/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ecoGreen: {
          light: "#4caf50",
          DEFAULT: "#2e7d32",
          dark: "#1b5e20",
        },
        earthBrown: {
          light: "#8d6e63",
          DEFAULT: "#5d4037",
          dark: "#3e2723",
        },
      },

      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },

  plugins: [],
};