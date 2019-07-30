import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Tabs/Tabs.css";

export default class TabContainer extends Component {
  state = {
    marketData: [],
    currenciesData: [],
    marketDataReady: false,
    currenciesDataReady: false
  };
  componentDidMount() {
    this.getCurrenciesData();
    this.getMarketData();
  }

  getCurrenciesData = () => {
    const currenciesURL = this.props.currenciesURL;
    const fetchCurrencies = fetch(currenciesURL);
    fetchCurrencies
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        this.setState({
          currenciesDataReady: true,
          currenciesData: data
        });
      });
  };
  getMarketData = () => {
    const marketURL = this.props.marketURL;
    const fetchMarket = fetch(marketURL);
    fetchMarket
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        this.setState({
          marketDataReady: true,
          marketData: data
        });
      });
  };

  renderCurrenciesData = () => {
    const { currenciesData, currenciesDataReady } = this.state;
    if (!currenciesDataReady) {
      return <span>Loading...</span>;
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
      // console.log(currenciesData);
    }
  };
  renderMarketData = () => {
    const { marketData, marketDataReady } = this.state;
    if (!marketDataReady) {
      return <span>Loading...</span>;
    } else {
      return (
        <div className="marketData">
          <ul>
            {marketData.market.map(item => (
              <li key={`market_${item.fromCurrency}`}>
                {`From Currency: ${item.fromCurrency}, Price: ${
                  item.price
                }, Volume: ${item.volume}`}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="tabContainer">
        <Tabs>
          <TabList>
            <Tab>USD</Tab>
            <Tab>Favorites</Tab>
          </TabList>

          <TabPanel>
            <h2>Market</h2>
            {this.renderMarketData()} <h2>Currencies</h2>
            {this.renderCurrenciesData()}
          </TabPanel>
          <TabPanel>Favorites</TabPanel>
        </Tabs>
      </div>
    );
  }
}
