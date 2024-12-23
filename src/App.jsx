import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup';
import Footer from './Components/Footer'
import "./App.css"


// import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebarleft from './Components/Sidebarleft';
import Sidebarrirght from './Components/Sidebarright';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import MainDashboard from './Components/MainDashboard';
import NavbarSample from './Components/NavbarSample';

const App = () => {
  return (

    <div>
      <NavbarSample />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/dashboard" element={<MainDashboard />} />
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