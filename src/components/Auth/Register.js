import React, { useState } from 'react';
import '../../styles/register.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/api/v1/auth/register',{name,email,phone,address,password});
            if(res.data.success){
                toast.success(res.data.message);
                navigate('/login')
            }else{
                toast.error(res.data.message);
            }


        }catch(error){
            console.log(error);
            toast.error("Something went Wrong");
        }
    }

    return (
        <>
            <div className="form-container">
                <form className='register-form' onSubmit={handleSubmit}>
                    <h2 style={{textAlign:"center"}}>Register</h2>
                    {/* Name Input */}
                    <div className="form-group  my-3">
                        <input
                            type="text"
                            value={name}
                            required
                            className="form-control reg-input"
                            id="exampleInputName"
                            placeholder="Enter your name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>

                    {/* Email Input */}
                    <div className="form-group my-3">
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

                    {/* Phone Input */}
                    <div className="form-group my-3">
                        <input
                            type="text"
                            value={phone}
                            required
                            className="form-control reg-input"
                            id="exampleInputPhone"
                            placeholder="Enter your phone number"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }} />
                    </div>

                    {/* Address Input */}
                    <div className="form-group my-3">
                        <input
                            type="text"
                            value={address}
                            required
                            className="form-control reg-input"
                            id="exampleInputAddress"
                            placeholder="Enter your address"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }} />
                    </div>

                    {/* Password Input */}
                    <div className="form-group my-3">
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
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;
