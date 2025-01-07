import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebarleft from './Sidebarleft';
import Sidebarrirght from './Sidebarright';
import { useNavigate } from 'react-router-dom';

const RoomForm = () => {

    const navigate = useNavigate()

    const [room, setRoom] = useState({
        complexname: "", image: "", description: "", rentprice: "", status: ''
    });

    const handleInputChange = (e) => {
        setRoom({ ...room, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!room.complexname || !room.image || !room.description || !room.rentprice || !room.status) {
            Swal.fire({
                icon: "warning",
                title: "All Details Are Mandatory"
            });
        } else {
            createProduct();
        }
        setRoom({ complexname: "", image: "", description: "", rentprice: "", status: "" });
    };

    const createProduct = async () => {
        try {
            const response = await axios.post("http://localhost:3000/rooms", room);
            console.log(response);
            Swal.fire({
                title: 'Data Added Successfully for Ecommerce Product',
                icon: "success"
            });
            navigate("/dashboard/rooms")
        } catch (err) {
            Swal.fire({
                title: `Ecommerce Product Not Added - ${err}`,
                icon: "warning"
            });
        }
    };

    return (
        <div className="d-flex">
            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <h1 className="mb-4">ROOM FORM</h1>
                <form onSubmit={handleSubmit} style={{width : "90%"}}>
                    <div className="mb-3">
                        <label htmlFor="complexname" className="form-label">Complex Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="complexname"
                            name="complexname"
                            value={room.complexname}
                            onChange={handleInputChange}
                            placeholder="Complex Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Room Image</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            name="image"
                            value={room.image}
                            onChange={handleInputChange}
                            placeholder="Room Image"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={room.description}
                            onChange={handleInputChange}
                            placeholder="Room Description"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rentprice" className="form-label">Rent Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="rentprice"
                            name="rentprice"
                            value={room.rentprice}
                            onChange={handleInputChange}
                            placeholder="Rent Price"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="status"
                            name="status"
                            value={room.status}
                            onChange={handleInputChange}
                            placeholder="Room Status"
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100">Submit</button>
                </form>
            </div>
            <div style={{ width: "20vw", marginLeft: "auto" }}>
                <Sidebarrirght />
            </div>
        </div>
    );
};

export default RoomForm;
