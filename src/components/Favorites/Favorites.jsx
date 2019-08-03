import React, { Component } from "react";
// import Loader from "../Loader";
import { FaStar } from "react-icons/fa";

export default class Favorites extends Component {
  renderFavorites = () => {
    const favorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    return (
      <ul>
        {favorites.map(item => (
          <li key={`favorite_${item.fromCurrency}`}>
            {`From Currency: ${item.fromCurrency}, Price: ${
              item.price
            }, Volume: ${item.volume}`}
            <strong
              className="addRemoveFavorite"
              onClick={this.props.removeFavorite.bind(this, item)}
            >
              <FaStar color="#f9d421" />
            </strong>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="tabRow">
        <div className="favorites">{this.renderFavorites()}</div>
      </div>
    );
  }
}
