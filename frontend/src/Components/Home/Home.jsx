import React from 'react';
import './Home.css';
const Home = () => {
    return (
    <header class="header">
        <a href="#" class="logo"> App Name </a>

        <i class="fa-solid fa-bars" id="menu-icon"></i>

        <nav class="navbar">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Services</a>
            <a href="/login">Login</a>
        </nav>
    </header>
    )
}
export default Home;