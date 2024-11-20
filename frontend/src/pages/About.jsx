import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Animation library

const About = () => {
  // Animation on load
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about" className="bg-white dark:bg-gray-900 min-h-screen py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 dark:text-white"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        About Eventify
      </motion.h1>

      <div className="px-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        <motion.p
          className="mb-4 text-lg"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Eventify is your go-to platform for discovering, hosting, and
          connecting through events. Whether you're looking for something
          happening nearby or want to organize your own, we've got you
          covered.
        </motion.p>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-lg"
        >
          Our mission is to bring communities together, one event at a time.
          Join us and make unforgettable memories with your community.
        </motion.p>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 dark:text-white"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <motion.div
            className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-4 hover:border-yellow-500 animate-on-scroll"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h3 className="font-bold text-xl text-white">Easy Event Discovery</h3>
            <p className="text-gray-100">
              Find events tailored to your interests and location.
            </p>
             {/* Join Now Button */}
      <motion.button
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now
      </motion.button>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-4 hover:border-green-500 animate-on-scroll"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h3 className="font-bold text-xl text-white">Host Effortlessly</h3>
            <p className="text-gray-100">
              Plan, organize, and host events with ease, try and testify.
            </p>
             {/* Join Now Button */}
      <motion.button
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now
      </motion.button>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-4 hover:border-blue-500 animate-on-scroll"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h3 className="font-bold text-xl text-white">Engage Communities</h3>
            <p className="text-gray-100">
              Foster community bonds through shared experiences.
            </p>
             {/* Join Now Button */}
      <motion.button
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now
      </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
