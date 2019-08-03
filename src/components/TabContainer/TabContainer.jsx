import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MarketData from "../MarketData/MarketData";
import Favorites from "../Favorites";
import "../Tabs/Tabs.css";

const TabContainer = ({
  marketData,
  dataIsReady,
  currenciesData,
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
              dataIsReady={dataIsReady}
              currenciesData={currenciesData}
              toggleFavorite={toggleFavorite}
              sortData={sortData}
              sorted={sorted}
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
TabContainer.propTypes = {
  marketData: PropTypes.array,
  dataIsReady: PropTypes.bool,
  currenciesData: PropTypes.object,
  toggleFavorite: PropTypes.func,
  sortData: PropTypes.func,
  removeFavorite: PropTypes.func,
  sorted: PropTypes.bool
};
