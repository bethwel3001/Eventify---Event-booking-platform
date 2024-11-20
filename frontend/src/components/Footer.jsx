import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [companyNameColor, setCompanyNameColor] = useState("text-primary");

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["text-primary", "text-secondary", "text-accent"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCompanyNameColor(randomColor);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Name */}
        <div className="text-lg font-bold">
          <h1 className={`text-2xl ${companyNameColor} transition-all duration-500`}>Eventify</h1>
          <p className="mt-2">Connecting people through events.</p>
        </div>

        {/* Media Icons */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition duration-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#explore" className="hover:underline">Explore</a></li>
            <li><a href="#dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-secondary transition-all duration-300"
          >
            <FontAwesomeIcon icon={faArrowUp} /> Back to Top
          </button>
          <br />
          <div className="text-lg font-bold">
          <h1 className={`text-2xl ${companyNameColor} transition-all duration-500`}>Next-space</h1>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2024 Eventify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
