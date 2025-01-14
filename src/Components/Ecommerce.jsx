import { Button, Card, CardBody, CardHeader } from "react-bootstrap"
import Sidebarleft from "./Sidebarleft"
import Sidebarrirght from "./Sidebarright"
import userlogo from '../Images/dashboard/userlogo.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Ecommerece.css"

const Ecommerce = () => {

    const navigate = useNavigate()

    const [EcommerceData, setEcommerceData] = useState([])

    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:8080/ecommerce')
            console.log(response.data.data.data)
            setEcommerceData(response.data.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="ecom-full"style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div className="ecommerece-card" style={{ margin: "20px" }}>
                <Button style={{ marginBottom: '20px' }} onClick={() => navigate('/dashboard/ecommerce/forms')}>Add Post</Button>
                {EcommerceData.map((data, index) => (

                    <div  key={index}>
                        <Card  className="ecom-card">
                            <CardHeader className="d-postcard-header">
                                <div className="d-postcard-heading">
                                    <img src={userlogo} className="d-postcard-userlogo" alt="User Logo" />
                                    <span className="d-postcard-username">Product Name : {data.productname.toUpperCase()}</span>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-postcard-content">
                                    <div className="d-postcard-event-heading">{data.description}</div>
                                    <p className="d-postcard-description"><span style={{ color: 'black', fontWeight: "bold", fontSize: "25px" }}> ₹ {data.price}</span></p>
                                    <div style={{ display: "flex", flexDirection: 'row', margin: '10px' }}>
                                        <Button style={{ marginRight: "10px" }}>BUY</Button>
                                        <Button>SELL</Button>
                                    </div>
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

export default Ecommerce