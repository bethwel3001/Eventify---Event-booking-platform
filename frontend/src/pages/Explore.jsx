import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
const Explore = () => {
  const [openRSVPEvent, setOpenRSVPEvent] = useState(null); // Tracks the ID of the event being RSVP'd

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const dummyEvents = [
    {
      id: 1,
      title: "Community Meetup",
      date: "2024-12-01",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "2024-12-05",
      location: "City Hall",
      image: "https://images.unsplash.com/photo-1582192493926-93f4847e1323?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      id: 3,
      title: "Charity Run",
      date: "2024-12-10",
      location: "Central Park",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }
  ];

// RSVP 
  const handleRSVP = (eventId) => {
    setOpenRSVPEvent(eventId); // Open RSVP popup for the specific event
  };

  const closeRSVP = () => {
    setOpenRSVPEvent(null); // Close the RSVP popup
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    alert("RSVP submitted successfully!");
    closeRSVP(); // Close the modal after submission
  };
// --------------------------------
  return (
    <div id="explore" className="bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center py-8 animate-fadeIn">
      <h1 className="text-4xl font-extrabold text-center mb-8 dark:text-white">
        Explore Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
  {dummyEvents.map((event) => (
    <div
      key={event.id}
      className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between h-[300px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-blue-500"
    >
      {/* Event Image */}
      <div className="w-full h-[150px] bg-gray-300 rounded-t-lg mb-4">
        <img
          src={event.image} // Using the event image from the dummyEvents array
          alt={event.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Event Text */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold dark:text-white mb-2">{event.title}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Date: <span className="font-medium">{event.date}</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Location: <span className="font-medium">{event.location}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-600">
          Details
        </button>
        {/* to be modified for RSVP */}
        <button onClick={() => handleRSVP(event.id)} className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg transition duration-300 transform hover:scale-110 hover:bg-orange-600">
              RSVP
            </button>

      {/* RSVP Modal */}
      {openRSVPEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={closeRSVP}
          ></div>

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6 border-4 border-blue-500 animate-fadeIn"
            style={{
              animation: "scaleUp 0.4s ease-out",
            }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              RSVP for {events.find((e) => e.id === openRSVPEvent)?.title}
            </h3>
            <form onSubmit={handleRSVPSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4 flex items-start space-x-2">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600">
                  I agree to the Eventify terms and conditions
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={closeRSVP}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
    ))}
</div>
    </div>
  );
};

export default Explore;
