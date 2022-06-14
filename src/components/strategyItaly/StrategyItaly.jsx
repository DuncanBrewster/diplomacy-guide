import React from "react";
import FlagItaly from "../flags/FlagItaly";
import Topics from "../Topics";
import GeneralItaly from "./bodyItaly/GeneralItaly";
import HelpfulResourcesItaly from "./bodyItaly/HelpfulResourcesItaly";
import NeighborsItaly from "./bodyItaly/NeighborsItaly";
import OpeningsItaly from "./bodyItaly/OpeningsItaly";

const StrategyItaly = () => {
  return (
    <div className="bodySection">
      <h3>ITALY</h3>
      <FlagItaly />
      <Topics />
      <div className="content">
        <GeneralItaly />
        <NeighborsItaly />
        <OpeningsItaly />
        <HelpfulResourcesItaly />
      </div>
    </div>
  );
};

export default StrategyItaly;
