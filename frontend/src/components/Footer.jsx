import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Eventify. All Rights Reserved.
        </p>
        <ul className="flex gap-4 mt-2 md:mt-0">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
