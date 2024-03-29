import React, { useState } from 'react';
import '../../styles/register.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth.js'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/login', { email, password });
            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token

                })
                localStorage.setItem("auth",JSON.stringify(res.data));
                navigate(location.state||'/')
            } else {
                toast.error(res.data.message);
            }


        } catch (error) {
            console.log(error);
            toast.error("Something went Wrong");
        }
    }
    return (
        <>
            <div className="form-container">
                <form className='register-form' onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: "center" }}>Login</h2>

                    {/* Email Input */}
                    <div className="form-group my-4">
                        <input
                            type="email"
                            value={email}
                            required
                            className="form-control reg-input"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>

                    {/* Password Input */}
                    <div className="form-group my-4">
                        <input
                            type="password"
                            required
                            value={password}
                            className="form-control reg-input"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn register-button my-2">
                        Login
                    </button>
                    <button type="button" className="btn register-button my-2" onClick={()=>{navigate('/forgot-password')}}>
                        Forgot Password
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
