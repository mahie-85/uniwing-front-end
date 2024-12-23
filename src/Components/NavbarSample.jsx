// import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/Navbar.css'
import navlogo from '../Images/navlogo.png'
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';


const NavbarSample = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // NAVIGATE 


  return (
    <div>

      <div className='navbar' style={{backgroundColor : "#13344D", height : "75px"}}>

        <div className='nav-1'>

          <img src={navlogo} className='nav-img'/>
          <a className='nav-name' style={{color : "white"}}> StudentApp </a>

        </div>

        <div className='nav-2'>

          <a className='nav-home'> Home </a>
          <a className='nav-kb'> Knowledge base </a>
          <p style={{margin: '0px'}}> <button className='nav-btn' style={{color : "#13344D"}}> Submit a ticket </button> </p>
          <p className='nav-ls' style={{margin: '0px'}}>
            <Link to="/" className='nav-login' style={{color : "white"}}> Login </Link>
            <p style={{margin: '0px', color : 'white'}}> | </p>
            <Link to="/signup" className='nav-signup' style={{color : "white"}}> Signup </Link>
          </p>

        </div>

        {/* Mobile Nav (Offcanvas Icon) */}
        <div className="off-mobile">
            <i
              className="bi bi-list icn"
              onClick={handleShow}
              style={{ fontSize: '2rem', cursor: 'pointer', marginRight: '20px', color : "white" }}
            />
        </div>

        {/* Offcanvas for mobile */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <div className="off-login-signup" style={{ position: 'relative' }}>
                <Link to="/" className="off-ls" style={{color : "#13344D", textDecoration:'none',cursor : "pointer"}}>login</Link>
                <div className="off-line">|</div>
                <Link to="/signup" className="off-ls" style={{color : "#13344D", textDecoration: 'none', cursor : "pointer"}}>sign up</Link>
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

export default NavbarSample