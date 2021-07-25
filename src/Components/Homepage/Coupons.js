import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import RestaurantSlider from "./RestaurantSlider";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import CouponsSlider from "./CouponsSlider";

export default class Coupons extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Container fluid />
        <Row>
          <Col>Coupons For You</Col>
        </Row>
        <Row>
          <Col>
            <CouponsSlider />
          </Col>
        </Row>
      </>
    );
  }
}
