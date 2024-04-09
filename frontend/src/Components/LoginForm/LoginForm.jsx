import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="bg">
            <div className='wrapper' style={{ backgroundColor: '#a5711e' }}>
                <form actions="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required></input>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required></input>
                        <RiLockPasswordFill className='icon' />
                    </div>
                    <div className="rember-forgot">
                        <a href="#" style={{ color: 'white', display: 'block', textAlign: 'center' }}>Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;