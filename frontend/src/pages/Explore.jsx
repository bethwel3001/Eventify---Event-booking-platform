import React from "react";

const Explore = () => {
  const dummyEvents = [
    {
      id: 1,
      title: "Community Meetup",
      date: "2024-12-01",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add a unique image URL
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "2024-12-05",
      location: "City Hall",
      image: "https://images.unsplash.com/photo-1582192493926-93f4847e1323?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add a unique image URL
    },
    {
      id: 3,
      title: "Charity Run",
      date: "2024-12-10",
      location: "Central Park",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add a unique image URL
    }
  ];
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center py-8 animate-fadeIn">
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
          src={event.image} // Use the event image from the dummyEvents array
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
        <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-600">
          RSVP
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Explore;
