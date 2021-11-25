import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Jump from 'react-reveal/Jump';
import './AddProduct.css'

const AddProduct = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('https://immense-reaches-13014.herokuapp.com/bikes', data)
                  .then(
                        res => {
                              if (res.data.insertedId) {
                                    alert('Added Successfully')
                                    reset()
                              }
                        }
                  )
      }
      return (
            <div>

                  <h1 className=' mt-2 text-info'>Add A Product</h1>
                  <Container>
                        <Jump >
                              <Row style={{ display: 'flex', justifyContent: 'center', }}>
                                    <Col xs={12} sm={12} md={12} lg={8}>

                                          <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>

                                                <input className='w-75 m-2'  {...register("name")} placeholder='Enter the Bike name' />
                                                <br />

                                                <input className='w-75 m-2'  {...register("description")} placeholder="Enter the Description" />
                                                <br />
                                                <input className='w-75 m-2' type="number" {...register("price")} placeholder='Enter the price' />
                                                <br />
                                                <input className='w-75 m-2' {...register("color")} placeholder="color" />
                                                <br />
                                                <input className='w-75 m-2' {...register("img")} placeholder='Paste the image url' />
                                                <br />
                                                <input className=' w-75 m-2 btn btn-danger' value='Add Product' type="submit" />
                                          </form>

                                    </Col>
                              </Row>
                        </Jump>
                  </Container>


            </div>
      );
};

export default AddProduct;