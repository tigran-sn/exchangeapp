import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Tabs/Tabs.css";

export default class TabContainer extends Component {
  componentDidMount() {
    const marketURL = this.props.marketURL;
    const currenciesURL = this.props.currenciesURL;
    const fetchMarket = fetch(marketURL);
    return fetchMarket
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        // console.log(data);
      });
  }
  renderMarketData = () => {
    const marketURL = this.props.marketURL;
    const fetchMarket = fetch(marketURL);
    fetchMarket
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        return data.market.map(singleMarket => {
          console.log(singleMarket);
          return <span>{singleMarket.fromCurrency}</span>;
        });
      });
  };
  render() {
    return (
      <div className="tabContainer">
        <Tabs>
          <TabList>
            <Tab>Favorites</Tab>
            <Tab>USD</Tab>
          </TabList>

          <TabPanel>
            <h2>{this.renderMarketData()}</h2>
          </TabPanel>
          <TabPanel>
            <h2>USD content</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
