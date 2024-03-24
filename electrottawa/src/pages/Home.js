import React from 'react';
import { Link, NavLink } from "react-router-dom"
import '../Home.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Home() {
    return (
    <div class="container">
        <div id="welcome-section">
            <h1>Welcome To ElectrOttawa</h1>
            <p>Your finest phone/laptop repair shop and the best stop for finding your next electronic acquisition.</p>
            <div class="buttons">
            <Link style={{marginBottom: '5px', color:'white'}} className="btn btn-primary" to="/booking">START SHOPPING</Link>
            <Link style={{marginBottom: '5px', color:'white'}} className="btn btn-primary" to="/services">BOOK A SERVICE</Link>
            </div>
        </div>
        <div id="image-section">
            <img src="/images/OIP.jpeg" alt="Person repairing a phone"/>
        </div>
    </div>
    );
}

export default Home;
