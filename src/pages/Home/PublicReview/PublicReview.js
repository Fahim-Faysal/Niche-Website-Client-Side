import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const PublicReview = () => {

      const [reviews, setreviews] = useState([])

      useEffect(() => {
            fetch('https://immense-reaches-13014.herokuapp.com/review')
                  .then(res => res.json())
                  .then(data => setreviews(data))

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

                                                <Card.Text className='text-success'>
                                                      {review?.review}
                                                </Card.Text>
                                                <Rating className='text-warning'
                                                      initialRating={review?.rating}
                                                      emptySymbol="far fa-star"
                                                      fullSymbol="fas fa-star"
                                                />
                                          </Card.Body>

                                    </Card>
                              </Col>)
                        }

                  </Row>
            </div>
      );
};

export default PublicReview;