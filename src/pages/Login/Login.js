import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
      const [logInInfo, setLogInInfo] = useState()

      const history = useHistory()
      const location = useLocation()

      const { user, emailSignIn, error } = useAuth()

      const handelOnBlur = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            const newLogin = { ...logInInfo }
            newLogin[field] = value;
            setLogInInfo(newLogin)
            console.log(newLogin);
      }

      const handelLoginSubmit = (e) => {
            e.preventDefault()
            emailSignIn(logInInfo?.email, logInInfo?.password, history, location)

      }

      return (
            <div className='mt-5'>
                  <h1 className='text-info'>Please Login Here</h1>
                  <Form onSubmit={handelLoginSubmit} className='w-25 p-5 border border-secondary rounded mt-5 mx-auto'>
                        <FloatingLabel
                              controlId="floatingInput"
                              label="Email address"
                              className="mb-3"
                        >
                              <Form.Control onBlur={handelOnBlur} type="email"
                                    name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                              <Form.Control onBlur={handelOnBlur} type="password" name='password' placeholder="Password" />
                        </FloatingLabel>

                        <Button className='mt-3' type='submit' variant="danger">Login</Button>
                  </Form>
                  {
                        user.email &&
                        <Alert className='w-25 mx-auto mt-5' variant='success'>
                              Login Successfully !!
                        </Alert>
                  }
                  {
                        error &&
                        <Alert className='w-25 mt-5 mx-auto' variant="success">
                              <Alert.Heading>{error}</Alert.Heading>
                        </Alert>

                  }
                  <p className='mt-5 fs-5'>Don't Have An Account? <NavLink to='/register'>Register Here</NavLink></p>
            </div>
      );
};

export default Login;