import Login from './Components/Login'
import Signup from './Components/Signup';
import Footer from './Components/Footer'
import "./App.css"


// import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router-dom';
import MainDashboard from './Components/MainDashboard';
import NavbarSample from './Components/NavbarSample';
import Events from './Components/Events';
import EventForm from './Components/EventForm';
import Blood from './Components/Blood';
import BloodForm from './Components/BloodForm';
import Ecommerce from './Components/Ecommerce';
import EcommerceForm from './Components/EcommerceForm';
import Room from './Components/Room';
import RoomForm from './Components/RoomForm';

const App = () => {
  return (

    <div>
      <NavbarSample />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path='/dashboard/events' element={<Events />} />
        <Route path='/dashboard/blood' element={<Blood />} />
        <Route path='/dashboard/rooms' element={<Room />}/>
        <Route path='/dashboard/ecommerce' element={<Ecommerce />} />
        <Route path='/dashboard/blood/forms' element={<BloodForm />} />
        <Route path='/dashboard/events/forms' element={<EventForm />} />
        <Route path='/dashboard/ecommerce/forms' element={<EcommerceForm />} />
        <Route path='/dashboard/rooms/forms' element={<RoomForm />} />
      </Routes>
    
      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Footer/> */}
      {/* <Sidebarleft/> */}
      {/* <Sidebarrirght/> */}
      {/* <Dashboard/> */}
      <Footer />
    </div>
  )
}

export default App