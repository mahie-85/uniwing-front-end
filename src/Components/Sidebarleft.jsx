import '../Components/Sidebarleft.css'
import { Card } from 'react-bootstrap'

import home from '../Images/sidebarleft/home.png'
import store from '../Images/sidebarleft/store.png'
import blooddonations from '../Images/sidebarleft/blooddonations.png'
import rooms from '../Images/sidebarleft/rooms.png'
import events from '../Images/sidebarleft/events.png'
import { Link } from 'react-router-dom'


const Sidebarleft = () => {
  return (
    <div>

      <div className='sidebar-l'>
        <Card className='sidebar-l-card'>
          <Link to="/dashboard" style={{textDecoration : "none", color : "black"}}>
            <div className='sidebar-l-cardin'>
              <p style={{ margin: "auto" }}> <img src={home} className='sidebar-l-img' /> </p>
              <p className='sidebar-l-names'> General </p>
            </div>
          </Link>
        </Card>

        <Card className='sidebar-l-card'>
          <Link to="/dashboard/blood" style={{ textDecoration: "none", color: "black" }}>
            <div className='sidebar-l-cardin'>
              <p style={{ margin: "auto" }}> <img src={blooddonations} className='sidebar-l-img' /> </p>
              <p className='sidebar-l-names'> Blood Donations </p>
            </div></Link>
        </Card>

        <Card className='sidebar-l-card'>
          <Link to="/dashboard/events" style={{ textDecoration: "none", color: "black" }}>
            <div className='sidebar-l-cardin'>
              <p style={{ margin: "auto" }}> <img src={events} className='sidebar-l-img' /> </p>
              <p className='sidebar-l-names'> Events </p>
            </div>
          </Link>
        </Card>

        <Card className='sidebar-l-card' >
          <Link to="/dashboard/rooms" style={{ textDecoration: 'none', color: "black" }}>
            <div className='sidebar-l-cardin'>
              <p style={{ margin: "auto" }}> <img src={rooms} className='sidebar-l-img' /> </p>
              <p className='sidebar-l-names'> Rooms </p>
            </div>
          </Link>
        </Card>


        <Card className='sidebar-l-card'>
          <Link to='/dashboard/ecommerce' style={{ textDecoration: "none", color: "black" }}>
            <div className='sidebar-l-cardin'>
              <p style={{ margin: "auto" }}> <img src={store} className='sidebar-l-img' /> </p>
              <p className='sidebar-l-names'> Store </p>
            </div>
          </Link>
        </Card>

      </div>

    </div>
  )
}

export default Sidebarleft