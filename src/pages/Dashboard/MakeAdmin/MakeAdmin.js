import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import RubberBand from 'react-reveal/RubberBand';



const MakeAdmin = () => {
      const [email, setEmail] = useState('')
      const [success, setSuccess] = useState(false)

      const handelOnBlur = (e) => {
            setEmail(e.target.value)
      }
      const handelAdminSubmit = (e) => {
            const user = { email }
            fetch('https://immense-reaches-13014.herokuapp.com/users/admin', {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount) {
                              setEmail('')
                              setSuccess(true)
                              console.log(data)
                        }
                  })
            e.preventDefault()
      }
      return (
            <div>
                  <h1 className='text-warning mb-3'>Make an Admin</h1>
                  <RubberBand>
                        <Form onSubmit={handelAdminSubmit}>
                              <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handelOnBlur} type="email" placeholder="Enter email" />
                              </Form.Group>
                              <Button type='submit' variant="danger">Make Admin</Button>
                        </Form>
                  </RubberBand>
                  {
                        success &&
                        <Alert className='w-25 mx-auto mt-5' variant='success'>
                              Make Admin Successfully !!
                        </Alert>
                  }
            </div>
      );
};

export default MakeAdmin;