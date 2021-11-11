import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './DashboardHome.css'

const DashboardHome = () => {
      return (
            <Row>
                  <Col sm={2}>

                  </Col>
                  <Col className='dashboard-style mb-5' sm={10}>

                        <h1 className='text-danger fw-bold fs-1'>Dashboard</h1>

                  </Col>
            </Row>
      );
};

export default DashboardHome;