import React, { useState } from "react";

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      description: "Explore the latest trends in technology.",
      date: "2025-02-20",
      time: "10:00 AM",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNofGVufDB8fHx8MTY2MTc5MzYyMw&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      title: "Art Workshop",
      description: "Learn painting techniques with experts.",
      date: "2025-03-15",
      time: "2:00 PM",
      location: "New York, NY",
      image:
        "https://media.istockphoto.com/id/2176887822/photo/close-up-of-a-paintbrush-painting.webp?a=1&b=1&s=612x612&w=0&k=20&c=kFedyaHWsC1nR0sON4qbuadIX0gooyYlpqREtNQo82I=",
    },
    // Add more events as needed
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Events</h1>
        <button
          onClick={handleModalToggle}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Create Event
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">
                    Search 
                  </button>
      </div>

      {/* Featured Events Carousel */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Featured Events</h2>
        <div className="flex overflow-x-auto space-x-4">
          {events.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="min-w-[300px] bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-102"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-t-lg h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-sm mt-2">{event.date}</p>
                <p className="text-sm">{event.time}</p>
                <button className="mt-3 text-blue-500 hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Cards */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">All Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-102"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-t-lg h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-sm mt-2">{event.date}</p>
                <p className="text-sm">{event.time}</p>
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">
                    Book Now
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300">
                    Share Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Creation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Create Event</h2>
            <form>
              <input
                type="text"
                placeholder="Event Name"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows="3"
              ></textarea>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <input
                type="time"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
