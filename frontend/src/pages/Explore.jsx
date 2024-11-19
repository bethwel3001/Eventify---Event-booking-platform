import React from "react";
import EventCard from "../components/EventCard";

const Explore = () => {
  const dummyEvents = [
    { id: 1, title: "Community Meetup", date: "2024-12-01", location: "Downtown" },
    { id: 2, title: "Tech Conference", date: "2024-12-05", location: "City Hall" },
    { id: 3, title: "Charity Run", date: "2024-12-10", location: "Central Park" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Explore Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {dummyEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
