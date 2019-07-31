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
    currenciesDataReady: false,
    sorted: false
  };

  componentWillMount() {
    // Check if local storage has "favorites" set. If not, set an empty array
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", "[]");
    }
  }
  componentDidMount() {
    this.getCurrenciesData();
    this.getMarketData();
    this.getInitalFavorites();
  }
  componentDidUpdate() {
    // if (!this.state.sorted) {
    //   this.getMarketData();
    // } else {
    //   this.getSortedMarketData();
    // }
  }
  getInitalFavorites = () => {
    console.log(JSON.parse(localStorage.getItem("favorites")));
    let favorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    this.setState({
      favorites
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
        this.setState({
          currenciesDataReady: true,
          currenciesData: data
        });
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
        this.setState({
          marketDataReady: true,
          marketData: data
        });
      });
  };

  getSortedMarketData = () => {
    const marketURL = this.state.marketURL;
    const fetchMarket = fetch(marketURL);
    fetchMarket
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        data.market.sort((a, b) => b.price - a.price);
        console.log(data);
        this.setState({
          marketDataReady: true,
          marketData: data
        });
      });
  };

  toggleFavorite = data => {
    let copiedFavorites = [...this.state.favorites];
    if (this.state.favorites.includes(data)) {
      copiedFavorites = [
        ...copiedFavorites.slice(0, copiedFavorites.indexOf(data)),
        ...copiedFavorites.slice(copiedFavorites.indexOf(data) + 1)
      ];
    } else {
      copiedFavorites.push(data);
    }
    localStorage.setItem("favorites", JSON.stringify(copiedFavorites));
    this.setState({
      favorites: copiedFavorites
    });
  };
  removeFavorite = data => {
    let copiedFavorites = [...this.state.favorites];
    if (this.state.favorites.includes(data)) {
      copiedFavorites = [
        ...copiedFavorites.slice(0, copiedFavorites.indexOf(data)),
        ...copiedFavorites.slice(copiedFavorites.indexOf(data) + 1)
      ];
    }
    localStorage.setItem("favorites", JSON.stringify(copiedFavorites));
    this.setState({
      favorites: copiedFavorites
    });
  };

  sortData = () => {
    this.setState({
      sorted: !this.state.sorted
    });
  };
  render() {
    return (
      <div className="App" onClick={this.sortData}>
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
          // sortData={this.sortData}
        />
      </div>
    );
  }
}
