import React, { useState } from "react";
import { Link } from "react-scroll";
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
  const [isLogin, setIsLogin] = useState(true);  
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e, endpoint) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:5000/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData)
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = data.redirect_url; // Redirect to dashboard
            } else {
                setErrorMessage(data.error || 'Something went wrong');
            }
        } catch (error) {
            setErrorMessage('Error connecting to server');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold dark:text-white">Eventify</div>
      <ul className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
        <li>
        <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="text-blue-500 font-bold"
            className="cursor-pointer hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
        <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            About
          </Link>
        </li>
        <li>
        <Link
            to="partners"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Partners
          </Link>
        </li>
        <li>
        <Link
            to="explore"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Explore
          </Link>
        </li>
        <li>
        <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Testimonials
          </Link>
        </li>
        <li>
        <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </Link>
        </li>
        <li>
        <Link
            to="faqs"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            FAQ's
          </Link>
        </li>
        
      </ul>
      {/* Nav Links */}
      <div className="space-x-4">
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
 <div
 className={`md:hidden bg-white shadow-lg p-4 space-y-4 fixed top-16 left-4 right-4 rounded-xl transition-transform duration-300 ${
   isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
 }`}
>

    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
    >
      ✕
    </button>

    <Link
      to="home"
      smooth={true}
      duration={500}
      className="block cursor-pointer hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
    <Link
      to="about"
      smooth={true}
      duration={500}
      className="block cursor-pointer hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
    <Link
      to="testimonials"
      smooth={true}
      duration={500}
      className="block cursor-pointer hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Testimonials
    </Link>
    <Link
      to="faqs"
      smooth={true}
      duration={500}
      className="block cursor-pointer hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      FAQs
    </Link>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      className="block cursor-pointer hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
  </div>
)}

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
            <form onSubmit={(e) => handleSubmit(e, 'login')}>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary"
                // onChange={handleChange}
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
            <form onSubmit={(e) => handleSubmit(e, 'signup')}>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-4 p-2 rounded-md border dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary"
                onClick={(e) => handleSubmit(e, 'signup')}
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
            {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
