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
  
  // Var for login / signup popup
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        
          {/* Mobile Menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden">
            <a href="/" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">
              Home
            </a>
            <a href="/explore" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">
              Explore
            </a>
            <a href="/about" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">
              About
            </a>
            <a href="/contact" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">
              Contact
            </a>

          </div>)}
      {/* </div> */}

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
      
          {/* Sign Up Form */}
          {isLogin ? (
            <form>
              <input
                type="email"
                placeholder="Email"
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
                Login
              </button>
              <p className="text-center mt-4 text-sm dark:text-gray-400">
                Don't have an account?{' '}
                <span
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </p>
            </form>
          ) : (
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary"
              >
                Sign Up
              </button>
              <p className="text-center mt-4 text-sm dark:text-gray-400">
                Already have an account?{' '}
                <span
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
