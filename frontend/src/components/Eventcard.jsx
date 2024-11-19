import React from "react";

const EventCard = ({ title, date, location, description, image }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Event Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{location}</p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">{description}</p>
      </div>

      {/* RSVP Button */}
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-between items-center">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
          RSVP
        </button>
        <button className="text-primary dark:text-secondary hover:underline">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
