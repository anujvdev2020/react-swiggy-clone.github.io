import React from "react";
import MyContext from "../../Context";
export default class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>{this.context.cartItems.length === 0 ? "OOps cart is Empty" : ""}</>
    );
  }
}
Cart.contextType = MyContext;
