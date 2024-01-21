import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const Spinner = () => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevval)=>--prevval)
        },1000)
        count === 0 && navigate('/login',{
            state: location.pathname
        })
        return ()=> clearInterval(interval)
    },[count,navigate,location])
    return (
        <>  
            <h1 style={{textAlign:"center"}}>Redirecting you in {count} seconds...</h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                </div>
            </div>
        </>
    )
}

export default Spinner
