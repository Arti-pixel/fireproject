import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GeneralList from "../Components/GeneralList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <GeneralList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
