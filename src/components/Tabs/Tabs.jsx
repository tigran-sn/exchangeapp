import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tabs.css";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Favorites</Tab>
      <Tab>USD</Tab>
    </TabList>

    <TabPanel>
      <h2>Favorites content</h2>
    </TabPanel>
    <TabPanel>
      <h2>USD content</h2>
    </TabPanel>
  </Tabs>
);
