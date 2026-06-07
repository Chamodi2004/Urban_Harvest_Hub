import { useParams } from "react-router-dom";
import events from "../data/Events.json";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return (
      <main id="main-content" className="pt-28 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-600">Event not found</h1>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-28 px-6 max-w-5xl mx-auto dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-ecoGreen dark:text-green-400 mb-4">
            {event.title}
          </h1>

          <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
            Price: ${event.price}
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            {event.description}
          </p>
        </div>
      </div>
    </main>
  );
}

export default EventDetails;