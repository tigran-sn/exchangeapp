import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";
import { FaRegStar, FaStar } from "react-icons/fa";
import { currencySymbol, calculate } from "../../helpers";

export default class MarketData extends Component {
  state = {
    usd: 1
  };
  handleChange = event => {
    this.setState({
      usd: +event.currentTarget.value
    });
  };
  renderMarketData = () => {
    let { marketData, dataIsReady } = this.props;
    if (!dataIsReady) {
      return <Loader />;
    } else {
      // debugger;
      return (
        <div className="marketData">
          <div className="fx fx-center-v base__wrapper">
            <h1 className="base">
              Base <span className="base__value">USD</span>
            </h1>
            <input
              type="number"
              className="base__inputValue"
              min="0"
              defaultValue="1"
              onChange={this.handleChange.bind(this)}
            />
            <span className="dollarSign">$</span>
          </div>
          <ul className="data__header">
            <li className="fx fx-center-v data__headerItem">
              <span className="data__headerCol data__headerCol1">
                Currency Name
              </span>
              <span className="data__headerCol data__headerCol2">Code</span>
              <span className="data__headerCol data__headerCol3">Price</span>
              <span className="data__headerCol data__headerCol4">Volume</span>
              <span className="data__headerCol data__headerCol5">Result</span>
            </li>
          </ul>
          <ul className="data__list">
            {marketData.map(item => (
              <li
                key={`market_${item.fromCurrency}`}
                className="fx fx-center-v data__listItem"
              >
                <span className="data__listCol data__listCol1">
                  {item.currencyName}
                </span>
                <span className="data__listCol data__listCol2">
                  {`${item.fromCurrency} (${currencySymbol(
                    item.fromCurrency
                  )})`}
                </span>
                <span className="data__listCol data__listCol3">
                  {item.price}
                </span>
                <span className="data__listCol data__listCol4">
                  {item.volume}
                </span>
                <span className="data__listCol data__listCol5">
                  {`${calculate(this.state.usd, item.price)} ${currencySymbol(
                    item.fromCurrency
                  )}`}
                  {}
                </span>
                <strong
                  className={
                    localStorage
                      .getItem("favorites")
                      .includes(JSON.stringify(item))
                      ? "addRemoveFavorite addRemoveFavorite--favorited"
                      : "addRemoveFavorite"
                  }
                  onClick={this.props.toggleFavorite.bind(this, item)}
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
    const { marketData } = this.props;
    return (
      <>
        <button
          onClick={this.props.sortData.bind(this, marketData)}
          className="sortBtn"
        >
          {this.props.sorted ? "Ascending" : "Descending"}
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
