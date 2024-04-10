import React, { useState, useContext } from "react";
import "./RegisterForm.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
      passwordConfirm,
    };
    console.log(userData);
    try {
      const response = await axios.post("https://saundarya.onrender.com/api/v1/auth/signup", userData);
      login(response.data.email, response.data.password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="wrapper" style={{ backgroundColor: "rgba(169, 121, 108, 0.75)" }}>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required></input>
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            required
          ></input>
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          ></input>
          <RiLockPasswordFill className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Confirm Password"
            required
          ></input>
          <RiLockPasswordFill className="icon" />
        </div>
        <button type="submit">Register</button>
        <div className="register-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
