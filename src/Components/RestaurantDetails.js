import React from "react";
import MyContext from "../Context";
export default class RestaurantDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurantData: []
    };
  }
  componentDidMount = () => {
    if (this.context) {
      this.context.restaurantData.map((item) => {
        if (item.slug === this.props.match.params.name) {
          this.setState({
            restaurantData: item
          });
        }
      });
    }
  };

  handleAddToCart = (e, item) => {
    console.log("UTEM", item);
  };
  render() {
    return (
      <>
        <h1>{this.state.restaurantData.name}</h1>
        <p>{this.state.restaurantData.avaliable_dish}</p>
        <p>{this.state.restaurantData.address}</p>
        {/* <img
          src={this.state.restaurantData.imgsrc}
          height="400"
          width="400"
          alt=""
        /> */}
        <p>{this.state.restaurantData.rating}</p>
        {this.state.restaurantData.menuItems
          ? this.state.restaurantData.menuItems.length !== 0
            ? this.state.restaurantData.menuItems.map((item) => (
                <>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
                  {item.qnt === 0 ? (
                    <button
                      onClick={(e, item) => this.handleAddToCart(e, item)}
                    >
                      Add
                    </button>
                  ) : (
                    item.qnt
                  )}
                </>
              ))
            : ""
          : ""}
      </>
    );
  }
}
RestaurantDetails.contextType = MyContext;
