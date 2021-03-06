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


                                    {
                                          user?.email &&
                                          <NavLink className='text-decoration-none mx-4' to="/dashboard" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Dashboard</NavLink>
                                    }
                                    <NavLink className='text-decoration-none mx-4' to="/about" activeStyle={{
                                          fontWeight: "bold",
                                          color: "red"
                                    }}>About Us</NavLink>
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

                              {user?.email &&
                                    <Navbar.Text className='text-danger'>
                                          Wellcome :  {user?.displayName}
                                    </Navbar.Text>}

                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Navigation;