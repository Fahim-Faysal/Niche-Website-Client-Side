import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Explore = () => {
      const [bikes, setBikes] = useState([])


      useEffect(() => {
            fetch('http://localhost:4000/bikes')
                  .then(res => res.json())
                  .then(data => setBikes(data))
      }, [])


      return (
            <div>

                  <h1 className='text-success mt-5 mb-5 fw-bolder'>Top Selling Bikes</h1>

                  <div className='row container ms-5 '>
                        {
                              bikes.map(bike =>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>

                                          <Card key={bike._id} style={{ width: '18rem' }}>
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
                                    </div>
                              )

                        }

                  </div>

            </div>
      );
};

export default Explore;