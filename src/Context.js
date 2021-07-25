import React from "react";
import RestaurantData from "./RestaurantsData/RestaurantData";
let context = [];
const MyContext = React.createContext({
  cartItems: [],
  restaurantData: RestaurantData
});
export default MyContext;
