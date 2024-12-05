import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router components
import './App.css'; 

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Header/Header';
import JobFeed from './Pages/JobFeed/JobFeed';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        
        <Routes>
          <Route path="/" element={<JobFeed />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobfeed" element={<JobFeed />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
