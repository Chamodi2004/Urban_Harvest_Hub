import workshops from "../data/workshops.json";
import WorkshopCard from "../components/WorkshopCard";

function Workshops() {

  return (
     <main className="pt-28 px-6 dark:bg-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        Workshops
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
          />
        ))}
      </div>
    </main>
  );
}

export default Workshops;