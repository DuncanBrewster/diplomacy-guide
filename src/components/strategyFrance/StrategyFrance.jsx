import React from "react";
import FlagFrance from "../flags/FlagFrance";
import Topics from "../Topics";
import GeneralFrance from "./bodyFrance/GeneralFrance";
import HelpfulResourcesFrance from "./bodyFrance/HelpfulResourcesFrance";
import NeighborsFrance from "./bodyFrance/NeighborsFrance";
import OpeningsFrance from "./bodyFrance/OpeningsFrance";

const StrategyFrance = () => {
  return (
    <div className="bodySection">
      <h3>FRANCE</h3>
      <FlagFrance />
      <Topics />
      <div className="content">
        <GeneralFrance />
        <NeighborsFrance />
        <OpeningsFrance />
        <HelpfulResourcesFrance />
      </div>
    </div>
  );
};

export default StrategyFrance;
