// Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import '../styles/header.css';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    })
    localStorage.removeItem('auth');
    toast.success("Logged Out Successfully");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#002244", color: "white" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ShopSwift <FaCartShopping /></Link>
        <button className="navbar-toggler" style={{ color: "white", fontSize: "1.2rem" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/category">Category</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" exact to="/about">About</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" exact to="/contact">Contact us</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" exact to="/policy">Policy</NavLink></li>
              </ul>
            </li>
            {
              !auth.user ? (<>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li></>) : (<>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {auth?.user?.name==="admin"?"Admin":"User"}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`}>DashBoard</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><NavLink className="dropdown-item" to="/login" onClick={handleLogout}>Logout</NavLink></li>
                    </ul>
                  </li>
                  <li>

                  </li></>)
            }

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart (0)</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
