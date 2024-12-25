import { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../Components/Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'




const Signup = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    fullname: "",
    college: "",
    email: "",
    department: "",
    mobile: 0,
    gender: "",
    password: "",
    confirmpassword: ""
  })

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {

    const postdata = {
      name: user.fullname,
      college: user.college,
      email: user.email,
      department: user.department,
      mobile: user.mobile,
      gender: user.gender,
      password: user.password,
      confirmpassword: user.confirmpassword
    }
    console.log(postdata)

    try {
      const response = await axios.post("http://192.168.1.106:8080/register", postdata)
      console.log(response.data)
      // setUser(response.data.data)
      Swal.fire({
        title: "Registered Successfully !!!",
        icon: "success"
      })
      navigate("/")
    } catch  {
      Swal.fire({
        title: "Error Occurred, Try Again Later!!!",
        icon: "warning"
      })
    }
    setUser({
      fullname: "",
      college: "",
      email: "",
      department: "",
      mobile: 0,
      gender: "",
      password: "",
      confirmpassword: ""
    })
  }

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    fullname: Yup.string().required('Full name is required'),
    college: Yup.string().required('College name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
    gender: Yup.string().required('Gender is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
  })

  return (
    <div>
      <div className="signuppage">
        <Row>
          <Col lg={3}> </Col>
          <Col lg={6}>
            <Card className="signup-card" style={{ border: 'none', borderRadius: '15px' }}>
              <div className="signup-cardin">
                <p className="signup-h1">Sign up for support portal</p>
                <p className="signup-h2">
                  Are you a user? <a href="/" className="signup-link">Login</a>
                </p>

                {/* Formik Form */}
                <Formik
                  initialValues={user}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                      <p className="signup-h3">Full name <span className="asterisk">*</span></p>
                      <Field
                        type="text"
                        name="fullname"
                        value={user.fullname}

                        onChange={(e) => { handleChange(e); handleInputChange(e) }}
                        className="signup-input"
                        placeholder="Your Full Name"
                      />
                      <ErrorMessage name="fullname" component="div" className="error" />

                      <p className="signup-h3">College name <span className="asterisk">*</span></p>
                      <Field
                        type="text"
                        name="college"
                        value={user.college}

                        onChange={(e) => { handleChange(e); handleInputChange(e) }}
                        className="signup-input"
                        placeholder="Your College Name"
                      />
                      <ErrorMessage name="college" component="div" className="error" />

                      <p className="signup-h3">Email <span className="asterisk">*</span></p>
                      <Field
                        type="email"
                        name="email"
                        value={user.email}

                        onChange={(e) => { handleChange(e); handleInputChange(e) }}
                        className="signup-input"
                        placeholder="Your E-mail Address"
                      />
                      <ErrorMessage name="email" component="div" className="error" />

                      <p className="signup-h3">Mobile number <span className="asterisk">*</span></p>
                      <Field
                        type="text"
                        name="mobile"
                        value={user.mobile}

                        onChange={(e) => { handleChange(e); handleInputChange(e) }}
                        className="signup-input"
                        placeholder="Your Mobile Number"
                      />
                      <ErrorMessage name="mobile" component="div" className="error" />

                      <p className="signup-h3">Gender <span className="asterisk">*</span></p>
                      <Field as="select" name="gender" value={user.gender} onChange={(e)=> { handleChange(e); handleInputChange(e)}} className="signup-input gender-select">
                        <option value="" disabled selected >Choose your gender</option>
                        <option value="Female" >Female</option>
                        <option value="Male" >Male</option>
                        <option value="Others" >Others</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" className="error" />

                      <p className="signup-h3">Password <span className="asterisk">*</span></p>
                      <Field
                        type="password"
                        name="password"
                        value={user.password}

                        onChange={(e) => { handleChange(e); handleInputChange(e) }}
                        className="signup-input"
                        placeholder="Your Password"
                      />
                      <ErrorMessage name="password" component="div" className="error" />

                      <p className="signup-h3">Confirm Password <span className="asterisk">*</span></p>
                      <Field
                        type="password"
                        name="confirmpassword"
                        value={user.confirmpassword}

                        onChange={(e) => { handleChange(e); handleInputChange(e) }}
                        className="signup-input"
                        placeholder="Confirm Password"
                      />
                      <ErrorMessage name="confirmpassword" component="div" className="error" />

                      <p className="signup-btn">
                        <button type="submit" className="signup-btnin">Register</button>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </Card>
            <div className="signup-already"> Are you an agent? <a href="/" className="signup-loginhere"> Login here </a> </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </div>
    </div>
  )
}

export default Signup