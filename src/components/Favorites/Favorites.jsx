import React, { Component } from "react";
import PropTypes from "prop-types";
// import Loader from "../Loader";
import { FaStar } from "react-icons/fa";
import { currencySymbol } from "../../helpers";

export default class Favorites extends Component {
  renderFavorites = () => {
    const favorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    if (favorites.length > 0) {
      return (
        <div className="favorites marketData">
          <div className="fx fx-center-v base__wrapper">
            <h1 className="base">
              Base <span className="base__value">USD</span>
            </h1>
          </div>
          <ul className="data__header">
            <li className="fx fx-center-v data__headerItem">
              <span className="data__headerCol data__headerCol1">
                Currency Name
              </span>
              <span className="data__headerCol data__headerCol2">Code</span>
              <span className="data__headerCol data__headerCol3">Price</span>
              <span className="data__headerCol data__headerCol4">Volume</span>
            </li>
          </ul>
          <ul>
            {favorites.map(item => (
              <li
                key={`favorite_${item.fromCurrency}`}
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
                <strong
                  className="addRemoveFavorite addRemoveFavorite--favorited"
                  onClick={this.props.removeFavorite.bind(this, item)}
                >
                  <FaStar color="#f9d421" />
                </strong>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="favorites marketData">
          <h2 className="favorites__title--empty">No Favorites</h2>
        </div>
      );
    }
  };

  render() {
    return <div className="tabRow">{this.renderFavorites()}</div>;
  }
}
Favorites.propTypes = {
  removeFavorite: PropTypes.func
};
