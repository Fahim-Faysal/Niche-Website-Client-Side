import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';



const ManageProduct = () => {
      const [bikes, setBikes] = useState([])



      useEffect(() => {
            fetch('https://immense-reaches-13014.herokuapp.com/bikes')
                  .then(res => res.json())
                  .then(data => setBikes(data))
      }, [])

      const handelDeleteProduct = (id) => {
            const proceed = window.confirm('Are You Sure You Want To Delete')
            if (proceed) {
                  const url = `https://immense-reaches-13014.herokuapp.com/bikes/${id}`
                  fetch(url, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully');
                                    const remaining = bikes.filter(order => order._id !== id)
                                    setBikes(remaining)
                              }
                        })
            }
      }

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
                                                <Card key={bike._id} style={{ width: '18rem' }}>
                                                      <Card.Img variant="top" src={bike.img} />
                                                      <Card.Body>
                                                            <Card.Title>{bike.name}</Card.Title>
                                                            <Card.Text>
                                                                  {bike.description}
                                                            </Card.Text>

                                                            <Button
                                                                  onClick={() => handelDeleteProduct(bike._id)} variant="danger">Delete</Button>

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

export default ManageProduct;