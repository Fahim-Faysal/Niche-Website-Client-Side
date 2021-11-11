import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      useParams,
      useRouteMatch
} from "react-router-dom";
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';

import Pay from '../Pay/Pay';

const Dashboard = () => {
      let { path, url } = useRouteMatch();
      return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                        <Col sm={2}>
                              <Nav variant="pills" className="flex-column">

                                    <Nav.Item>
                                          <Link to={`${url}/pay`}>Pay</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                          <Link to={`${url}/makeadmin`}>Make Admin</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                          <Link to={`${url}/myorder`}>My Orders</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                          <Link to={`${url}/allorder`}>Manage All Orders</Link>
                                    </Nav.Item>

                              </Nav>
                        </Col>
                        <Col sm={10}>
                              <Switch>
                                    <Route exact path={path}>
                                          <DashboardHome></DashboardHome>
                                    </Route>
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