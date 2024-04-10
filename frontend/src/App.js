import "./App.css";
import logo from "./logo.svg";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "././Components/RegisterForm/RegisterForm";
import Home from "./Components/Home/Home";
import Upload from "./Components/Upload/Upload";
import ColorAnalyzer from "./Components/ColorAnalyzer/ColorAnalyzer";
import TryOn from "./Components/TryOn/TryOn";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<ColorAnalyzer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/try-on" element={user ? <TryOn /> : <LoginForm />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
