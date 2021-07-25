import "./styles.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Account from "./Components/Account/Account";
import Cart from "./Components/Cart/Cart";
import Search from "./Components/Search/Search";
import Navigation from "./Navigation/Navgation";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import axios from "axios";
import RestaurantDetails from "./Components/RestaurantDetails";
import MyContext from "./Context";

export default class App extends React.Component {
  componenDidMount = () => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?page=1&ignoreServiceability=true&lat=25.4514&lng=81.83473&pageType=SEE_ALL&sortBy=RELEVANCE&page_type=DESKTOP_SEE_ALL_LISTING"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Navigation />
        </Container>
        <main>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/search" component={Search} />
            <Route path="/cart" component={Cart} />
            <Route path="/account" component={Account} />
            <Route path="/:name" component={RestaurantDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.contextType = MyContext;
