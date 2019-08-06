import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MarketData from "../MarketData/MarketData";
import Favorites from "../Favorites";
import "./TabContainer.css";

const TabContainer = ({
  marketData,
  dataIsReady,
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
  toggleFavorite: PropTypes.func,
  sortData: PropTypes.func,
  removeFavorite: PropTypes.func,
  sorted: PropTypes.bool
};
