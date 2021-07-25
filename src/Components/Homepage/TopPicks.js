import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import RestaurantSlider from "./RestaurantSlider";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import RandomSlider from "./RandomSlider";

export default class TopPicks extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Container fluid />
        <Row>
          <Col>Top Picks For You</Col>
        </Row>
        <Row>
          <RestaurantSlider />
        </Row>
        <Row className="mt-3">
          <RandomSlider />
        </Row>
      </div>
    );
  }
}
