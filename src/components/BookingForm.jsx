import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Users, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle 
} from "lucide-react";

function BookingForm() {
  const [searchParams] = useSearchParams();
  const eventParam = searchParams.get("event") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: eventParam,
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Full name must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (7 to 15 digits).";
    }

    if (!formData.event) {
      newErrors.event = "Please select an event.";
    }

    const count = parseInt(formData.participants, 10);
    if (!formData.participants || isNaN(count) || count < 1) {
      newErrors.participants = "Number of participants must be at least 1.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Preferred date cannot be in the past.";
      }
    }

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
      <div className="max-w-2xl mx-auto py-8">
        <div
          role="alert"
          aria-live="polite"
          className="w-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl p-8 md:p-12 text-center space-y-6"
        >
          <div className="inline-flex p-4 bg-green-50 dark:bg-green-950/30 text-ecoGreen dark:text-green-400 rounded-full">
            <CheckCircle size={48} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ecoGreen dark:text-green-400">
              Booking Confirmed!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              We've processed your registration successfully.
            </p>
          </div>

          <p className="text-gray-650 dark:text-gray-350 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-ecoGreen dark:text-green-400">{formData.name}</strong>. Your slot for <strong>{formData.event}</strong> on <strong>{formData.date}</strong> has been secured.
          </p>
          
          <p className="text-xs text-gray-450 dark:text-gray-500 max-w-sm mx-auto">
            A confirmation receipt and detailed guidelines have been sent to <span className="underline font-semibold">{formData.email}</span>.
          </p>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="bg-ecoGreen hover:bg-ecoGreen-dark dark:bg-green-700 dark:hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
            >
              Book Another Event
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/60 shadow-xl p-8 md:p-10"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ecoGreen dark:text-green-400">
            Event Registration
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Complete the form to secure your spot in our upcoming activities.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="name-input" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <div className="relative">
              <input
                id="name-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full border rounded-2xl py-3 pl-11 pr-4 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
                  errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-250 dark:border-gray-700"
                }`}
              />
              <User size={18} className="absolute left-4 top-3.5 text-gray-400" />
            </div>
            {errors.name && (
              <p id="name-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                <AlertCircle size={12} />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email-input" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full border rounded-2xl py-3 pl-11 pr-4 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-250 dark:border-gray-700"
                }`}
              />
              <Mail size={18} className="absolute left-4 top-3.5 text-gray-400" />
            </div>
            {errors.email && (
              <p id="email-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                <AlertCircle size={12} />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone-input" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <div className="relative">
              <input
                id="phone-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+94 77 123 4567"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full border rounded-2xl py-3 pl-11 pr-4 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-250 dark:border-gray-700"
                }`}
              />
              <Phone size={18} className="absolute left-4 top-3.5 text-gray-400" />
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                <AlertCircle size={12} />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="event-select" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Select Event / Workshop
            </label>
            <div className="relative">
              <select
                id="event-select"
                name="event"
                value={formData.event}
                onChange={handleChange}
                aria-invalid={errors.event ? "true" : "false"}
                aria-describedby={errors.event ? "event-error" : undefined}
                className={`w-full border rounded-2xl py-3 pl-11 pr-10 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen appearance-none ${
                  errors.event ? "border-red-500 focus:ring-red-500" : "border-gray-250 dark:border-gray-700"
                }`}
              >
                <option value="">Choose an event or workshop</option>
                <option value="Beach Cleanup">Beach Cleanup (Event)</option>
                <option value="Tree Planting">Tree Planting (Event)</option>
                <option value="Organic Farming Workshop">Organic Farming Workshop</option>
                <option value="Urban Gardening Workshop">Urban Gardening Workshop</option>
              </select>
              <Calendar size={18} className="absolute left-4 top-3.5 text-gray-400 pointer-events-none" />
              <div className="absolute right-4 top-4 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500 w-0 h-0"></div>
            </div>
            {errors.event && (
              <p id="event-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                <AlertCircle size={12} />
                {errors.event}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="participants-input" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Number of Slots
              </label>
              <div className="relative">
                <input
                  id="participants-input"
                  type="number"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  min="1"
                  placeholder="1"
                  aria-invalid={errors.participants ? "true" : "false"}
                  aria-describedby={errors.participants ? "participants-error" : undefined}
                  className={`w-full border rounded-2xl py-3 pl-11 pr-4 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
                    errors.participants ? "border-red-500 focus:ring-red-500" : "border-gray-250 dark:border-gray-700"
                  }`}
                />
                <Users size={18} className="absolute left-4 top-3.5 text-gray-400" />
              </div>
              {errors.participants && (
                <p id="participants-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                  <AlertCircle size={12} />
                  {errors.participants}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="date-input" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Preferred Date
              </label>
              <div className="relative">
                <input
                  id="date-input"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  aria-invalid={errors.date ? "true" : "false"}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  className={`w-full border rounded-2xl py-3 pl-11 pr-4 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen ${
                    errors.date ? "border-red-500 focus:ring-red-500" : "border-gray-250 dark:border-gray-700"
                  }`}
                />
                <Calendar size={18} className="absolute left-4 top-3.5 text-gray-400" />
              </div>
              {errors.date && (
                <p id="date-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                  <AlertCircle size={12} />
                  {errors.date}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message-input" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Additional Notes (Optional)
            </label>
            <div className="relative">
              <textarea
                id="message-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Let us know if you have any accessibility requirements or custom requests..."
                className="w-full border border-gray-250 dark:border-gray-700 rounded-2xl py-3 pl-11 pr-4 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-ecoGreen resize-none"
              ></textarea>
              <MessageSquare size={18} className="absolute left-4 top-4.5 text-gray-400" />
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-start gap-3">
              <input
                id="terms-checkbox"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                aria-invalid={errors.terms ? "true" : "false"}
                aria-describedby={errors.terms ? "terms-error" : undefined}
                className="mt-1 h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-ecoGreen focus:ring-ecoGreen cursor-pointer"
              />
              <label htmlFor="terms-checkbox" className="text-xs text-gray-550 dark:text-gray-400 leading-tight cursor-pointer select-none">
                I agree to the terms of participation, and authorize Urban Harvest Hub to contact me via email for confirmation and schedules.
              </label>
            </div>
            {errors.terms && (
              <p id="terms-error" className="text-red-600 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                <AlertCircle size={12} />
                {errors.terms}
              </p>
            )}
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-ecoGreen hover:bg-ecoGreen-dark dark:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-md transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen text-base"
          >
            Confirm Reservation
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;