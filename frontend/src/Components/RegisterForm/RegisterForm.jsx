import React from 'react';
import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className = 'wrapper' style={{backgroundColor:'#a5711e'}}>
            <form actions ="">
                <h1>Register</h1>
                <div className = "input-box">
                    <input type = "text" placeholder = "Username" required></input>
                    <FaUser className = 'icon'/>
                </div>
                <div className = "input-box">
                    <input type = "text" placeholder = "Email ID" required></input>
                    <MdEmail className = 'icon'/>
                </div>
                <div className = "input-box">
                    <input type = "password" placeholder = "Password" required></input>
                    <RiLockPasswordFill className = 'icon'/>
                </div>
                <div className = "input-box">
                    <input type = "password" placeholder = "Confirm Password" required></input>
                    <RiLockPasswordFill className = 'icon'/>
                </div>
                <button type = "submit">Register</button>

                <div className = "register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;