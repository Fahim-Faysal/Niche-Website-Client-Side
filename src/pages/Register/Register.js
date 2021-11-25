import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Register = () => {

      const [loginData, setLoginData] = useState({})
      const history = useHistory()

      const { registerWithEmail, error, user, isLoading } = useAuth()

      const handelOnBlur = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            const newUser = { ...loginData }
            newUser[field] = value;
            setLoginData(newUser)

      }

      const handelFormSubmit = (e) => {
            e.preventDefault()
            if (loginData?.password !== loginData?.password2) {
                  alert('your password did not match')
                  return
            }
            registerWithEmail(loginData?.email, loginData?.password, loginData?.name, history)

      }
      return (
            <div className='mt-4'>
                  <h1 className='text-danger'>Please Register Here</h1>


                  {
                        isLoading &&
                        <Spinner animation="border" role="status">
                              <span className="visually-hidden">Loading...</span>
                        </Spinner>
                  }

                  {
                        !isLoading &&
                        <Container>
                              <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} sm={12} md={12} lg={8}>
                                          <Form onSubmit={handelFormSubmit} className='w-75 p-5  border border-secondary rounded mt-5 '>
                                                <FloatingLabel
                                                      controlId="floatingInput"
                                                      label="Your Name"
                                                      className="mb-3 "
                                                >
                                                      <Form.Control onBlur={handelOnBlur} type="text" name="name" placeholder="Enter Your Name" />
                                                </FloatingLabel>

                                                <FloatingLabel
                                                      controlId="floatingInput"
                                                      label="Email address"
                                                      className="mb-3"
                                                >
                                                      <Form.Control onBlur={handelOnBlur} type="email" name="email" placeholder="name@example.com" />
                                                </FloatingLabel>

                                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                                      <Form.Control onBlur={handelOnBlur} type="password" name="password" placeholder="Password" />
                                                </FloatingLabel>

                                                <FloatingLabel controlId="floatingPassword" label="Re-Type Password">
                                                      <Form.Control onBlur={handelOnBlur} type="password" name="password2" placeholder="Re-Type Password" />
                                                </FloatingLabel>

                                                <Button className='mt-3' type='submit' variant="danger">Register</Button>
                                          </Form>
                                    </Col>
                              </Row>
                        </Container>

                  }

                  {/* {
                        user?.email &&
                        <Alert className='w-25 mx-auto mt-5' variant='success'>
                              Register Successfully!
                        </Alert>
                  } */}
                  {
                        error &&
                        <Alert variant="success">
                              <Alert.Heading>{error}</Alert.Heading>
                        </Alert>

                  }
                  <p className='mt-5 fs-5'>Already Have An Account? <NavLink to='/login'>Login Here Here</NavLink></p>
            </div>
      );
};

export default Register;