import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-white dark:bg-gray-900 min-h-screen py-8 flex flex-col md:flex-row">
      {/* Left Column: Form */}
      <div className="md:w-1/2 flex items-center justify-center px-4">
        <form className="w-full max-w-lg p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Contact Us</h1>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input
              type="text"
              className="mt-1 block w-full p-2 rounded border-gray-300 dark:bg-gray-700"
              placeholder="Your name"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              className="mt-1 block w-full p-2 rounded border-gray-300 dark:bg-gray-700"
              placeholder="Your email"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              className="mt-1 block w-full p-2 rounded border-gray-300 dark:bg-gray-700"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </label>
          <button className="bg-primary text-white py-2 px-4 rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>

      {/* Right Column: Join Our Community */}
      <div
        className="md:w-1/2 flex flex-col items-center justify-center px-4 bg-cover bg-center"
        style={
          {
          backgroundImage: "url('')",
        }
      }>
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Join Our Community</h2>
        <p className="text-white text-center mb-6">
          Be part of our growing family! Subscribe to our newsletter to stay updated on the latest
          events.
        </p>
        <div className="flex items-center mb-6 w-3/4">
          <input
            type="email"
            className="w-full p-2 rounded-l-lg border-none"
            placeholder="Your email"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 mb-4">
          Get Started Now
        </button>
        <p className="text-white text-sm italic">Your privacy is our priority</p>
      </div>
    </div>
  );
};
export default Contact;
