import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ logo, title }) => {
  return (
    <header className="App__header">
      <img src={logo} className="App__logo" alt="logo" />
      <h1 className="App__title">{title}</h1>
    </header>
  );
};
export default Header;
Header.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string
};
