import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
// import Tabs from "./components/Tabs/Tabs";
import TabContainer from "./components/TabContainer/TabContainer";

export default class App extends Component {
  state = {
    marketURL: "https://exchange-test-app.herokuapp.com/market",
    currenciesURL: "https://exchange-test-app.herokuapp.com/currencies"
  };
  render() {
    return (
      <div className="App">
        <Header title="USD Exchange" logo={logo} />
        <TabContainer
          marketURL={this.state.marketURL}
          currenciesURL={this.state.currenciesURL}
        />
      </div>
    );
  }
}
