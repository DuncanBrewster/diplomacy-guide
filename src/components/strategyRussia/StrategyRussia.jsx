import React from "react";
import FlagRussia from "../flags/FlagRussia";
import Topics from "../Topics";
import GeneralRussia from "./bodyRussia/GeneralRussia";
import HelpfulResourcesRussia from "./bodyRussia/HelpfulResourcesRussia";
import NeighborsRussia from "./bodyRussia/NeighborsRussia";
import OpeningsRussia from "./bodyRussia/OpeningsRussia";

const StrategyRussia = () => {
  return (
    <div className="bodySection">
      <h3>RUSSIA</h3>
      <FlagRussia />
      <Topics />
      <div className="content">
        <GeneralRussia />
        <NeighborsRussia />
        <OpeningsRussia />
        <HelpfulResourcesRussia />
      </div>
    </div>
  );
};

export default StrategyRussia;
