// importing tailwind for global availability
import './styles/globals.css';  

// importing fontawesome for global availability
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// importing the App component and its dependencies
import React from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import Home from './pages/Home';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Explore from './pages/Explore';  
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Faqs from './pages/Faqs';
import Dashboard from './pages/dashboard';
import Host from './pages/Host';
function App() {
  return (
    <div>
      <Navbar />  
      {/* Rendering the Home, About, Contact, and Explore pages */}
      <Home />
      <About />
      <Partners />
      <Explore />
      <Testimonials />  
      <Contact /> 
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
