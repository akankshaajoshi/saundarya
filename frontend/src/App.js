import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from '././Components/RegisterForm/RegisterForm';
import Home from './Components/Home/Home';
import Upload from './Components/Upload/Upload';
import ColorAnalyzer from "./Components/ColorAnalyzer/ColorAnalyzer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/test" element={<ColorAnalyzer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;