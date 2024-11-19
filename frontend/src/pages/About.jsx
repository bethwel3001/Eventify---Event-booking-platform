import React from "react";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">About Eventify</h1>
      <div className="px-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Eventify is your go-to platform for discovering, hosting, and
          connecting through events. Whether you're looking for something
          happening nearby or want to organize your own, we've got you
          covered.
        </p>
        <p>
          Our mission is to bring communities together, one event at a time.
          Join us and make unforgettable memories with your community.
        </p>
      </div>
    </div>
  );
};

export default About;
