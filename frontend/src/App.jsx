// importing tailwind for global availability
import './styles/globals.css';  
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import React from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import Home from './pages/Home';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Explore from './pages/Explore';  
import Partners from './pages/Partners';

function App() {
  return (
    <div>
      <Navbar />  
      {/* Rendering the Home, About, Contact, and Explore pages */}
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
