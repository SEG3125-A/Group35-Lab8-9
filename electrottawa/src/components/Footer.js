import React from 'react';
import { Link } from 'react-router-dom';

const Footer =() => {
  return (
    <div style={{backgroundColor: 'black', display: 'block'}}>
      <div class='container'>
        <div className='row'>
          <div className='col' style={{fontWeight: "bolder", fontSize: "30px", fontFamily: 'consolas', color: '#b22222', marginTop : '6%'}}> Electrottawa</div>
          <div className='col' style={{marginTop: '20px'}}>
            <h2 style={{color: '#f8e1e1', textDecoration: "none"}}>Important Links</h2>
            <Link style={{display: 'block', color: 'white', textDecoration: 'none'}} to='/'>Home</Link>
            <Link style={{display: 'block', color: 'white', textDecoration: 'none'}} to='/services'>Services</Link>
            <Link style={{display: 'block', color: 'white', textDecoration: 'none'}} to='/products'>Products</Link>
            <Link style={{display: 'block', color: 'white', textDecoration: 'none'}} to='/contact'>Contact us</Link>

            <Link style={{display: 'block', color: 'white', textDecoration: 'none'}} to='/faq'>FAQ</Link>
          </div>
          
        </div>
      </div>
      <section>
        <div class='col'style={{textAlign: 'center', marginTop: '25px'}}>
          <small style={{color: 'white'}}>Lolita, Amani, Leon, David - ElectrOttawa  © 2024</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;