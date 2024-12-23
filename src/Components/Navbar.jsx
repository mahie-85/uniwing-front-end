// import React from 'react'
import '../Components/Navbar.css'
import navlogo from '../Images/navlogo.png'

import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';


const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <div className='navbar'>

        <div className='nav-1'>

          <img src={navlogo} className='nav-img' 
          
          
          
          
          
          />
          <a className='nav-name' style={{color : "#13344D"}}> StudentApp </a>

        </div>

        <div className='nav-2'>

          <a className='nav-home' style={{color : "#13344D"}}> Home </a>
          <a className='nav-kb' style={{color : "#13344D"}}> Knowledge base </a>
          <p style={{margin: '0px'}}> <button className='nav-btn' style={{color : "#13344D"}}> Submit a ticket </button> </p>
          <p className='nav-ls' style={{margin: '0px'}}>
            <a className='nav-login' style={{color : "#13344D"}}> Login </a>
            <p style={{margin: '0px'}}> | </p>
            <a className='nav-signup' style={{color : "#13344D"}}> Signup </a>
          </p>

        </div>

        {/* Mobile Nav (Offcanvas Icon) */}
        <div className="off-mobile">
            <i
              className="bi bi-list icn"
              onClick={handleShow}
              style={{ fontSize: '2rem', cursor: 'pointer', marginRight: '20px' }}
            />
        </div>

        {/* Offcanvas for mobile */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <div className="off-login-signup" style={{ position: 'relative' }}>
                <a href="/" className="off-ls" style={{color : "#13344D", textDecoration:'none'}}>login</a>
                <div className="off-line">|</div>
                <a href="/signup" className="off-ls" style={{color : "#13344D", textDecoration: 'none'}}>sign up</a>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
               <div className="off-home">
                <i className="bi bi-house"></i> Home
              </div>
              <div className="off-kb">
                <i className="bi bi-book"></i> Knowledge Base
              </div>
              <div className="off-btn">
                <button className="off-btnin">Submit a ticket</button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

      </div>


    </div>
  )
}

export default Navbar