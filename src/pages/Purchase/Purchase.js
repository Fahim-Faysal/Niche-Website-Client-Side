import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
      const { id } = useParams()
      const { register, handleSubmit, reset } = useForm();
      const { user } = useAuth()
      const [bike, setSingleBike] = useState({})

      useEffect(() => {
            fetch(`http://localhost:4000/purchase/${id}`)
                  .then(res => res.json())
                  .then(data => setSingleBike(data))
      }, [])

      const onSubmit = data => {

            axios.post('http://localhost:4000/orders', data)
                  .then(res => {
                        if (res.data.insertedId) {
                              alert('Order Placed Successfully')
                              reset()
                        }
                  })
      }

      return (
            <div>

                  <div className='mt-5 mb-5'>

                        <img style={{ width: "500px", height: "300px" }} src={bike?.img} alt="" />
                        <h2 className='mt-3 text-success'>{bike?.name}</h2>
                        <h3 className='text-warning'>Duration : {bike?.duration}</h3>
                        <h4 className='text-danger'>Price $ {bike?.price}</h4>
                  </div>


                  <h1>Please Fill Up the Form To Buy</h1>

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

            </div>
      );
};

export default Purchase;