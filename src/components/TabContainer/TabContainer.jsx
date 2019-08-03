import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MarketData from "../MarketData/MarketData";
import Favorites from "../Favorites";
import "../Tabs/Tabs.css";

const TabContainer = ({
  marketData,
  marketDataReady,
  currenciesData,
  currenciesDataReady,
  toggleFavorite,
  sortData,
  removeFavorite,
  sorted
}) => {
  return (
    <main>
      <div className="tabContainer">
        <Tabs>
          <TabList>
            <Tab>USD</Tab>
            <Tab>Favorites</Tab>
          </TabList>

          <TabPanel>
            <MarketData
              marketData={marketData}
              marketDataReady={marketDataReady}
              currenciesData={currenciesData}
              currenciesDataReady={currenciesDataReady}
              toggleFavorite={toggleFavorite}
              sortData={sortData}
              sorted={sorted}
              // renderCount={this.props.renderCount}
            />
          </TabPanel>
          <TabPanel>
            <Favorites removeFavorite={removeFavorite} />
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default TabContainer;
