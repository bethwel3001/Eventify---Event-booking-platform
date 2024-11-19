import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="flex flex-col justify-center items-center text-center py-20 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-blue-600">Find Your Next Event</h1>
        <p className="text-gray-700 dark:text-gray-400 mt-4">
          Discover, RSVP, and host events that connect you to your community.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
