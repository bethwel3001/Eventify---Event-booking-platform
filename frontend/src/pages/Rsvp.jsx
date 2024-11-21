import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For dynamic routing
import { FaRegCalendarCheck, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loading spinner

const Rsvp = () => {
  const { eventId } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch event data using the eventId (this will be dynamic)
    // Here you can call an API to get event details using eventId
    // We'll mock the data for now

    setEvent({
      name: "Sample Event",
      date: "December 15, 2024",
      location: "Event Hall, New York",
    });
  }, [eventId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API Call to submit the form
    setTimeout(() => {
      setIsSubmitting(false);
      alert("You are successfully registered for the event!");
    }, 2000);
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8">
      {/* Event details section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{event.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            <FaRegCalendarCheck className="inline mr-2" />
            {event.date}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Location: <strong>{event.location}</strong>
          </p>
        </div>
      </div>

      {/* RSVP Form Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            RSVP for the Event
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-700 dark:text-gray-300">Name</span>
              <div className="flex items-center mt-1">
                <FaUser className="text-gray-600 dark:text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 dark:bg-gray-700"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 dark:text-gray-300">Email</span>
              <div className="flex items-center mt-1">
                <FaEnvelope className="text-gray-600 dark:text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 dark:bg-gray-700"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 dark:text-gray-300">Phone</span>
              <div className="flex items-center mt-1">
                <FaPhone className="text-gray-600 dark:text-gray-400 mr-2" />
                <input
                  type="text"
                  name="phone"
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 dark:bg-gray-700"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-green-500 focus:outline-none transition duration-200"
            >
              {isSubmitting ? (
                <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
              ) : (
                "Submit RSVP"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4 mt-8">
        <div className="text-center">
          <p>&copy; 2024 Eventify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Rsvp;
