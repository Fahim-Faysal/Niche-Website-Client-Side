import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const AllOrders = () => {

      const [allorders, setAllorders] = useState([])

      axios.get('http://localhost:4000/orders')
            .then(function (response) {
                  setAllorders(response.data);
            })
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
                              </tr>)

                        }


                  </tbody>
            </Table>
      );
};

export default AllOrders;