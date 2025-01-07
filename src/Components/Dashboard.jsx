import '../Components/Dashboard.css'; 
import userlogo from '../Images/dashboard/userlogo.png'; 
import { Card, CardBody, CardHeader } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="d-posts-container">
        {/* Make a Post Section */}
        <div className="d-postcard">
          <Card className="d-makepost-card">
            <CardHeader>
              <div className="d-makepost-card-header">
                <i className="bi bi-pen"></i> Make a post
              </div>
            </CardHeader>
            <CardBody>
              <div className="d-makepost-body">
                <img src={userlogo} className="d-makepost-userlogo" alt="User Logo" />
                <span className="d-makepost-username">Varun Kumar G</span>
              </div>
              <div>
                <input type="text" className="d-makepost-input" placeholder="What's on your mind?" />
              </div>
              <div className="d-makepost-addoptions">
                <p className="d-makepsot-addpic">
                  <i className="bi bi-folder-plus"></i> Photos, Videos, Documents...
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sample Card for Events */}
        <div className="d-postcard">
          <Card className="d-postcard-card">
            <CardHeader className="d-postcard-header">
              <div className="d-postcard-heading">
                <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                <span className="d-postcard-username">Varun Kumar G</span>
                <div className="d-postcard-event-heading">Event: Charity Run</div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="d-postcard-content">
                <p className="d-postcard-description">Join us for a charity run to raise funds for the local animal shelter. Everyone is welcome!</p>
                <p><strong>Date:</strong> 25th Dec, 2024</p>
                <p><strong>Location:</strong> Central Park, New York</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sample Card for Room Details */}
        <div className="d-postcard">
          <Card className="d-postcard-card">
            <CardHeader className="d-postcard-header">
              <div className="d-postcard-heading">
                <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                <span className="d-postcard-username">Varun Kumar G</span>
                <div className="d-postcard-room-heading">Room for Rent</div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="d-postcard-content">
                <p className="d-postcard-description">Spacious room available for rent in a shared apartment. Fully furnished and close to metro stations.</p>
                <p><strong>Rent:</strong> $500/month</p>
                <p><strong>Location:</strong> 123 Main Street, Apartment 4B</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sample Card for Blood Donation */}
        <div className="d-postcard">
          <Card className="d-postcard-card">
            <CardHeader className="d-postcard-header">
              <div className="d-postcard-heading">
                <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                <span className="d-postcard-username">Varun Kumar G</span>
                <div className="d-postcard-blood-heading">Blood Donation Drive</div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="d-postcard-content">
                <p className="d-postcard-description">Help save lives by donating blood. Every donation counts!</p>
                <p><strong>Date:</strong> 28th Dec, 2024</p>
                <p><strong>Location:</strong> City Blood Bank, 45 Park Avenue</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sample Card for Product Details */}
        <div className="d-postcard">
          <Card className="d-postcard-card">
            <CardHeader className="d-postcard-header">
              <div className="d-postcard-heading">
                <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                <span className="d-postcard-username">Varun Kumar G</span>
                <div className="d-postcard-product-heading">Product: Wireless Headphones</div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="d-postcard-content">
                <p className="d-postcard-description">Brand new wireless headphones with noise cancellation feature. Perfect for music lovers!</p>
                <p><strong>Price:</strong> $120</p>
                <p><strong>Available at:</strong> Tech Store, 789 Tech Street</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








// import React from 'react';
// import '../Components/Dashboard.css';
// import userlogo from '../Images/dashboard/userlogo.png';
// import { Card, CardBody, CardHeader } from 'react-bootstrap';

// const Dashboard = () => {
//   return (
//     <div>
//       <div className='dashboard'>
//         <div className='d-makepost'>
//           <Card className='d-makepost-card'>

//             <CardHeader>
//               <div className='d-makepost-card-header'>
//                 <i className="bi bi-pen" ></i> Make a post!
//               </div>
//             </CardHeader>

//             <CardBody>

//               <div className="d-makepost-body">
//                 <img src={userlogo} className='d-makepost-userlogo' alt="User Logo" />
//                 <span className="d-makepost-username"> Varun kumar G</span>
//               </div>

//               <div>
//                 <input type='text' className='d-makepost-input' placeholder="varun what's on your mind?" />
//               </div>

//               <div className='d-makepost-addoptions'>
//                 <p className='d-makepsot-addpic'>
//                   <i className="bi bi-folder-plus"></i> Photos, Videos, Documents ...
//                 </p>
//               </div>


//             </CardBody>






//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
















// import React from 'react'
// import '../Components/Dashboard.css'
// import userlogo from '../Images/dashboard/userlogo.png'
// import { Card } from 'react-bootstrap'


// const Dashboard = () => {
//   return (
//     <div>
//         <div className=' dashboard'>

//           <div className='d-makepost'>
//             <Card className='d-makepost-card'>
//             <div className='d-makepost-card-heading'> <i class="bi bi-pen-fill"/> Make a post </div>
//             <div>
//               <img src={userlogo} className='d-makepost-img'/>
//               <input type='text' className='d-makepost-input'/>
//             </div>
//             <div className='d-makepost-addoptions'>
//               <p className='d-makepsot-addpic'>  <i class="bi bi-folder-plus"></i> Photos, Videos, Documents ...  </p >

//             </div>
//             </Card>
//           </div>



//         </div>
//     </div>
//   )
// }

// export default Dashboard