import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Sidebarleft from './Sidebarleft';
import Sidebarrirght from './Sidebarright';
import { useNavigate } from 'react-router-dom';

const BloodForm = () => {

    const navigate = useNavigate()

    const [bloodDonation, setBloodDonation] = useState({
        name: '', contact: 0, bloodgroup: '', hospitalname: '', hospitallocation: '', hospitalpincode: 0, status: ''
    })

    const handleInputChange = (e) => {
        setBloodDonation({ ...bloodDonation, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!bloodDonation.name || !bloodDonation.contact || !bloodDonation.hospitalname || !bloodDonation.hospitallocation || !bloodDonation.hospitalpincode || !bloodDonation.status) {
            Swal.fire({
                title: "All Field Are Mandatory !!!",
                icon: 'warning'
            })
        } else {
            createProduct()
        }
        setBloodDonation({ name: '', contact: 0, bloodgroup: '', hospitalname: '', hospitallocation: '', hospitalpincode: 0, status: '' })
    }

    const createProduct = async () => {
        try {
            const response = await axios.post("http://localhost:8080/blood", bloodDonation)
            console.log(response)
            Swal.fire({
                title: "Successfully Blood Donation Details Added",
                icon: "success"
            })
            navigate('/dashboard/blood')

        } catch (error){
            Swal.fire({
                title: `${error}`,
                icon: "warning"
            })
        }
    }

    return (
        < div style={{display : "flex", flexDirection : "row"}}>

            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div className="container" style={{ paddingTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                <h1>BLOOD FORM</h1>
                <div className="container" style={{ paddingTop: "50px", maxWidth: "600px" }}>
                    <form onSubmit={handleSubmit} style={{width : 'auto'}}>
                        {/* Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={bloodDonation.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                        </div>

                        {/* Contact */}
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                name="contact"
                                value={bloodDonation.contact}
                                onChange={handleInputChange}
                                placeholder="Contact"
                            />
                        </div>

                        {/* Blood Group */}
                        <div className="mb-3">
                            <label htmlFor="bloodgroup" className="form-label">Blood Group</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bloodgroup"
                                name="bloodgroup"
                                value={bloodDonation.bloodgroup}
                                onChange={handleInputChange}
                                placeholder="Blood Group"
                            />
                        </div>

                        {/* Hospital Name */}
                        <div className="mb-3">
                            <label htmlFor="hospitalname" className="form-label">Hospital Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hospitalname"
                                name="hospitalname"
                                value={bloodDonation.hospitalname}
                                onChange={handleInputChange}
                                placeholder="Hospital Name"
                            />
                        </div>

                        {/* Hospital Location */}
                        <div className="mb-3">
                            <label htmlFor="hospitallocation" className="form-label">Hospital Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hospitallocation"
                                name="hospitallocation"
                                value={bloodDonation.hospitallocation}
                                onChange={handleInputChange}
                                placeholder="Hospital Location"
                            />
                        </div>

                        {/* Hospital Pincode */}
                        <div className="mb-3">
                            <label htmlFor="hospitalpincode" className="form-label">Hospital Pincode</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hospitalpincode"
                                name="hospitalpincode"
                                value={bloodDonation.hospitalpincode}
                                onChange={handleInputChange}
                                placeholder="Hospital Pincode"
                            />
                        </div>

                        {/* Status */}
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <input
                                type="text"
                                className="form-control"
                                id="status"
                                name="status"
                                value={bloodDonation.status}
                                onChange={handleInputChange}
                                placeholder="Status"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mb-3">
                            <button type="submit" className="btn btn-dark w-100">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ width: "20vw", marginLeft: "auto" }}>
                <Sidebarrirght />
            </div>
        </div>
    )
}

export default BloodForm