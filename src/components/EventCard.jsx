import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
<div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl p-4 card-shadow">
      <img
        src={event.image}
        alt={event.title}
        className="h-48 w-full object-cover rounded"
      />

      <h2 className="text-2xl font-bold mt-4">
        {event.title}
      </h2>

      <p>{event.category}</p>

      <Link
        to={`/events/${event.id}`}
        className="bg-ecoGreen text-white px-4 py-2 rounded inline-block mt-4"
      >
        View Details
      </Link>
    </div>
  );
}

export default EventCard;