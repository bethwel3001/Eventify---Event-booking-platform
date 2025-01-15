import React from 'react';

const Events = () => {
  const handleShare = () => {
    const eventLink = window.location.href; // You can customize this as per your event logic
    navigator.clipboard.writeText(eventLink);
    alert('Event link copied to clipboard!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Create and Share Your Event</h1>
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Copy Event Link
      </button>
    </div>
  );
};

export default Events;
