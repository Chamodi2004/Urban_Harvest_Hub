import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
<li className="bg-white dark:bg-gray-800 dark:text-white rounded-xl p-4 card-shadow list-none">
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
        className="bg-ecoGreen text-white px-4 py-2 rounded inline-block mt-4 hover:bg-green-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
        aria-label={`View details for ${event.title}`}
      >
        View Details
      </Link>
    </li>
  );
}

export default EventCard;