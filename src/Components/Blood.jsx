import { Button, Card, CardBody, CardHeader } from "react-bootstrap"
import Sidebarleft from "./Sidebarleft"
import Sidebarrirght from "./Sidebarright"
import userlogo from '../Images/dashboard/userlogo.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Blood = () => {

    const [bloodData, setBloodData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/blood")
            console.log(response.data.data.data)
            setBloodData(response.data.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div style={{ margin: "20px" }}>
                <Button style={{ marginBottom: '10px' }} onClick={() => navigate('/dashboard/blood/forms')}>Add Post</Button>
                {bloodData.map((data, index) => (
                    <div className="d-postcard" key={index}>
                        <Card className="d-postcard-card">
                            <CardHeader className="d-postcard-header">
                                <div className="d-postcard-heading">
                                    <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                                    <span className="d-postcard-username">Name : {data.name.toUpperCase()}</span>
                                    <div>{data.status === "active" ? <div style={{ fontSize: "12px", color: "black", backgroundColor: "lightgreen", padding: "5px", width: "70px", textAlign: 'center', marginLeft: "40px", borderRadius: "10px" }}>ACTIVE</div> : <div style={{ fontSize: "12px", color: "white", backgroundColor: "red", padding: "5px", width: "70px", textAlign: 'center', marginLeft: "40px", borderRadius: "10px" }}>ACTIVE</div>}</div>
                                    <div className="d-postcard-event-heading">Contact : {data.contact}</div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-postcard-content">
                                    <p><strong>Blood Group:</strong> {data.bloodgroup}</p>
                                    <p><strong>Hospital Name :</strong> {data.hospitalname}</p>
                                    <p><strong>Hospital Location :</strong> {data.hospitallocation}</p>
                                    <p><strong>Hospital Pincode:</strong> {data.hospitalpincode}</p>
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

export default Blood