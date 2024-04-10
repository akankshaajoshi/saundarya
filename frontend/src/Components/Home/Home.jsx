import "./Home.css";
import React from "react";
import indu from "./indu.jpg";
import akanksha from "./akanksha.jpg";
import FAQMenu from "./FAQMenu.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <a className="logo" style={{ fontStyle: "italic" }}>
          SAUNDARYA
        </a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <Link to="/analyse">Analyse</Link>
          <Link to="/try-on">Try on AR</Link>
          <Link to="/login">Login</Link>
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
              <Link to="/analyse">
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

      {/* <section className="products-section" id="products">
        <h2>Browse Products</h2>
        <Carousel>
          <div>
            <img
              src="https://assets.vogue.in/photos/62fcc42c73e663a411081140/master/w_1600%2Cc_limit/ILIA%2520Limitless%2520Lash%2520Mascara.jpg"
              alt="Product 1"
              className="product-image"
            />
            <p className="legend">NX Cosmetics</p>
          </div>
          <div>
            <img
              src="https://media.self.com/photos/57dc14dbbcf2c5c50b7d004a/master/pass/makeup-skin-tone-nars-orgasm-blush.jpg"
              alt="Product 2"
              className="product-image"
            />
            <p className="legend">Maybelliene XX</p>
          </div>
          <div>
            <img
              src="https://d2hy56m2o6qi9y.cloudfront.net/wp-content/uploads/2020/10/12171309/1-Natural-Glow.jpg"
              alt="Product 3"
              className="product-image"
            />
            <p className="legend">Huda Contour</p>
          </div>
          <div>
            <img
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1604633691-mented-1604633674.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Product 3"
              className="product-image"
            />
            <p className="legend">Mented Lip#23</p>
          </div>
        </Carousel>
      </section> */}

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
          <p>&copy; 2024 Saundarya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
