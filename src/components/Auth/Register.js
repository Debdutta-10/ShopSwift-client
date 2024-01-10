import React, { useState } from 'react';
import '../../styles/register.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, address);
    }

    return (
        <>
            <div className="form-container">
                <form className='register-form' onSubmit={handleSubmit}>
                    <h2 style={{textAlign:"center"}}>Register</h2>
                    {/* Name Input */}
                    <div className="form-group  my-3">
                        <label htmlFor="exampleInputName">Name</label>
                        <input
                            type="text"
                            value={name}
                            required
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Enter your name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>

                    {/* Email Input */}
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            value={email}
                            required
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>

                    {/* Phone Input */}
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPhone">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            required
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder="Enter your phone number"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }} />
                    </div>

                    {/* Address Input */}
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputAddress">Address</label>
                        <input
                            type="text"
                            value={address}
                            required
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder="Enter your address"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }} />
                    </div>

                    {/* Password Input */}
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary my-2">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;
