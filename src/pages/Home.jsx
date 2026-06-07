import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";

function Home() {
  const { t } = useTranslation();

  return (
    <main id="main-content" className="dark:bg-gray-900 dark:text-white">

      {/* HERO */}
      <section className="px-5 pt-28 pb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-ecoGreen mb-6">
              {t("home.title")}
            </h1>

            <p className="text-lg mb-6">
              {t("home.subtitle")}
            </p>

            <Link 
              to="/products" 
              className="inline-block bg-ecoGreen text-white px-6 py-3 rounded-lg hover:bg-green-800 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
            >
              {t("home.explore")}
            </Link>
          </div>

          <div>
            <img
              src="/Hero.jpg"
              alt={t("home.heroAlt")}
              className="w-full h-[250px] md:h-[450px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/about.jpg"
              alt={t("home.aboutAlt")}
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-ecoGreen mb-6">
              {t("home.aboutTitle")}
            </h2>

            <p className="text-lg leading-8 mb-4">
              {t("home.aboutText1")}
            </p>

            <p className="text-lg leading-8">
              {t("home.aboutText2")}
            </p>
          </div>

        </div>
      </section>

      {/* WEATHER */}
      <section className="px-6 py-20">
        <div className="p-6">
          <WeatherWidget />
        </div>
      </section>

    </main>
  );
}

export default Home;