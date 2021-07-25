import React, { Component } from "react";
import Slider from "react-slick";
import { Redirect } from "react-router-dom";

export default class RandomSlider extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  handleClick = () => {
    console.log("click");
    this.setState({
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/somewhere" />;
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <div onClick={this.handleClick}>
            <img src="" alt="Random " />
          </div>
          <div>
            <img src="" alt="Random" />
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
