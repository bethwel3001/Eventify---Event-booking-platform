import React from "react";

const Events = () => {
  const shareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Create and Share Your Event</h1>
      <p className="mb-6">
        Use the link below to share your event with others.
      </p>
      <button
        onClick={shareLink}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Copy Link
      </button>
    </div>
  );
};

export default Events;
