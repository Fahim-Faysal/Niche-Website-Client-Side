import React from 'react';
import { Col, Nav, Row, Tab, Button } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      useParams,
      useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';

import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
      let { path, url } = useRouteMatch();
      const { admin, emailSignOut } = useAuth()
      return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                        <Col className='mt-5' sm={2}>
                              <Nav variant="pills" className="flex-column">

                                    <Nav.Item className='fs-4'>
                                          <Link className='text-decoration-none ' to={`${url}/pay`}>Pay</Link>
                                    </Nav.Item>
                                    {admin &&
                                          <Nav.Item className='mt-3 fs-4'>
                                                <Link className='text-decoration-none ' to={`${url}/makeadmin`}>Make Admin</Link>
                                          </Nav.Item>
                                    }
                                    <Nav.Item className='mt-3 fs-4'>
                                          <Link className='text-decoration-none ' to={`${url}/myorder`}>My Orders</Link>
                                    </Nav.Item >
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
                                    <Nav.Item className='mt-3 fs-4'>
                                          <Link className='text-decoration-none ' to={`${url}/review`}>Review</Link>
                                    </Nav.Item>
                                    <Button className='w-50 mx-auto mt-5' onClick={emailSignOut} variant="danger">Logout</Button>


                              </Nav>
                        </Col>
                        <Col sm={10}>
                              <DashboardHome></DashboardHome>
                              <Switch>
                                    {/* <Route exact path={path}>
                                          <DashboardHome></DashboardHome>
                                    </Route> */}
                                    <Route path={`${path}/pay`}>
                                          <Pay></Pay>
                                    </Route>
                                    <Route path={`${path}/makeadmin`}>
                                          <MakeAdmin></MakeAdmin>
                                    </Route>
                                    <Route path={`${path}/myorder`}>
                                          <MyOrders></MyOrders>
                                    </Route>
                                    <Route path={`${path}/allorder`}>
                                          <AllOrders></AllOrders>
                                    </Route>
                                    <Route path={`${path}/addproduct`}>
                                          <AddProduct></AddProduct>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                          <Review></Review>
                                    </Route>
                              </Switch>
                              {/* <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                          <Pay></Pay>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                          <h2>Fahim </h2>
                                    </Tab.Pane>
                              </Tab.Content> */}
                        </Col>
                  </Row>

            </Tab.Container>
      );
};

export default Dashboard;