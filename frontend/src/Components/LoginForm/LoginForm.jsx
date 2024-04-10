import React, { useState, useContext } from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://saundarya.onrender.com/api/v1/auth/login", { email, password });
      login(email, password);
      if (response) navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg">
      <div className="wrapper" style={{ backgroundColor: "rgba(169, 121, 108, 0.75)" }}>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="remember-forgot">
            <a href="#" style={{ color: "white", display: "block", textAlign: "center" }}>
              Forgot Password?
            </a>{" "}
            <Link
              to="/register"
              style={{ color: "white", display: "block", textAlign: "center", fontWeight: "semibold" }}
            >
              Register
            </Link>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
