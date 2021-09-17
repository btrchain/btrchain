import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";

export default function OurClient() {
  return (
    <div>
      <Container>
        <Row className='pb-5 justify-content-center'>
          <p className="h2 text-center py-5">Our Clients</p>
          <Col className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <Image src="./images/instibuddy.png" rounded fluid />
          </Col>

          <Col className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <Image src="./images/nityamukt.png" rounded fluid />
          </Col>
          <Col className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <Image src="./images/blogocean.png" rounded fluid />
          </Col>
          <Col className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <Image src="./images/kushinagar.png" rounded fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
