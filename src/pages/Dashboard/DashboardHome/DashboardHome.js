import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './DashboardHome.css'

const DashboardHome = () => {
      return (
            <Row>
                  <Col sm={2}>

                  </Col>
                  <Col className='dashboard-style' sm={10}>

                        <h1 className='text-danger'>Wellcome to Dashboard</h1>

                  </Col>
            </Row>
      );
};

export default DashboardHome;