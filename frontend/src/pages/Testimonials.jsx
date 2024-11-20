import React, { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "Eventify helped me organize my first charity event effortlessly!",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2,
    name: "Mark Spencer",
    feedback: "A fantastic platform for connecting with like-minded people.",
    image: "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 3,
    name: "Sophia Lee",
    feedback: "I discovered so many amazing events happening near me. Highly recommend!",
    image: "https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 4,
    name: "James Carter",
    feedback: "Eventify made hosting my tech meetup a breeze. Thank you!",
    image: "https://plus.unsplash.com/premium_photo-1683140625076-22e9f46d03a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 5,
    name: "Emma Watson",
    feedback: "Great platform for fostering community connections. Love it!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
  },
  {
    id: 5,
    name: "Olivia wold",
    feedback: "Great platform for fostering community connections. Love it!",
    image: "https://images.unsplash.com/photo-1660754696399-991bb4c242b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < testimonialsData.length ? prevIndex + 3 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : testimonialsData.length - 3
    );
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div id="testimonials" className="bg-white dark:bg-gray-900 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
        Testimonials
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold dark:text-white mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 px-4">
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white py-2 px-4 rounded-full transform hover:scale-110 transition"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-full transform hover:scale-110 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
