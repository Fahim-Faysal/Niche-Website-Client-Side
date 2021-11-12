import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Slide from 'react-reveal/Slide';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
      const { id } = useParams()
      const { register, handleSubmit, reset } = useForm();
      const { user } = useAuth()
      const [bike, setSingleBike] = useState({})

      useEffect(() => {
            fetch(`https://immense-reaches-13014.herokuapp.com/purchase/${id}`)
                  .then(res => res.json())
                  .then(data => setSingleBike(data))
      }, [])

      const onSubmit = data => {

            axios.post('https://immense-reaches-13014.herokuapp.com/orders', data)
                  .then(res => {
                        if (res.data.insertedId) {
                              alert('Order Placed Successfully')
                              reset()
                        }
                  })
      }

      return (
            <div>
                  <Slide left>
                        <div className='mt-5 mb-5'>

                              <img style={{ width: "500px", height: "300px" }} src={bike?.img} alt="" />
                              <h2 className='mt-3 text-success'>{bike?.name}</h2>
                              <h3 className='text-warning'>Color : {bike?.color}</h3>
                              <h4 className='text-danger'>Price $ {bike?.price}</h4>

                        </div>
                  </Slide>


                  <h1 className='mb-4 text-primary'>Please Fill Up the Form To Buy</h1>

                  <Slide right>
                        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>

                              <input value={user?.displayName} {...register("name")} placeholder='Enter your Name' required />
                              {
                                    user?.email &&
                                    <input value={user?.email}   {...register("email")} placeholder="Enter your Email" required />
                              }




                              {
                                    bike?.name &&
                                    <input value={bike?.name} {...register("bikename")} placeholder="Enter the destination name" required />
                              }

                              <input {...register("city")} placeholder='Enter the city name' required />

                              <input {...register("address")} placeholder='Enter the address' required />

                              <input type="number" {...register("phone")} placeholder='Phone Number' required />
                              <input className='btn btn-danger' value='Confirm Booking' type="submit" />
                        </form>
                  </Slide>

            </div>
      );
};

export default Purchase;