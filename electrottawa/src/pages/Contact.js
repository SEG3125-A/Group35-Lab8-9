
import React from 'react';
import '../contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact(){
  return ( 

    <div class="contact-container">
        <div class="form-section">
            <h2>Contact</h2>
            <form action="/submit-form" method="post">
                <div class="input-group">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" placeholder="please provide your first name"/>
                </div>
                <div class="input-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" placeholder="please provide your last name"/>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="please enter a valid email address"/>
                </div>
                <div class="input-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="please enter a valid message"></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
          <div class="info-section">
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
                <p><strong>123 University Street, Ottawa, ON, L1L1L1</strong></p>
                <p><strong>Email:</strong> contact@electrottawa.ca</p>
                <p><strong>Phone:</strong> (343) 123 4567</p>
            </div>
        </div>
    </div>

   );
}
 
export default Contact;