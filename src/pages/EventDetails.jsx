import { useParams } from "react-router-dom";
import events from "../data/Events.json";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === parseInt(id, 10));

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <img
        src={event.image}
        alt={event.title}
        className="w-full max-w-xl rounded"
      />

      <h1 className="text-4xl font-bold mt-5">
        {event.title}
      </h1>

      <p className="mt-4">
        {event.description}
      </p>

      <p className="mt-3">
        Price: ${event.price}
      </p>
    </div>
  );
}

export default EventDetails;