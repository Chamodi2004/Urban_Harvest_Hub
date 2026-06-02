import WeatherWidget from "../components/WeatherWidget";

function Home() {

  return (
     <main className="dark:bg-gray-900 dark:text-white">

      {/* HERO */}
    {/* HERO */}
<section className="px-6 py-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[500px]">

    {/* Left Content */}
    <div>
      <h1 className="text-5xl font-bold text-ecoGreen mb-6">
        Urban Harvest Hub
      </h1>

      <p className="text-lg leading-8 mb-6">
        Connect with your community and grow fresh produce together
      </p>

      <button className="bg-ecoGreen text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
        Explore
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="/Hero.jpg"
        alt="Urban Farming"
        className="w-full max-w-[650px] h-[450px] object-cover rounded-3xl shadow-xl"
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
              alt="About"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-ecoGreen mb-6">
              About Us
            </h2>

            <p className="text-lg leading-8 mb-4">
              Urban Harvest Hub is dedicated to promoting sustainable urban agriculture and fostering community engagement.
            </p>

            <p className="text-lg leading-8">
              We believe that everyone can grow their own food and make a positive impact on the environment.
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