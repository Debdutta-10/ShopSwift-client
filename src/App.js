// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Register from './components/Auth/Register';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import PagenotFound from './components/PagenotFound';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
