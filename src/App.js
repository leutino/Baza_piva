import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import BeersList from "./components/BeersList";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/beersList" component={BeersList} />
      </Switch>
    );
  }
}

export default App;
