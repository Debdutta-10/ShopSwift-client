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
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './components/Admin/AdminDashboard';
import CreateCategory from './components/Admin/CreateCategory';
import CreateProduct from './components/Admin/CreateProduct';
import ShowUsers from './components/Admin/ShowUsers';
import Profile from './components/User/Profile';
import Orders from './components/User/Orders';
import Products from './components/Admin/Products';
import UpdateProduct from './components/Admin/UpdateProduct';


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
            <Route path='user' element={<Dashboard></Dashboard>}></Route>
            <Route path='user/profile' element={<Profile></Profile>}></Route>
            <Route path='user/orders' element={<Orders></Orders>}></Route>
          </Route>
          <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
            <Route path='admin' element={<AdminDashboard></AdminDashboard>}></Route>
            <Route path='admin/create-categories' element={<CreateCategory></CreateCategory>}></Route>
            <Route path='admin/create-products' element={<CreateProduct></CreateProduct>}></Route>
            <Route path='admin/product/:slug' element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path='admin/products' element={<Products></Products>}></Route>
            <Route path='admin/show-users' element={<ShowUsers></ShowUsers>}></Route>
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
