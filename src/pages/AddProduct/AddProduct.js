import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('http://localhost:4000/bikes', data)
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

                  <h1 className=' mt-5 text-info'>Add A Product</h1>
                  <form className='form-container mt-5' onSubmit={handleSubmit(onSubmit)}>


                        <input  {...register("name")} placeholder='Enter the Bike name' />

                        <input  {...register("description")} placeholder="Enter the Description" />

                        <input type="number" {...register("price")} placeholder='Enter the price' />

                        <input {...register("color")} placeholder="color" />

                        <input {...register("img")} placeholder='Paste the image url' />

                        <input className='btn btn-danger' value='Add Product' type="submit" />
                  </form>

            </div>
      );
};

export default AddProduct;