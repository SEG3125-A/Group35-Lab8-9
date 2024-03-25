import React from 'react';
import { Link } from "react-router-dom"
import '../Home.css';

function Home() {
    return (
    <div className="container-fluid d-flex flex-row containerH">
        {/* <div className='row'> */}
        <div className='col-md-9' style={{color: 'white', paddingTop: '20%'}} >
            <h1>Welcome To ElectrOttawa</h1>
            <p>Your finest phone/laptop repair shop and the best stop for finding your next electronic acquisition.</p>
            {/* <div class="buttons"> */}
            <Link style={{marginBottom: '5px', color:'black', fontWeight: 'bold', marginRight: '10px'}} className="btn btn-light" to="/products">START SHOPPING</Link>
            <Link style={{marginBottom: '5px', color:'black', fontWeight: 'bold'}} className="btn btn-light" to="/services">BOOK A SERVICE</Link>
            {/* </div> */}
        </div>
        <div className='col-md-3' id="image-section">
            <img style={{height:'700px', width: 'auto'}} src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlcGFyYXRpb24lMjBoYXJkd2FyZXxlbnwwfHwwfHx8MA%3D%3D" alt="Person repairing a phone"/>
        </div>
        </div>
    );
}

export default Home;
