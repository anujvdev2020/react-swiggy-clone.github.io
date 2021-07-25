import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Row, Col } from "react-bootstrap";
export default class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Navbar fixed="bottom">
          <Container fluid="md">
            <Row>
              <Col>
                {" "}
                <Link to="/">Home </Link>
              </Col>
              <Col>
                {" "}
                <Link to="/search">Search</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/cart">Cart</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/account">Account</Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    );
  }
}
