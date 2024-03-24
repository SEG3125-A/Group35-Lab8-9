import './styles/booking.css'
import {Link, NavLink} from "react-router-dom"

const Booking = () => {
  return ( 
    <>
    <div className="container-fluid px-0 ">
      <h2 className="m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom border-info">Book Repair</h2>
    </div>
               
    <div class="booking-container">
      <form class="form-section needs-validation">
        <div class="col-12">
          <label for="FName" class="form-label" >First Name</label>
          <input type="text" class="form-control" placeholder="Enter your first name" id="FName" required></input>
        </div>
        <div class="col-12">
          <label for="LName" class="form-label">Last Name</label>
          <input type="text" class="form-control" placeholder="Enter your last name" id="LName" required></input>
        </div>
        <div class="col-12">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="validationCustom03" placeholder="Enter your Email" aria-describedby="emailHelp" required></input>
        </div>
        <div class="col-12">
          <label for="validationCustom04" class="form-label">Service</label>
          <select class="form-control" id="validationCustom04" required>
            <option selected disabled value="">Click to choose a service</option>
            <option value="LBP">Laptop Battery Replacement</option>
            <option value="LSR">Laptop Screen Replair</option>
            <option value="LDR">Laptop Data Recovery</option>
            <option value="LWD">Laptop Water Damage</option>
            <option value="PBR">Phone Battery Replacement</option>
            <option value="PSC">Phone Screen Replair</option>
            <option value="PDR">Phone Data Recovery</option>
            <option value="PWD">Phone Water Damage</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="col-12">
          <label for="validationCustom05" class="form-label">Date</label>
          <input type="date" class="form-control" id="validationCustom05" required></input>
        </div>
        <div class="col-12">
          <label for="validationCustom06" class="form-label">Time</label>
          <select class="form-control" id="validationCustom06" required>
            <option selected disabled value="">Click to choose a time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
        </div>
        <div class="col-12" style={{marginBottom: '0%'}}>
          <button type="submit" style={{color:"white"}}>Book</button>
        </div>
      </form>
    </div>
</>
);
}

export default Booking;