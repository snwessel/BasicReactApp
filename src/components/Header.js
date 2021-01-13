import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => (
  <Container className="mt-4">
    <Row>
      <Col className="text-center">
        <h1 className="font-weight-bold">Welcome!</h1>
      </Col>
    </Row>
  </Container>
);

export default Header;
