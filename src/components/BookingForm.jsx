import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    participants: "1",
    date: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear the specific error when the user edits the field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Full name must be at least 3 characters long.";
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone check (basic pattern for international and local numbers, e.g. +94 77 123 4567)
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (7 to 15 digits).";
    }

    // Event check
    if (!formData.event) {
      newErrors.event = "Please select an event.";
    }

    // Participants check
    const count = parseInt(formData.participants, 10);
    if (!formData.participants || isNaN(count) || count < 1) {
      newErrors.participants = "Number of participants must be at least 1.";
    }

    // Date check
    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time for daily comparison
      if (selectedDate < today) {
        newErrors.date = "Preferred date cannot be in the past.";
      }
    }

    // Terms check
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "",
      participants: "1",
      date: "",
      message: "",
      terms: false,
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-16 dark:bg-gray-900">
        <div
          role="alert"
          aria-live="polite"
          className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="text-ecoGreen dark:text-green-400 text-6xl mb-6">
            <span role="img" aria-label="Success checkmark">✅</span>
          </div>
          <h2 className="text-4xl font-bold text-ecoGreen dark:text-green-400 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-lg mb-6">
            Thank you, <strong className="text-ecoGreen dark:text-green-400">{formData.name}</strong>. Your booking for <strong>{formData.event}</strong> on <strong>{formData.date}</strong> has been received.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            We have sent a confirmation email to {formData.email}.
          </p>
          <button
            onClick={handleReset}
            className="bg-ecoGreen hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
          >
            Book Another Event
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl p-8"
      >
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-ecoGreen dark:text-green-400 mb-8">
          Booking
        </h2>

        {/* FULL NAME */}
        <div className="mb-5">
          <label htmlFor="name-input" className="block mb-2 font-semibold">
            Full Name
          </label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full border rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label htmlFor="email-input" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full border rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* PHONE */}
        <div className="mb-5">
          <label htmlFor="phone-input" className="block mb-2 font-semibold">
            Phone
          </label>
          <input
            id="phone-input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full border rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
              errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* EVENT SELECTION */}
        <div className="mb-5">
          <label htmlFor="event-select" className="block mb-2 font-semibold">
            Select Event
          </label>
          <select
            id="event-select"
            name="event"
            value={formData.event}
            onChange={handleChange}
            aria-invalid={errors.event ? "true" : "false"}
            aria-describedby={errors.event ? "event-error" : undefined}
            className={`w-full border rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
              errors.event ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Choose an option</option>
            <option value="Beach Cleanup">Beach Cleanup</option>
            <option value="Tree Planting">Tree Planting</option>
            <option value="Organic Farming Workshop">Organic Farming Workshop</option>
            <option value="Urban Gardening Workshop">Urban Gardening Workshop</option>
          </select>
          {errors.event && (
            <p id="event-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.event}
            </p>
          )}
        </div>

        {/* NUMBER OF PARTICIPANTS */}
        <div className="mb-5">
          <label htmlFor="participants-input" className="block mb-2 font-semibold">
            Number of Participants
          </label>
          <input
            id="participants-input"
            type="number"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            min="1"
            placeholder="Enter participant count"
            aria-invalid={errors.participants ? "true" : "false"}
            aria-describedby={errors.participants ? "participants-error" : undefined}
            className={`w-full border rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
              errors.participants ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          {errors.participants && (
            <p id="participants-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.participants}
            </p>
          )}
        </div>

        {/* DATE */}
        <div className="mb-5">
          <label htmlFor="date-input" className="block mb-2 font-semibold">
            Preferred Date
          </label>
          <input
            id="date-input"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            aria-invalid={errors.date ? "true" : "false"}
            aria-describedby={errors.date ? "date-error" : undefined}
            className={`w-full border rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
              errors.date ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          {errors.date && (
            <p id="date-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.date}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label htmlFor="message-input" className="block mb-2 font-semibold">
            Additional Message (Optional)
          </label>
          <textarea
            id="message-input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Write additional notes here..."
            className="w-full border border-gray-300 rounded-lg p-3 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ecoGreen"
          ></textarea>
        </div>

        {/* TERMS */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <input
              id="terms-checkbox"
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              aria-invalid={errors.terms ? "true" : "false"}
              aria-describedby={errors.terms ? "terms-error" : undefined}
              className="h-5 w-5 rounded border-gray-300 text-ecoGreen focus:ring-ecoGreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
            />
            <label htmlFor="terms-checkbox" className="text-sm font-semibold cursor-pointer select-none">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.terms && (
            <p id="terms-error" className="text-red-600 dark:text-red-400 text-sm mt-1" role="alert">
              {errors.terms}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-ecoGreen hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600 text-white py-4 rounded-lg text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}

export default BookingForm;