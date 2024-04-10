import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import img1 from "./img1.jpeg";
import indu from "./indu.jpg";
import akanksha from "./akanksha.jpg";
import FAQMenu from "./FAQMenu.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the visibility of the answer
  const toggleAnswer = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div>
      <nav className="navbar">
        <a className="logo" style={{ fontStyle: "italic" }}>
          SOUNDARYA
        </a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#FAQ">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="/login">Login</a>
        </div>
      </nav>
      <section className="home-container" id="about">
        <div className="home-box">
          <div className="content-wrapper">
            <div className="text-content">
              <h1>About</h1>
              <p>
                Introducing "Soundarya" - your personal beauty advisor in your pocket! Are you tired of guessing which
                makeup shades and clothing colors flatter your unique skin tone? Look no further! Soundarya uses
                advanced AI algorithms to analyze your skin tone and suggest the perfect makeup and dressing color
                palette tailored just for you.
              </p>
              <Link to="/test">
                <button className="button1">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="features" id="features">
        <h2 class="heading">
          <span>Features</span>
        </h2>
        <div class="features-container">
          <div class="features-box">
            <h3>Personalized palette</h3>
          </div>
          <div class="features-box">
            <h3>Best Reccomendations</h3>
          </div>
          <div class="features-box">
            <h3>Augmented Reality</h3>
          </div>
          <div class="features-box">
            <h3>Easy to go </h3>
          </div>
        </div>
      </section>
      <section className="faq-section" id="FAQ">
        <FAQMenu />
      </section>
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-item">
            <img src={akanksha} alt="" />
            <p>Developer</p>
            <p>Indu Madamanchi</p>
            <p style={{ color: "rgb(0, 0, 88)" }}>email: indu.madamanchi@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src={indu} alt="" />
            <p>Developer</p>
            <p>Akanksha Joshi</p>
            <p style={{ color: "rgb(0, 0, 88)" }}>email: akanksha.joshi@gmail.com</p>
          </div>
        </div>
      </section>
      <footer>
        <div style={{ backgroundColor: "black", height: "60px", color: "white", textAlign: "center", padding: "20px" }}>
          <h>All Rights Reserved</h>
        </div>
      </footer>
    </div>
  );
};

export default Home;
