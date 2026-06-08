import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function WorkshopCard({ workshop }) {
  // Map workshop title to exact select option in BookingForm
  let bookingEventName = workshop.title;
  if (workshop.title === "Organic Farming") {
    bookingEventName = "Organic Farming Workshop";
  } else if (workshop.title === "Urban Gardening") {
    bookingEventName = "Urban Gardening Workshop";
  } else if (!workshop.title.toLowerCase().includes("workshop")) {
    bookingEventName = `${workshop.title} Workshop`;
  }

  return (
    <li className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group list-none">
      
      {/* Workshop Image & Badges */}
      <div className="relative overflow-hidden h-56 w-full bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-ecoGreen dark:text-green-400 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm border border-gray-100/10">
            {workshop.category}
          </span>
        </div>
        <img
          src={workshop.image}
          alt={workshop.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Workshop Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-display font-bold text-gray-950 dark:text-white group-hover:text-ecoGreen dark:group-hover:text-green-400 transition-colors duration-200">
          {workshop.title}
        </h2>
        
        <p className="text-sm text-gray-550 dark:text-gray-400 mt-2 line-clamp-3">
          {workshop.description}
        </p>

        {/* Card Footer */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 dark:border-gray-700/50">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <BookOpen size={14} className="text-ecoGreen dark:text-green-400" />
            <span>Interactive</span>
          </div>

          <Link
            to={`/booking?event=${encodeURIComponent(bookingEventName)}`}
            className="bg-ecoGreen hover:bg-ecoGreen-dark dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold text-sm px-5 py-3 rounded-2xl shadow-sm hover:shadow transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
          >
            Book Now
          </Link>
        </div>
      </div>

    </li>
  );
}

export default WorkshopCard;