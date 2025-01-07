import { Button, Card, CardBody, CardHeader } from "react-bootstrap"
import Sidebarleft from "./Sidebarleft"
import Sidebarrirght from "./Sidebarright"
import userlogo from '../Images/dashboard/userlogo.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Events = () => {

    const navigate = useNavigate()

    const [eventData, setEventData] = useState([])

    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:3000/event')
            console.log(response.data.data.data)
            setEventData(response.data.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div style={{ margin: "20px" }}>
                <Button style={{ marginBottom: '10px' }} onClick={() => navigate('/dashboard/events/forms')}>Add Post</Button>
                {eventData.map((data, index) => (

                    <div className="d-postcard" key={index}>
                        <Card className="d-postcard-card" >
                            <CardHeader className="d-postcard-header">
                                <div className="d-postcard-heading">
                                    <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                                    <span className="d-postcard-username">{data.collegename}</span>
                                    <div className="d-postcard-event-heading">Event : {data.eventname}</div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-postcard-content">
                                    <p><strong>College Name :</strong> {data.collegename}</p>
                                    <p className="d-postcard-description">{data.description}</p>
                                    <p><strong>Start Date: </strong>{new Date(data.startdate).toISOString().substring(0,10)}</p>
                                    <p><strong>Timings: </strong>{data.fromtime} - {data.totime}</p>
                                    <p><strong>Eligiblity:</strong> {data.eligible}</p>
                                    <p><strong>Location:</strong> {data.location}</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
            <div style={{ width: "20vw", marginLeft: "auto" }}>
                <Sidebarrirght />
            </div>
        </div>
    )
}

export default Events