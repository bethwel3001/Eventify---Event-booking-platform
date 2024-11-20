
// importing tailwind for global availability
import './styles/globals.css';  // Import Tailwind's CSS
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

import React from 'react';
import Navbar from './components/Navbar';  // Adjust the path if needed
import Footer from './components/Footer';  // Ensure the correct path
import Home from './pages/Home';  // Ensure the correct path
import About from './pages/About';  // Ensure the correct path
import Contact from './pages/Contact';  // Ensure the correct path
import Explore from './pages/Explore';  // Ensure the correct path
import Partners from './pages/Partners';

function App() {
  return (
    <div>
      <Navbar />  {/* This will render the Navbar */}
      {/* <h1>Welcome to My Website</h1> */}
      {/* Other content of your app */}


      {/* Render the Home, About, Contact, and Explore pages */}
      <Home />
      <About />
      <Partners />
      <Contact />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
