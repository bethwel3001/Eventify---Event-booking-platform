import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-900">
      <div className="text-xl font-bold text-blue-600">Eventify</div>
      <ul className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Join
        </button>
        <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
          🌙
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
