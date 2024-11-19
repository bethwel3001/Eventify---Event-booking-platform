import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
  {/* Main Heading */}
  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
    Welcome to Eventify
  </h1>
  
  {/* Subheading */}
  <p className="text-lg md:text-xl mb-4 text-center animate-fadeIn delay-500">
    Discover and host events that bring your community closer.
  </p>
  
  <h2 className="text-lg font-bold dark:text-white mb-8 animate-fadeIn delay-700">
    Join Eventify today and testify!
  </h2>
  
  {/* Buttons */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center mt-8">
    {/* Explore Events Button */}
    <a
      href="#explore"
      className="text-lg md:text-xl font-semibold px-6 py-3 bg-white text-primary rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl animate-fadeIn delay-1000"
    >
      Explore Events
    </a>
    
    {/* Host an Event Button */}
    <a
      href="#dashboard"
      className="text-lg md:text-xl font-semibold px-6 py-3 border-2 border-white text-white rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-primary hover:shadow-2xl animate-fadeIn delay-1000"
    >
      Host an Event
    </a>
  </div>
</header>


      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Why Eventify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-xl dark:text-white">Easy Event Discovery</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find events tailored to your interests and location.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-xl dark:text-white">Host Effortlessly</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Plan, organize, and host events with ease.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-xl dark:text-white">Engage Communities</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Foster community bonds through shared experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Eventify Today</h2>
        <p className="text-lg mb-6">Sign up to explore or host amazing events!</p>
        <Button text="Sign Up" href="/signup" primary />
      </section>
    </div>
  );
};

export default Home;
