import React from 'react';
import { Link } from 'react-router-dom';

const Footer =() => {
  return (
    <div style={{backgroundColor: 'black', display: 'block'}}>
      <div class='container'>
        <div className='row'>
          <div className='col' style={{fontWeight: "bolder", fontSize: "30px", fontFamily: 'consolas', color: '#f89999', marginTop : '6%'}}> Electrottawa</div>
          <div className='col'>
            <h2 style={{color: '#f89999', textDecoration: "underline"}}>Important Links</h2>
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
          <small style={{color: 'white'}}>Lolita, Amani, Leo, David - ElectrOttawa  © 2024</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;