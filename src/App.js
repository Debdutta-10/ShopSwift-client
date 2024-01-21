// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Register from './components/Auth/Register';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Login from './components/Auth/Login';
import Dashboard from './components/User/Dashboard';
import PagenotFound from './components/PagenotFound';
import Footer from './components/Footer';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './components/Auth/ForgotPassword';


function App() {
  return (
    <Router>
      <>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>} />
          <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
            <Route path='' element={<Dashboard></Dashboard>}></Route>
          </Route>
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
