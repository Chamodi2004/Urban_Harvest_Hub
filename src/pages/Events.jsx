// import events from "../data/events.json";
import events from "src/data/events.json";
import EventCard from "../components/EventCard";

function Events() {

  return (
     <main className="pt-28 px-6 dark:bg-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        Events
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </main>
  );
}

export default Events;