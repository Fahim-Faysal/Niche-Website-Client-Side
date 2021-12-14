import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';


const Explore = () => {
      const [bikes, setBikes] = useState([])


      useEffect(() => {
            fetch('https://immense-reaches-13014.herokuapp.com/bikes')
                  .then(res => res.json())
                  .then(data => setBikes(data))
      }, [])


      return (
            <div>
                  <Bounce>
                        <h1 className='text-success mt-5 mb-5 fw-bolder'>Explore Our All Bikes And Choose Yours</h1>
                  </Bounce>

                  <div className='row container ms-5 '>
                        {
                              bikes.map(bike =>
                                    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                                          <Zoom>
                                                <Card className='card' key={bike._id} style={{ width: '18rem' }}>
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
                                    </div>
                              )

                        }

                  </div>

            </div>
      );
};

export default Explore;