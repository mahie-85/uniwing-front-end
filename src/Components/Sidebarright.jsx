import React from 'react'
import '../Components/Sidebarright.css'
import blooddonations from '../Images/sidebarleft/blooddonations.png'
import { Card } from 'react-bootstrap'


const Sidebarrirght = () => {
  return (
    <div>

      <div className='sidebar-r'>
        <Card className='sidebar-r-card1'>
          <div className='sidebar-r-cardin1'>
            <p style={{margin :"auto"}}> <img src={blooddonations} className='sidebar-r-img'/> </p>
            <p className='sidebar-r-name'> EMERGENCY BLOOD Requirements! </p>
            <marquee className='sidebar-r-marquee' behavior="scroll" direction="left" scrollamount="5"> 'A' - postive blood group is needed - Contact : <a className='sidebar-r-a' href="tel:+911234567890"> 1234567890 </a> , 'B' - postive blood group is needed - Contact : <a className='sidebar-r-a' href="tel:+911234567890"> 1234567890 </a> , 'O' - postive blood group is needed - Contact : <a className='sidebar-r-a' href="tel:+911234567890"> 1234567890 </a> </marquee>
          </div>
        </Card>

        <Card className='sidebar-r-card2'>
          <div className='sidebar-r-cardin2'>
            <p className='sidebar-r-name'> RECENT UPDATES </p>
            <p className='sidebar-r-content' style={{textAlign:'left'}}>  <a className='sidebar-r-a' href='' style={{fontSize:'medium'}}> Events: </a> <br/> Varun kumar G from SKACAS has been recently posted an event called 'AI-TECHHERO' <br/> <a href=''  style={{fontSize:'small',fontWeight:'400'}} > Click here </a> </p> 
          
          </div>
        </Card>
      </div>

    </div>
  )
}

export default Sidebarrirght