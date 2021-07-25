import React, { Component } from "react";
import Slider from "react-slick";
import { Redirect } from "react-router-dom";
import MyContext from "../../Context";

export default class RestaurantSlider extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      slug: ""
    };
  }
  handleClick = (e, _slug) => {
    console.log("click", _slug);
    this.setState({
      redirect: true,
      slug: _slug
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.slug} />;
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
          {this.context
            ? this.context.restaurantData.map((item) => (
                <div onClick={(e, slug) => this.handleClick(e, item.slug)}>
                  <img src={item.imgsrc} height="300" width="300" alt="" />
                  <p>{item.name}</p>
                </div>
              ))
            : ""}
        </Slider>
      </div>
    );
  }
}
RestaurantSlider.contextType = MyContext;
