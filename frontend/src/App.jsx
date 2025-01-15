// importing tailwind for global availability
import './styles/globals.css';  

// importing fontawesome for global availability
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// importing the App component and its dependencies
import React from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import Events from './components/Events';
import Home from './pages/Home';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Explore from './pages/Explore';  
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Faqs from './pages/Faqs';
// import Dashboard from './pages/dashboard';
// import Host from './pages/Host';
function App() {

    // Function to get the value of the 'page' query parameter
    const getPage = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get('page');
    };
    // Function to get the value of the 'page' query parameter
    const currentPage = getPage();

  return (
    <div>
      {currentPage !== 'events' && <Navbar />}  
      
      {/* Conditionally render components based on the 'page' parameter */}
      {currentPage === 'events' ? (
        <Events />
      ) : (
        <>
          <Home />
          <About />
          <Partners />
          <Explore />
          <Testimonials />  
          <Contact /> 
          <Faqs />
        </>
      )}

      {currentPage !== 'events' && <Footer />}
    </div>
  );
}

export default App;
