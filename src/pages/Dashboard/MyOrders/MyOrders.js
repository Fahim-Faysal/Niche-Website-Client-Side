import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const MyOrders = () => {
      const { user } = useAuth()
      const [myorder, setMyorder] = useState([])


      useEffect(() => {
            axios.get(`https://immense-reaches-13014.herokuapp.com/myorders?email=${user?.email}`)
                  .then(function (response) {
                        setMyorder(response.data);
                  })
      }, [])


      const element = <FontAwesomeIcon icon={faTrashAlt} />

      const handelDeleteUser = (id) => {
            const proceed = window.confirm('Are You Sure You Want To Delete')
            if (proceed) {
                  const url = `https://immense-reaches-13014.herokuapp.com/orders/${id}`
                  fetch(url, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully');
                                    const newUser = myorder?.filter(order => order?._id !== id)
                                    setMyorder(newUser)
                              }
                        })
            }
      }
      return (
            <div>
                  <h1 className='text-success mb-3'>All My Orders</h1>
                  <Table striped bordered hover size="sm">
                        <thead>
                              <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Bike Name</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                              </tr>
                        </thead>
                        <tbody>

                              {
                                    myorder.map(order => <tr key={order._id}>
                                          <td>{order?.name}</td>
                                          <td>{order?.email}</td>
                                          <td>{order?.bikename}</td>
                                          <td>{order?.city}</td>
                                          <td>{order?.address}</td>
                                          <td>{order?.phone}</td>
                                          <button onClick={() => handelDeleteUser(order._id)}><span className='text-danger'>{element}</span></button>
                                    </tr>)
                              }
                        </tbody>
                  </Table>
            </div>
      );
};

export default MyOrders;