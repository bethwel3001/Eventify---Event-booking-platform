import React, { useState } from "react";

// YOU GUYS NEVER TOLD ME REACT IS THIS SWEET!!!!!!!!!!
// SLEEK SITE - IM NEVER BUILDING SITES TRADITIONALLY

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold dark:text-white">Eventify</div>
      <ul className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      {/* Nav Links */}
      <div className="space-x-4">
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">Explore</button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
        >
          Join Us
        </button>
        <button onClick={toggleTheme} className="ml-4">
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Modal for Login/Signup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-md relative w-80">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-400"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            
            {/* Form */}
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary"
              >
                Login/Signup
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
