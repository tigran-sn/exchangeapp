import React, { Component } from "react";
import "./Loader.css";

const Loader = props => {
  return (
    <div className="all">
      <div className="loader" />
      <div className="loader2" />
      <p className="loading">LOADING...</p>
    </div>
  );
};
export default Loader;
