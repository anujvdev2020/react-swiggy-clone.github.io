import React, { Component } from "react";
import Slider from "react-slick";
import { Redirect } from "react-router-dom";

export default class CouponsSlider extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  handleClick = () => {
    console.log("click")
    this.setState({
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/somewhere" />;
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
