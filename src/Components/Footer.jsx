import React from 'react'
import "../Components/Footer.css"

const Footer = () => {
    return (
        <div className='footer-container' style={{border:"1px solid white"}}>

            <div className="footer">
                  <p className="helpdesk-software"> Helpdesk Software by </p> 
                  <p className="freshdesk"> <a href="#" className="freshdesk-a"> Freshdesk </a> </p> 
                  <p className="freshdesk-line"> | </p> 
                  <p className="cookie-policy"> <a href="#" className="cookie-policy-a"> Cookie Policy </a> </p> 
                  <p className="privacy-policy"> <a href="#" className="privacy-policy-a"> Privacy policy </a> </p> 
            </div>

        </div>
    )
}

export default Footer