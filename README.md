# 🌱 Urban Harvest Hub
Demo link: https://urban-harvest-hub-blue.vercel.app/

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18next-Multilingual-26A69A?style=flat-square)](https://www.i18next.com/)

**Urban Harvest Hub** is a modern, responsive SPA application designed to promote sustainable urban agriculture, facilitate local produce/lifestyle product discovery, and foster community engagement through gardening workshops and ecological events. 

---

## ✨ Features

- **🌐 Multilingual Support (Internationalization)**
  - Seamless toggle between English (**EN**) and Sinhala (**SI**) languages using `react-i18next`.
- **🌙 Global Dark Mode Support**
  - Interactive dark mode theme toggle that syncs with `document.documentElement` via React context state (`AppContext`).
- **🌦️ Live Colombo Weather Widget**
  - Integrated weather forecasting widget utilizing the OpenWeatherMap API to display temperature, feels-like temperature, humidity, pressure, and wind speed for Colombo, Sri Lanka.
- **🛍️ Products Showcase**
  - Browse and filter urban agricultural goods categorized by **Food** and **Lifestyle**.
- **📅 Events & Workshops**
  - Explore upcoming eco-events and interactive urban farming workshops.
- **✍️ Booking System**
  - Sign up for workshops and events with a fully-validated reservation form (`BookingForm`).

---

## 🛠️ Technology Stack

- **Frontend Core:** [React 19](https://react.dev/) & [Vite](https://vite.dev/) (Build tool)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Internationalization:** [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- **API Fetching:** Native Fetch & [Axios](https://axios-http.com/)

---

## 📁 Project Structure

```text
urban-harvest-hub/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── assets/              # Component-specific asset styles/images
│   ├── components/          # Reusable UI components
│   │   ├── BookingForm.jsx  # Event registration/booking form
│   │   ├── EventCard.jsx    # Card layout for environmental events
│   │   ├── footer.jsx       # Standard layout footer
│   │   ├── LanguageSelecter.jsx # Language switcher (EN / SI)
│   │   ├── Navbar.jsx       # Navigation header with dark mode & language options
│   │   ├── ProductCard.jsx  # Card layout for agricultural products
│   │   ├── WeatherWidget.jsx# Live OpenWeatherMap integration
│   │   └── WorkshopCard.jsx # Card layout for workshops
│   ├── context/
│   │   └── AppContext.jsx   # Global Context provider (Dark Mode state)
│   ├── data/
│   │   ├── Events.json      # Mock environmental events data
│   │   ├── products.json    # Mock marketplace products data
│   │   └── workshops.json   # Mock workshops data
│   ├── locales/             # Translations
│   │   ├── en.json          # English translations
│   │   └── si.json          # Sinhala (සිංහල) translations
│   ├── pages/               # Main route views
│   │   ├── Booking.jsx      # Booking page wrapper
│   │   ├── EventDetails.jsx # Detailed event page
│   │   ├── Events.jsx       # Events listings page
│   │   ├── Home.jsx         # Homepage with Hero, About Us, and Weather widget
│   │   ├── ProductDetails.jsx# Detailed product view
│   │   ├── Products.jsx     # Products marketplace
│   │   └── Workshops.jsx    # Workshops listings page
│   ├── routes/              # Routing configurations
│   ├── App.css              # Custom styling definitions
│   ├── App.jsx              # Main routing and layout wrapper
│   ├── i18n.js              # Localization config
│   ├── index.css            # Tailwind directives and utility classes
│   └── main.jsx             # React DOM entry point
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS design system tokens
├── vite.config.js           # Vite development server and build options
└── package.json             # NPM metadata and dependency list
```

---

## 🚀 Getting Started

Follow the instructions below to run the project locally.

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### ⚙️ Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Chamodi2004/Urban_Harvest_Hub.git
   cd urban-harvest-hub
   ```

2. Install all package dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   *The application will start, usually on [http://localhost:5173](http://localhost:5173).*

### 🛠️ Scripts & Build Commands

- **Development Server:** `npm run dev` - Starts Vite dev server.
- **Production Build:** `npm run build` - Generates a static production bundle inside the `dist/` directory.
- **Preview Production Build:** `npm run preview` - Runs the locally built production bundle.
- **Linting:** `npm run lint` - Performs ESLint checks on files.
