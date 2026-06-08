import { useState } from "react";
import { Search } from "lucide-react";
import events from "../data/Events.json";
import EventCard from "../components/EventCard";

function Events() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen dark:text-white">
      
      {/* Header and Search */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-200/50 dark:border-gray-800/50 pb-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-ecoGreen dark:text-green-400">
            Community Events
          </h1>
          <p className="mt-2 text-gray-655 dark:text-gray-400 text-sm lg:text-base max-w-md">
            Participate in active environmental initiatives, urban walks, and sustainability gatherings.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full lg:w-80">
          <input
            type="text"
            placeholder="Search events or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-gray-800 border border-gray-250 dark:border-gray-700 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ecoGreen dark:text-white"
          />
          <Search size={18} className="absolute left-4 top-3.5 text-gray-400" />
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No events found matching "{searchQuery}"</p>
        </div>
      )}

    </main>
  );
}

export default Events;