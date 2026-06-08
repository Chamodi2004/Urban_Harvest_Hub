import workshops from "../data/workshops.json";
import WorkshopCard from "../components/WorkshopCard";

function Workshops() {

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen dark:text-white">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left border-b border-gray-200/50 dark:border-gray-800/50 pb-6">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-ecoGreen dark:text-green-400">
          Educational Workshops
        </h1>
        <p className="mt-2 text-gray-650 dark:text-gray-400 text-base md:text-lg max-w-xl">
          Learn sustainable living, organic composting, and urban farming methods from our green-certified experts.
        </p>
      </div>

      {/* Grid of Workshops */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
          />
        ))}
      </ul>
    </main>
  );
}

export default Workshops;