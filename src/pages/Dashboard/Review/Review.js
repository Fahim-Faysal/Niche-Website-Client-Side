import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
      const { user } = useAuth()
      const [rsuccess, setRsuccess] = useState(false)
      const initialInfo = { name: user?.displayName, email: user?.email }

      const [reviews, setReviews] = useState(initialInfo)

      const handelBlur = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            const newReview = { ...reviews }
            newReview[field] = value;
            setReviews(newReview)

      }



      const handelReview = (e) => {

            axios.post('https://immense-reaches-13014.herokuapp.com/review', {
                  ...reviews
            })
                  .then(function (response) {
                        if (response?.data?.insertedId) {
                              setRsuccess(true)

                        }
                        console.log(response?.data?.insertedId);

                  })
                  .catch(function (error) {
                        console.log(error);
                  });

            e.preventDefault()
      }


      return (
            <div>
                  <h1 className='text-warning mb-5'>Please Leave a Review</h1>
                  <Flip left>
                        <Form onSubmit={handelReview} className='w-25 mx-auto'>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control onBlur={handelBlur} defaultValue={user?.displayName} type="text" name="name" placeholder="name@example.com" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onBlur={handelBlur} defaultValue={user?.email} type="email" name="email" placeholder="name@example.com" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Write Your Review</Form.Label>
                                    <Form.Control onBlur={handelBlur} as="textarea" name="review" rows={3} />
                              </Form.Group>
                              <Button type='submit' variant="info">Post</Button>
                        </Form>
                  </Flip>
                  {rsuccess &&
                        <Alert className='w-25 mx-auto mt-5' variant='success'>
                              Posted Successfully !!
                        </Alert>}
            </div>
      );
};

export default Review;