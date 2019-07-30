import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Loader from "../Loader";
import "../Tabs/Tabs.css";

export default class TabContainer extends Component {
  state = {
    marketData: [],
    currenciesData: [],
    marketDataReady: false,
    currenciesDataReady: false
  };

  renderCurrenciesData = () => {
    const { currenciesData, currenciesDataReady } = this.props;
    if (!currenciesDataReady) {
      return <Loader />;
    } else {
      // console.log(currenciesData);
      return (
        <div className="currenciesData">
          <ul>
            {currenciesData.currencies.map(item => (
              <li key={`currency_${item.currency}`}>
                {`Currency: ${item.currency}, Currency Name: ${
                  item.currencyName
                }`}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  renderMarketData = () => {
    const { marketData, marketDataReady } = this.props;
    if (!marketDataReady) {
      return <Loader />;
    } else {
      // console.log(marketData);
      return (
        <div className="marketData">
          <ul>
            {marketData.market.map(item => (
              <li key={`market_${item.fromCurrency}`}>
                {`From Currency: ${item.fromCurrency}, Price: ${
                  item.price
                }, Volume: ${item.volume}`}
                <strong
                  className="favorite favorite--selected"
                  onClick={this.props.toggleFavorite.bind(
                    this,
                    item.fromCurrencyId
                  )}
                >
                  {/* {localStorage
                    .getItem("favorites")
                    .includes(item.fromCurrencyId)
                    ? "Bookmark"
                    : "Bookmarked"} */}
                  Bookmark
                </strong>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  renderFavorites = () => {
    const { favorites } = this.props;
    return favorites.map((item, index) => (
      <li key={index}>
        {item}{" "}
        <strong onClick={this.props.removeFavorite.bind(this, item)}>
          Remove
        </strong>
      </li>
    ));
  };

  render() {
    return (
      <div className="tabContainer">
        <Tabs>
          <TabList>
            <Tab>USD</Tab>
            <Tab>Favorites</Tab>
          </TabList>

          <TabPanel>
            <div className="tabRow">
              <h2>Market</h2>
              {this.renderMarketData()}
              <h2>Currencies</h2>
              {this.renderCurrenciesData()}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabRow">
              <h2>Favorites</h2>
              <ul>{this.renderFavorites()}</ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
