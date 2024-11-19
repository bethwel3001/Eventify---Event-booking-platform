import React from "react";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Contact Us</h1>
      <form className="max-w-lg mx-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
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
  );
};

export default Contact;
