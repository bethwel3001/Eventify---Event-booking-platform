import React, { useState } from 'react';
import axios from 'axios';

const Host = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/events/host', formData);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error(error);
      alert('Error hosting event.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Host an Event</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input type="text" name="title" placeholder="Event Title" onChange={handleChange} className="block w-full mb-4 p-2 border rounded" required />
        <textarea name="description" placeholder="Event Description" onChange={handleChange} className="block w-full mb-4 p-2 border rounded" required />
        <input type="datetime-local" name="date" onChange={handleChange} className="block w-full mb-4 p-2 border rounded" required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} className="block w-full mb-4 p-2 border rounded" required />
        <input type="number" name="capacity" placeholder="Capacity" onChange={handleChange} className="block w-full mb-4 p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Host Event</button>
      </form>
    </div>
  );
};

export default Host;
