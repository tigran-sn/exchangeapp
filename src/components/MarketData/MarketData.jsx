import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";
import { FaRegStar, FaStar } from "react-icons/fa";

export default class MarketData extends Component {
  renderMarketData = () => {
    let { marketData, currenciesData, dataIsReady } = this.props;
    if (!dataIsReady) {
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
                <span>{currenciesData.currencies[0].currency}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  render() {
    const { marketData } = this.props;
    return (
      <>
        <button onClick={this.props.sortData.bind(this, marketData)}>
          Sort: {this.props.sorted ? "Ascending" : "Descending"}
        </button>
        <div className="tabRow">{this.renderMarketData()}</div>
      </>
    );
  }
}
MarketData.propTypes = {
  marketData: PropTypes.array,
  currenciesData: PropTypes.array,
  dataIsReady: PropTypes.bool
};
