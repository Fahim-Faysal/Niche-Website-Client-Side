import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
      const { user, emailSignOut } = useAuth()
      return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Container>
                        <Navbar.Brand href="#home">Siyam's Mart</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                              <Nav className="me-auto">
                                    <NavLink className='text-decoration-none mx-4' to="/home" activeStyle={{
                                          fontWeight: "bold",
                                          color: "red"
                                    }}>Home</NavLink>
                                    <NavLink className='text-decoration-none mx-4' to="/explore" activeStyle={{
                                          fontWeight: "bold",
                                          color: "red"
                                    }}>Explore</NavLink>

                                    <NavLink className='text-decoration-none mx-4' to="/addproduct" activeStyle={{
                                          fontWeight: "bold",
                                          color: "red"
                                    }}>Add A New Product</NavLink>

                                    <NavLink className='text-decoration-none mx-4' to="/addservice" activeStyle={{
                                          fontWeight: "bold",
                                          color: "red"
                                    }}>Add A New Package</NavLink>
                              </Nav>


                              {
                                    user?.email ?
                                          <Button onClick={emailSignOut} variant="outline-success">LogOut</Button>
                                          :
                                          <NavLink className='text-decoration-none mx-4' to='/login'>
                                                <Button variant="outline-danger "> LogIn
                                                </Button>
                                          </NavLink>
                              }




                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Navigation;