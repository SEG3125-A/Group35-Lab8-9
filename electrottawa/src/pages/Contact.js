
import '../contact.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!firstName || !lastName || !email || !message) {
      alert('Please fill out all fields.');
      return; 
    }
    alert('Form submitted successfully!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };
    return (
        <div className="contact-container">
           
                <form className="form-section" onSubmit={handleSubmit}>
                    <div className="form-section">
                <h2>Contact</h2>
                <form action="/submit-form" method="post">
                    <div className="input-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" placeholder="Please provide your first name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Please provide your last name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Please enter a valid email address"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Please enter your message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </form>
            
            <div className="info-section">
                <div id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11194.62002875385!2d-75.58833130000001!3d45.456607749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1710720117189!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div class="contact-info">
                    <p><i class="fas fa-map-marker-alt"></i> <strong>123 University Street, Ottawa, ON, L1L1L1</strong></p>
                    <p><i class="fas fa-envelope"></i> <strong>Email:</strong> contact@electrottawa.ca</p>
                    <p><i class="fas fa-phone"></i> <strong>Phone:</strong> (343) 123 4567</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;
