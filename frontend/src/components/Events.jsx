import React, { useState, useEffect } from "react";

const EventsDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Simulated data for events
  const mockEvents = [
    {
      id: 1,
      title: "Tech Expo 2025",
      description: "Explore the latest advancements in technology.",
      category: "Technology",
      popularity: 95,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNofGVufDB8fHx8MTY2MTc5MzYyMw&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      title: "Art Fair",
      description: "Join us to celebrate local and international art.",
      category: "Art",
      popularity: 80,
      image:
        "https://images.unsplash.com/photo-1513196263633-7e4ff2b30f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFydHxlbnwwfHx8fDE2NjE3OTM2MjM&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      description: "Meet aspiring entrepreneurs and investors.",
      category: "Business",
      popularity: 90,
      image:
        "https://images.unsplash.com/photo-1542228262-3d63d7b847a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxidXNpbmVzc3xlbnwwfHx8fDE2NjE3OTM2MjM&ixlib=rb-1.2.1&q=80&w=400",
    },
    // Add more events here...
  ];
// Simulated data for events


  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1500);
  }, []);

  // Filter events based on search term
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Top Bar */}
      <header className="flex flex-col-reverse md:flex-row justify-between items-center mb-6">
        {/* Search Bar Centered */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="flex items-center w-full space-x-4">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Create Event Button */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-6 right-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Create Event
        </button>
      </header>

      {/* Popular Events Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Most Popular Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents
            .sort((a, b) => b.popularity - a.popularity)
            .map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-t-lg h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                  <div className="mt-4 flex space-x-3">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                      Book Now
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Create Event Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Create Event
            </h3>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="eventName"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="eventDate"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="eventTime"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="eventTime"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="eventImage"
                >
                  Event Image URL
                </label>
                <input
                  type="text"
                  id="eventImage"
                  placeholder="Paste image URL here"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsDashboard;
