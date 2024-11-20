import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqsData = [
  {
    question: "What is Eventify?",
    answer: "Eventify is a platform that helps you discover and host events effortlessly.",
  },
  {
    question: "How can I host an event?",
    answer: "Sign up, create an event, and use our tools to manage and promote it.",
  },
  {
    question: "Is Eventify free to use?",
    answer: "Yes, Eventify offers free plans. However, premium features are available for advanced users.",
  },
  {
    question: "Can I find local events?",
    answer: "Absolutely! Eventify helps you discover events happening near you.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach us through the Contact Us page or email us directly at support@eventify.com.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-white dark:bg-gray-900 min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Frequently Asked Questions</h1>
      <p className="text-2xl font-bold text-center mb-8 dark:text-blue">Your Queries Unswered</p>
      <div className="max-w-4xl mx-auto">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg mb-4 transition-all duration-300 ${
              activeIndex === index
                ? "border-blue-500 bg-gray-100 dark:bg-gray-800"
                : "border-gray-300 dark:border-gray-700"
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full px-4 py-3 focus:outline-none dark:text-gray-200"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {activeIndex === index ? (
                <FiChevronUp className="text-blue-500" />
              ) : (
                <FiChevronDown className="text-blue-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
