
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';      // Importing Home page
import About from './pages/About';    // Importing About page
import Contact from './pages/Contact'; // Importing Contact page
import Navbar from './components/Navbar'; // Importing Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will be visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />          {/* Home Route */}
          <Route path="/about" element={<About />} />    {/* About Route */}
          <Route path="/contact" element={<Contact />} />{/* Contact Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
