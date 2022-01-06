import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Zoom, Slide } from 'react-reveal';
import './Product.css'


const Product = () => {
      const [bikes, setBikes] = useState([])

      useEffect(() => {
            fetch('https://immense-reaches-13014.herokuapp.com/bikes')
                  .then(res => res.json())
                  .then(data => setBikes(data.slice(0, 6)))
      }, [])

      return (
            <div>

                  <Slide left>
                        <h1 className='text-success mt-5 mb-5 fw-bolder'>Top Selling Bikes</h1>
                  </Slide>
                  <Container>

                        <Row>
                              {
                                    bikes.map(bike =>

                                          <Col style={{ display: 'flex', justifyContent: 'center' }} sm={12} md={6} lg={4}>
                                                <Zoom>
                                                      <Card className='card shadow-lg rounded' style={{ width: '18rem', margin: '5px' }}>
                                                            <Card.Img className='image' variant="top" src={bike.img} />
                                                            <Card.Body>
                                                                  <Card.Title>{bike.name}</Card.Title>
                                                                  <Card.Text>
                                                                        {bike.description}
                                                                  </Card.Text>
                                                                  <Link to={`/purchase/${bike._id}`}>
                                                                        <Button variant="primary">Buy Now</Button>
                                                                  </Link>
                                                            </Card.Body>
                                                      </Card>
                                                </Zoom>
                                          </Col>
                                    )
                              }
                        </Row>

                  </Container>
            </div >
      );
};

export default Product;