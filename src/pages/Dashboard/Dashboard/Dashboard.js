import React from 'react';
import { Col, Nav, Row, Tab, Button } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrders from '../MyOrders/MyOrders';

import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
      let { path, url } = useRouteMatch();
      const { admin, emailSignOut } = useAuth()
      return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                        <Col sm={2}>
                              <Nav variant="pills" style={{ height: '100vh', backgroundColor: '#FFFAF0' }} className="flex-column">

                                    {!admin && <Nav.Item className='fs-4'>
                                          <Link className='text-decoration-none ' to={`${url}/pay`}>Pay</Link>
                                    </Nav.Item>}
                                    {admin &&
                                          <Nav.Item className='mt-3 fs-4'>
                                                <Link className='text-decoration-none ' to={`${url}/makeadmin`}>Make Admin</Link>
                                          </Nav.Item>
                                    }
                                    {!admin && <Nav.Item className='mt-3 fs-4'>
                                          <Link className='text-decoration-none ' to={`${url}/myorder`}>My Orders</Link>
                                    </Nav.Item >}
                                    {
                                          admin &&
                                          <Nav.Item className='mt-3 fs-4'>
                                                <Link className='text-decoration-none ' to={`${url}/allorder`}>Manage All Orders</Link>
                                          </Nav.Item>
                                    }
                                    {
                                          admin &&
                                          <Nav.Item className='mt-3 fs-4'>
                                                <Link className='text-decoration-none ' to={`${url}/addproduct`}>Add A New Product</Link>
                                          </Nav.Item>
                                    }
                                    {!admin && <Nav.Item className='mt-3 fs-4'>
                                          <Link className='text-decoration-none ' to={`${url}/review`}>Review</Link>
                                    </Nav.Item>}
                                    {
                                          admin &&
                                          <Nav.Item className='mt-3 fs-4'>
                                                <Link className='text-decoration-none ' to={`${url}/manageproduct`}>Manage Products</Link>
                                          </Nav.Item>
                                    }
                                    <Button className='w-50 mx-auto mt-5' onClick={emailSignOut} variant="danger">Logout</Button>


                              </Nav>
                        </Col>
                        <Col sm={10}>
                              <DashboardHome></DashboardHome>
                              <Switch>

                                    <Route path={`${path}/pay`}>
                                          <Pay></Pay>
                                    </Route>
                                    <AdminRoute path={`${path}/makeadmin`}>
                                          <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <Route path={`${path}/myorder`}>
                                          <MyOrders></MyOrders>
                                    </Route>
                                    <AdminRoute path={`${path}/allorder`}>
                                          <AllOrders></AllOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addproduct`}>
                                          <AddProduct></AddProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageproduct`}>
                                          <ManageProduct></ManageProduct>
                                    </AdminRoute>
                                    <Route path={`${path}/review`}>
                                          <Review></Review>
                                    </Route>
                              </Switch>

                        </Col>
                  </Row>

            </Tab.Container>
      );
};

export default Dashboard;