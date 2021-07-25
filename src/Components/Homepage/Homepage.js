import React from "react";
import TopPicks from "./TopPicks";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Coupons from "./Coupons";
import axios from "axios";

export default class Homepage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
   axios.get('https://www.swiggy.com/dapi/restaurants/list/v5',{
    lat:25.4514,
    lng:81.83473,
    pageType:"SEE_ALL",
    sortBy:"RELEVANCE",
    page_type:"DESKTOP_SEE_ALL_LISTING"
   },{
     cors:"no-cors"
   }).then(res=>console.log(res))
   .catch(err=>console.log(err))
  };

  render() {
    return (
      <Container fluid>
        <Container fluid>
          <Row>
            <Col sm={6} xs={8}>
              Location
            </Col>
            <Col sm={5} xs={4}>
              Offers
            </Col>
          </Row>
        </Container>

        <Row className="mt-5">
          <Col>
            <TopPicks />
          </Col>
        </Row>
        <Row></Row>
        <Row className="mt-5">
          <Col>
            <Coupons />
          </Col>
        </Row>
      </Container>
    );
  }
}
