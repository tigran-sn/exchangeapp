import React, {Component} from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';
import Tabs from './components/Tabs/Tabs';

export default class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Header title="USD Exchange" logo={logo} />
        <Tabs />
      </div>
    );
  }
}
