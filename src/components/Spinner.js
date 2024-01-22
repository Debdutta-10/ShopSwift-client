import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevval) => --prevval);
      }, 1000);
  
      if (count === 0) {
        navigate(`/${path}`, {
          state: location.pathname,
        });
      }
  
      return () => clearInterval(interval);
    }, [count, navigate, location, path]);
  
    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          Redirecting you in {count} seconds...
        </h1>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      </>
    );
  };
  
  export default Spinner;
