function WorkshopCard({ workshop }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl p-4 card-shadow">
      <img
        src={workshop.image}
        alt={workshop.title}
        className="h-48 w-full object-cover rounded"
      />

      <h2 className="text-2xl font-bold mt-4">
        {workshop.title}
      </h2>

      <p>{workshop.category}</p>

      <p className="mt-2">
        {workshop.description}
      </p>
    </div>
  );
}

export default WorkshopCard;