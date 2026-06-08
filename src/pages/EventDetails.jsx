import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
import events from "../data/Events.json";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return (
      <main id="main-content" className="pt-32 px-6 max-w-7xl mx-auto dark:text-white min-h-screen text-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 max-w-md mx-auto shadow-md">
          <h1 className="text-2xl font-display font-bold text-red-650 mb-4">Event Not Found</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">The event you are looking for might have been canceled or rescheduled.</p>
          <Link to="/events" className="inline-flex items-center gap-2 bg-ecoGreen text-white px-5 py-2.5 rounded-2xl font-semibold hover:bg-ecoGreen-dark transition">
            <ArrowLeft size={18} /> Back to Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 max-w-6xl mx-auto dark:text-white min-h-screen">
      
      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <Link 
          to="/events" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-ecoGreen dark:hover:text-green-400 font-semibold text-sm transition-colors duration-250"
        >
          <ArrowLeft size={16} /> Back to Events
        </Link>
        
        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
          <Link to="/" className="hover:text-ecoGreen transition-colors">Home</Link> /{" "}
          <Link to="/events" className="hover:text-ecoGreen transition-colors">Events</Link> /{" "}
          <span className="text-gray-655 dark:text-gray-300 font-semibold">{event.title}</span>
        </div>
      </div>

      {/* Main Details Card */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/60 shadow-xl overflow-hidden p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Image Container */}
          <div className="relative group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
            <span className="absolute top-4 left-4 z-10 bg-ecoGreen text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md">
              {event.category}
            </span>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-auto object-cover max-h-[450px] transition duration-500 group-hover:scale-[1.01]"
            />
          </div>

          {/* Details Column */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-extrabold text-gray-950 dark:text-white leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="bg-green-50 dark:bg-green-950/30 text-ecoGreen dark:text-green-400 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                  {event.price ? `$${event.price}` : "Free Event"}
                </span>
                
                <span className="inline-flex items-center gap-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
                  <Tag size={12} />
                  {event.category}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-6">
              {event.description}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-gray-100 dark:border-gray-700/50 py-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-50 dark:bg-gray-900 rounded-xl text-ecoGreen dark:text-green-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Date</span>
                  <span className="text-sm font-semibold text-gray-750 dark:text-gray-250">{event.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-50 dark:bg-gray-900 rounded-xl text-ecoGreen dark:text-green-400">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Time</span>
                  <span className="text-sm font-semibold text-gray-750 dark:text-gray-250">09:00 AM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-50 dark:bg-gray-900 rounded-xl text-ecoGreen dark:text-green-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</span>
                  <span className="text-sm font-semibold text-gray-755 dark:text-gray-250">Colombo Hub</span>
                </div>
              </div>
            </div>

            {/* CTA Register Buttons */}
            <div className="pt-4">
              <Link 
                to={`/booking?event=${encodeURIComponent(event.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ecoGreen hover:bg-ecoGreen-dark dark:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl transition duration-200 shadow-md shadow-green-700/10 text-center"
              >
                Register for Event
              </Link>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default EventDetails;