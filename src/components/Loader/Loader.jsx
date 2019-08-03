import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({ text }) => {
  return (
    <div className="all">
      <div className="loader" />
      <div className="loader2" />
      <p className="loading">{text}</p>
    </div>
  );
};
Loader.defaultProps = {
  text: "Loading..."
};
export default Loader;
Loader.propTypes = {
  text: PropTypes.string
};
