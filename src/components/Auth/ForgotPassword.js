import React, { useState } from 'react';
import '../../styles/register.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/forgot-password', { email, newPassword, answer });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login')
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
                    <h2 style={{ textAlign: "center" }}>Reset Password</h2>

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


                    <div className="form-group my-4">
                        <input
                            type="text"
                            value={answer}
                            required
                            className="form-control reg-input"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Favourite Food"
                            onChange={(e) => {
                                setAnswer(e.target.value);
                            }} />
                    </div>


                    <div className="form-group my-4">
                        <input
                            type="password"
                            required
                            value={newPassword}
                            className="form-control reg-input"
                            id="exampleInputPassword1"
                            placeholder="Enter New Password"
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                            }} />
                    </div>


                    <button type="submit" className="btn register-button my-2">
                        Reset
                    </button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword
