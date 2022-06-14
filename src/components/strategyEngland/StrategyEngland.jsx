import React from "react";
import FlagEngland from "../flags/FlagEngland";
import Topics from "../Topics";
import GeneralEngland from "./bodyEngland/GeneralEngland";
import HelpfulResourcesEngland from "./bodyEngland/HelpfulResourcesEngland";
import NeighborsEngland from "./bodyEngland/NeighborsEngland";
import OpeningsEngland from "./bodyEngland/OpeningsEngland";

const StrategyEngland = () => {
  return (
    <div className="bodySection">
      <h3>ENGLAND</h3>
      <FlagEngland />
      <Topics />
      <div className="content">
        <GeneralEngland />
        <NeighborsEngland />
        <OpeningsEngland />
        <HelpfulResourcesEngland />
      </div>
    </div>
  );
};

export default StrategyEngland;
