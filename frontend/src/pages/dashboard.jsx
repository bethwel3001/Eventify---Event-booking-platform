import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Explore = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleRSVP = (eventId) => {
    navigate(`/dashboard`, { state: { eventId } }); // Pass eventId to Dashboard
  };

  return (
    <div id='dashboard' className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Explore Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Available Slots: {event.capacity - event.attendees}</p>
            <button onClick={() => handleRSVP(event.id)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              RSVP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
