function BookingForm() {

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 dark:bg-gray-900">

      <form className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl p-8">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-ecoGreen mb-8">
          Booking
        </h2>

        {/* FULL NAME */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          />
        </div>

        {/* PHONE */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Phone
          </label>

          <input
            type="tel"
            placeholder="Enter phone number"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          />
        </div>

        {/* EVENT SELECTION */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Select Event
          </label>

          <select
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          >
            <option value="">
              Choose an option
            </option>

            <option>
              Beach Cleanup
            </option>

            <option>
              Tree Planting
            </option>

            <option>
              Organic Farming Workshop
            </option>

            <option>
              Urban Gardening Workshop
            </option>
          </select>
        </div>

        {/* NUMBER OF PARTICIPANTS */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Number of Participants
          </label>

          <input
            type="number"
            min="1"
            placeholder="Enter participant count"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          />
        </div>

        {/* DATE */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Preferred Date
          </label>

          <input
            type="date"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Additional Message
          </label>

          <textarea
            rows="4"
            placeholder="Write additional notes here..."
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          ></textarea>
        </div>

        {/* TERMS */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            required
          />

          <p className="text-sm">
            I agree to the terms and conditions
          </p>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-ecoGreen text-white py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}

export default BookingForm;