import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "././Components/RegisterForm/RegisterForm";
import Home from "./Components/Home/Home";
import ColorAnalyzer from "./Components/ColorAnalyzer/ColorAnalyzer";
import TryOn from "./Components/TryOn/TryOn";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<ColorAnalyzer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/try-on" element={<TryOn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
