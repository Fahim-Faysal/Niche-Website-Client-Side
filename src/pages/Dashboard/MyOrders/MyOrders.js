import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

      const { user } = useAuth()
      const [myorder, setMyorder] = useState([])

      useEffect(() => {
            const url = `http://localhost:4000/myorders?email=${user.email}`
            fetch(url)
                  .then(res => res.json())
                  .then(data => setMyorder(data))
      }, [])
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
                              myorder.map(order => <tr key={order._id}>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.bikename}</td>
                                    <td>{order?.city}</td>
                                    <td>{order?.address}</td>
                                    <td>{order?.phone}</td>
                              </tr>)

                        }
                  </tbody>
            </Table>
      );
};

export default MyOrders;