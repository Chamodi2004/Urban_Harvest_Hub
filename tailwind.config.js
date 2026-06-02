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
        ecoGreen: "#2E7D32",
        earthBrown: "#5D4037",
      },

      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};