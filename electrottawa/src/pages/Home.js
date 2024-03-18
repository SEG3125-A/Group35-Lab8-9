import React from 'react';
import '../Home.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Home() {
    return (
    <div class="container">
        <div id="welcome-section">
            <h1>Welcome at ElectrOttawa</h1>
            <p>Your finest phone/laptop repair shop and the best stop for finding your next electronic acquisition.</p>
            <div class="buttons">
                <button class="button shop-now">SHOP NOW</button>
                <button class="button book-service">BOOK A SERVICE</button>
            </div>
        </div>
        <div id="image-section">
            <img src="../logo192.png" alt="Person repairing a phone"/>
        </div>
    </div>
    );
}

export default Home;
