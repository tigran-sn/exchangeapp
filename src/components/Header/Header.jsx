import React, {Component} from "react";
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <header className="App__header">
        <img src={this.props.logo} className="App__logo" alt="logo" />
        <h1 className="App__title">{this.props.title}</h1>
      </header>
    )
  }
}