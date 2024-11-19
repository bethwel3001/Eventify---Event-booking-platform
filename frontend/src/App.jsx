// App.js
// importing tailwind for global availability
import './styles/globals.css';  // Import Tailwind's CSS

import React from 'react';
import Navbar from './components/Navbar';  // Adjust the path if needed
import Footer from './components/Footer';  // Ensure the correct path
function App() {
  return (
    <div>
      <Navbar />  {/* This will render the Navbar */}
      <h1>Welcome to My Website</h1>
      {/* Other content of your app */}

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
