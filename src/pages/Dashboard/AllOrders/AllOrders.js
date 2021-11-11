import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const AllOrders = () => {

      const [allorders, setAllorders] = useState([])
      const [orders, setOrders] = useState([])

      axios.get('http://localhost:4000/orders')
            .then(function (response) {
                  setAllorders(response.data);
            })
      const element = <FontAwesomeIcon icon={faTrashAlt} />

      const handelDeleteUser = (id) => {
            const proceed = window.confirm('Are You Sure You Want To Delete')
            if (proceed) {
                  const url = `http://localhost:4000/orders/${id}`
                  fetch(url, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully');
                                    const remaining = orders.filter(order => order._id !== id)
                                    setOrders(remaining)
                              }
                        })
            }
      }

      return (
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
                              allorders.map(order => <tr key={order._id}>
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
      );
};

export default AllOrders;