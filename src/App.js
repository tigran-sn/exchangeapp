import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
// import Tabs from "./components/Tabs/Tabs";
import TabContainer from "./components/TabContainer/TabContainer";

export default class App extends Component {
  state = {
    marketURL: "https://exchange-test-app.herokuapp.com/market",
    currenciesURL: "https://exchange-test-app.herokuapp.com/currencies",
    favorites: [],
    marketData: [],
    currenciesData: [],
    marketDataReady: false,
    currenciesDataReady: false
  };

  componentDidMount() {
    this.getCurrenciesData();
    this.getMarketData();
  }
  getInitalFavorites = () => {
    this.setState({
      favorites: localStorage.getItem("favorites")
    });
  };

  getCurrenciesData = () => {
    const currenciesURL = this.state.currenciesURL;
    const fetchCurrencies = fetch(currenciesURL);
    fetchCurrencies
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        setTimeout(() => {
          this.setState({
            currenciesDataReady: true,
            currenciesData: data
          });
        }, 1000);
      });
  };
  getMarketData = () => {
    const marketURL = this.state.marketURL;
    const fetchMarket = fetch(marketURL);
    fetchMarket
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        setTimeout(() => {
          this.setState({
            marketDataReady: true,
            marketData: data
          });
        }, 1000);
      });
  };

  toggleFavorite = data => {
    const copiedFavorites = [...this.state.favorites];
    console.log(copiedFavorites);
    if (this.state.favorites.includes(data)) {
      copiedFavorites.pop(data);
    } else {
      copiedFavorites.push(data);
    }
    localStorage.setItem("favorites", JSON.stringify(copiedFavorites));
    this.setState({
      favorites: copiedFavorites
    });
  };
  removeFavorite = data => {
    const copiedFavorites = [...this.state.favorites];
    console.log(data);
    // return;
    if (this.state.favorites.includes(data)) {
      console.log([...copiedFavorites.slice(0, copiedFavorites.indexOf(data))]);
      copiedFavorites.pop(data);
    }
    localStorage.setItem("favorites", JSON.stringify(copiedFavorites));
    this.setState({
      favorites: copiedFavorites
    });
  };
  render() {
    return (
      <div className="App">
        <Header title="USD Exchange" logo={logo} />
        <TabContainer
          marketURL={this.state.marketURL}
          currenciesURL={this.state.currenciesURL}
          favorites={this.state.favorites}
          marketData={this.state.marketData}
          marketDataReady={this.state.marketDataReady}
          currenciesData={this.state.currenciesData}
          currenciesDataReady={this.state.currenciesDataReady}
          toggleFavorite={this.toggleFavorite}
          removeFavorite={this.removeFavorite}
        />
      </div>
    );
  }
}
