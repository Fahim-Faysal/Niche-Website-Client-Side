import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Zoom, Slide } from 'react-reveal';


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

                  <div className='row container ms-5 '>
                        {
                              bikes.map(bike =>
                                    <div key={bike._id} className='col-lg-4 col-md-6 col-sm-12 my-3'>
                                          <Zoom>
                                                <Card style={{ width: '18rem' }}>
                                                      <Card.Img variant="top" src={bike.img} />
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

                                    </div>
                              )
                        }

                  </div>
            </div>
      );
};

export default Product;