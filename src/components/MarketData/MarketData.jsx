import React, { Component } from "react";
import Loader from "../Loader";
import { FaRegStar, FaStar } from "react-icons/fa";

export default class MarketData extends Component {
  renderCurrenciesData = () => {
    const { currenciesData, currenciesDataReady } = this.props;
    if (!currenciesDataReady) {
      return <Loader />;
    } else {
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
    let { marketData, marketDataReady } = this.props;
    if (!marketDataReady) {
      return <Loader />;
    } else {
      // debugger;
      return (
        <div className="marketData">
          <ul>
            {marketData.map(item => (
              <li key={`market_${item.fromCurrency}`}>
                {`From Currency: ${item.fromCurrency}, Price: ${
                  item.price
                }, Volume: ${item.volume}`}
                <strong
                  className="addRemoveFavorite"
                  onClick={this.props.toggleFavorite.bind(
                    this,
                    item
                    // item.fromCurrencyId
                  )}
                >
                  {localStorage
                    .getItem("favorites")
                    .includes(JSON.stringify(item)) ? (
                    <FaStar color="#f9d421" />
                  ) : (
                    <FaRegStar color="#f9d421" />
                  )}
                </strong>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  render() {
    const { marketData, marketDataReady } = this.props;
    return (
      <>
        <button onClick={this.props.sortData.bind(this, marketData)}>
          Sort: {this.props.sorted ? "Ascending" : "Descending"}
        </button>
        <div className="tabRow">
          <h2>Market</h2>
          {this.renderMarketData()}
          <h2>Currencies</h2>
          {this.renderCurrenciesData()}
        </div>
      </>
    );
  }
}
