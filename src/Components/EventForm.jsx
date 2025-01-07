import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebarleft from './Sidebarleft';
import Sidebarrirght from './Sidebarright';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {

    const navigate = useNavigate()

    const [eventData, setEventData] = useState({
        eventimage: "", eventname: "", description: '', startdate: '', enddate: "", fromtime: "", totime: '', eligible: "", collegename : "", location : ""
    });

    const handleInputChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!eventData.eventimage || !eventData.eventname || !eventData.description || !eventData.startdate || !eventData.enddate || !eventData.fromtime || !eventData.totime || !eventData.eligible || !eventData.collegename || !eventData.location) {
            Swal.fire({
                title: "All Details Are Mandatory",
                icon: "warning"
            });
        } else {
            createProduct();
        }
    };

    const createProduct = async () => {
        try {
            const response = await axios.post("http://localhost:3000/event", eventData);
            console.log(response)
            Swal.fire({
                title: "Event Added Successfully",
                icon: "success"
            }).then(() => {
                setEventData({
                    eventimage: "", eventname: "", description: '', startdate: '', enddate: "", fromtime: "", totime: '', eligible: "", collegename : "", location : ""
                });
            });
            navigate('/dashboard/events')
        } catch {
            Swal.fire({
                title: "Event Not Added",
                icon: "error"
            });
        }
    };

    return (
        <div style={{display : "flex", flexDirection : "row"}}>

            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div className="container" style={{ paddingTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                <h1>Event Form</h1>
                <form onSubmit={handleSubmit} style={{width : 'auto'}}>
                    
                <div className="mb-3">
                        <label htmlFor="collegename" className="form-label">College Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="collegename"
                            name="collegename"
                            value={eventData.collegename}
                            onChange={handleInputChange}
                            placeholder="College Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="eventname" className="form-label">Event Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventname"
                            name="eventname"
                            value={eventData.eventname}
                            onChange={handleInputChange}
                            placeholder="Event Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="eventimage" className="form-label">Event Image</label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventimage"
                            name="eventimage"
                            value={eventData.eventimage}
                            onChange={handleInputChange}
                            placeholder="Event Image"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Event Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={eventData.description}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Event Description"
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="startdate" className="form-label">Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="startdate"
                            name="startdate"
                            value={eventData.startdate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="enddate" className="form-label">End Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="enddate"
                            name="enddate"
                            value={eventData.enddate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fromtime" className="form-label">From Time</label>
                        <input
                            type="time"
                            className="form-control"
                            id="fromtime"
                            name="fromtime"
                            value={eventData.fromtime}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="totime" className="form-label">To Time</label>
                        <input
                            type="time"
                            className="form-control"
                            id="totime"
                            name="totime"
                            value={eventData.totime}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="eligible" className="form-label">Event Eligible</label>
                        <input
                            type="text"
                            className="form-control"
                            id="eligible"
                            name="eligible"
                            value={eventData.eligible}
                            onChange={handleInputChange}
                            placeholder="Event Eligible"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={eventData.location}
                            onChange={handleInputChange}
                            placeholder="Event Location"
                        />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-dark w-100">Submit</button>
                    </div>
                </form>
            </div>

            <div style={{ width: "20vw", marginLeft: "auto" }}>
                <Sidebarrirght />
            </div>
        </div>
    );
}

export default EventForm;
