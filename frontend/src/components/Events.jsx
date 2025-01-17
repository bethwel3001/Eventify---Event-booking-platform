import React, { useState, useEffect } from "react";

const EventsDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const mockEvents = [
    {
      id: 1,
      title: "Tech Expo 2025",
      description: "Explore the latest advancements in technology.",
      category: "Popular",
      popularity: 95,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNofGVufDB8fHx8MTY2MTc5MzYyMw&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      title: "Sports Gala",
      description: "A thrilling sports event for all enthusiasts.",
      category: "Based on Your Interest",
      popularity: 80,
      image:
        "https://images.unsplash.com/photo-1517632298124-f6d50fe6dd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxzcG9ydHxlbnwwfHx8fDE2NjE3OTM2MjM&ixlib=rb-1.2.1&q=80&w=400",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1500);
  }, []);

  const handleBookingSuccess = () => {
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000); // Automatically hide success message after 3 seconds
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        <p className="mt-4 text-lg font-semibold">Loading...</p>
        <p className="mt-2 text-sm">A Nextspace Company</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-gray-900">
      {/* Top Bar */}
      <header className="flex flex-wrap justify-between items-center p-6">
        {/* Search Bar */}
        <div className="w-full md:w-2/3 flex items-center justify-center mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-2/3 p-3 rounded-l-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg shadow-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Create Event Button */}
        <button
          onClick={() => setShowCreateEventModal(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Create Event
        </button>
      </header>

      {/* Event Categories */}
      <section>
        <h2 className="text-2xl font-semibold text-white mt-4 mb-4">
          Popular Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents
            .filter((event) => event.category === "Popular")
            .map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onBookNow={() => setShowBookingModal(true)}
              />
            ))}
        </div>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Events Based on Your Interest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents
            .filter((event) => event.category === "Based on Your Interest")
            .map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onBookNow={() => setShowBookingModal(true)}
              />
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-white py-6">
        <div className="text-center text-sm">© 2025 A Nextspace Company</div>
      </footer>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Booking Successful!</h3>
          </div>
        </div>
      )}

      {/* Modals */}
      {showCreateEventModal && (
        <CreateEventModal onClose={() => setShowCreateEventModal(false)} />
      )}
      {showBookingModal && (
        <BookingModal
          onClose={() => setShowBookingModal(false)}
          onSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
};

const EventCard = ({ event, onBookNow }) => {
  return (
    <div className="bg-white rounded-lg border-4 border-indigo-300 p-4 shadow-md hover:shadow-lg transition transform hover:scale-102">
      <img
        src={event.image}
        alt={event.title}
        className="rounded-t-lg h-40 w-full object-cover"
      />
      <h3 className="font-semibold text-lg mt-4">{event.title}</h3>
      <p className="text-sm text-gray-600">{event.description}</p>
      <div className="mt-4 flex space-x-3">
        <button
          onClick={onBookNow}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Book Now
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

const CreateEventModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Create Event</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Event Name</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded border-gray-300 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              required
              className="w-full p-2 rounded border-gray-300 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Time</label>
            <input
              type="time"
              required
              className="w-full p-2 rounded border-gray-300 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Event Image</label>
            <input
              type="file"
              accept="image/*"
              required
              className="w-full p-2 rounded border-gray-300 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BookingModal = ({ onClose, onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(); // Show success message
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded border-gray-300 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded border-gray-300 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <input
              type="checkbox"
              required
              className="h-4 w-4 text-blue-500 focus:ring-blue-500"
            />
            <label className="text-sm">I agree to the terms and conditions</label>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventsDashboard;
