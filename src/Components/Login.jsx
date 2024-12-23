import  { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../Components/Login.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';



const Login = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    email:'',
    password:''
  })




  // Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
  
})

const handleInputChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value })
}

const handleSubmit = async () => {

  const postdata = {
    email: user.email,
    password: user.password,
  }

  console.log(postdata);

  try{
    const response = await axios.post('http://localhost:8080/login', postdata)
    console.log(response.data);
    Swal.fire({
      title:'login successfully !!!',
      icon:'success'
    })
    navigate("/dashboard")
  } catch {
    Swal.fire({ 
      title:'error occured try again later !!!',
      icon:'warning'
    })
  }

  setUser({
    email:'',
    password:''
  })
  
}

  
  return (
    <div>
      <div className="loginpage">
        <Row>
          <Col lg={3}> </Col>
          <Col lg={6}>
            <Card className="log-card" style={{ border: 'none', borderRadius: '15px' }}>
              <div className="log-cardin">
                <p className="login-h1"> Log in to support portal </p>
                <p className="login-h2">
                  Are you a new user? <a href='/signup' className="log-signup"> Sign up with us </a>
                </p>

                {/* Formik Form */}
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({handleSubmit, handleChange}) => ( 

                  <Form onSubmit={handleSubmit}>
                    <p className="login-h3"> Your e-mail address <span className="log-star"> * </span> </p>
                    <Field
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={(e)=>{  handleChange(e); handleInputChange(e) }}
                      className="input"
                      placeholder="Your e-mail address"
                    />
                    <ErrorMessage name="email" component="div" className="error" style={{ color:'red'}} />

                    <p className="login-h3"> Password <span className="log-star"> * </span> </p>
                    <Field
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={(e)=>{  handleChange(e); handleInputChange(e) }}
                      
                      className="input"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="error" style={{ color:'red'}} />

                    <p className="login-h4">
                      <input type="checkbox" className="log-checkbox" /> Remember me on this computer
                    </p>

                    <p className="loginbutton">
                      <button type="submit" className="loginbuttonin"> Login </button>
                    </p>
                  </Form>
                  )}

                </Formik>

                <p className="log-forgotpassword">
                  <a href="#" className="log-forgotpasswordin"> Forgot your password? </a>
                </p>
              </div>
            </Card>

            <div className="log-already"> Are you an agent? <a href="#" className="loginhere"> Login here </a> </div>
          </Col>
          <Col lg={3}> </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login
