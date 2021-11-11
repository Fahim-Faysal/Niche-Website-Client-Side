import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const PublicReview = () => {

      const [reviews, setreviews] = useState([])

      useEffect(() => {
            fetch('http://localhost:4000/review')
                  .then(res => res.json())
                  .then(data => setreviews(data))
            // axios.get('http://localhost:4000/review')
            //       .then(function (response) {
            //             setreviews(response);
            //       })
      }, [])
      return (
            <div className='mt-5 container'>
                  <h1 className='mb-3 text-success'>Review From the Customer</h1>
                  <Row>

                        {

                              reviews.map(review => <Col className='col-lg-3 col-md-6 col-sm-12 my-2'>
                                    <Card border="success" style={{ width: '18rem' }}>

                                          <Card.Header>Review</Card.Header>

                                          <Card.Body>
                                                <Card.Title className='text-danger'>{review?.name}</Card.Title>
                                                <Card.Text>
                                                      {review?.email}
                                                </Card.Text>
                                                <Card.Text className='text-success'>
                                                      {review?.review}
                                                </Card.Text>
                                          </Card.Body>

                                    </Card>
                              </Col>)
                        }

                  </Row>
            </div>
      );
};

export default PublicReview;