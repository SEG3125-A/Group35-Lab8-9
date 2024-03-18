import React from 'react';
import '../Home.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Home() {
    return (
        <div>
    
            <div id="welcome-section">
                <h1>Welcome at ElectrOttawa</h1>
                <p>Your finest phone/laptop repair shop and the best stop for finding your next electronic acquisition.</p>
                <div className="buttons">
                    <button className="button shop-now">SHOP NOW</button>
                    <button className="button book-service">BOOK A SERVICE</button>
                </div>
            </div>
            <div id="image-section">
                <img src="../logo192.png" alt="Person repairing a phone"/>
            </div>
        </div>
    );
}

export default Home;
