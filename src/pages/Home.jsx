import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";

function Home() {
  const { t } = useTranslation();

  return (
    <main id="main-content" className="dark:bg-gray-950 dark:text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 pt-24 pb-20 md:py-32 bg-gradient-to-b from-green-50/60 via-white to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-transparent">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-green-200/30 dark:bg-green-900/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-brown-200/20 dark:bg-amber-900/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-ecoGreen dark:text-green-400 leading-tight">
              {t("home.title")}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
              {t("home.subtitle")}
            </p>

            <div className="pt-4">
              <Link 
                to="/products" 
                className="inline-block bg-ecoGreen hover:bg-ecoGreen-dark text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-green-700/25 hover:shadow-xl hover:shadow-green-700/35 hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
              >
                {t("home.explore")}
              </Link>
            </div>
          </div>

          <div className="relative group">
            {/* Image Border Accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-ecoGreen to-emerald-400 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition duration-300"></div>
            <img
              src="/Hero.jpg"
              alt={t("home.heroAlt")}
              className="relative w-full h-[280px] sm:h-[350px] md:h-[480px] object-cover rounded-3xl shadow-2xl border border-white/20 dark:border-gray-800 transition duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white dark:bg-gray-900 py-24 px-6 border-y border-gray-100 dark:border-gray-850/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-3 bg-gradient-to-bl from-earthBrown to-amber-500 rounded-2xl opacity-10 blur-md group-hover:opacity-20 transition duration-300"></div>
            <img
              src="/about.jpg"
              alt={t("home.aboutAlt")}
              className="relative rounded-2xl shadow-xl w-full h-[300px] md:h-[420px] object-cover border border-white/20 dark:border-gray-800 transition duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ecoGreen dark:text-green-400">
              {t("home.aboutTitle")}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("home.aboutText1")}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("home.aboutText2")}
            </p>
          </div>

        </div>
      </section>

      {/* WEATHER / LOCAL INFO SECTION */}
      <section className="relative px-6 py-24 bg-gradient-to-t from-green-50/40 via-white to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ecoGreen dark:text-green-400 mb-4">
            Colombo Climate Center
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-10 text-sm md:text-base">
            Check the current weather conditions to plan your gardening sessions, planting schedules, or outdoor eco-events.
          </p>
          <div className="hover:scale-[1.01] transition-transform duration-300">
            <WeatherWidget />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;