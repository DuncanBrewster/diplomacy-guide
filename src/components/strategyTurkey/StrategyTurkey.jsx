import React from "react";
import FlagTurkey from "../flags/FlagTurkey";
import Topics from "../Topics";
import GeneralTurkey from "./bodyTurkey/GeneralTurkey";
import HelpfulResourcesTurkey from "./bodyTurkey/HelpfulResourcesTurkey";
import NeighborsTurkey from "./bodyTurkey/NeighborsTurkey";
import OpeningsTurkey from "./bodyTurkey/OpeningsTurkey";

const StrategyTurkey = () => {
  return (
    <div className="bodySection">
      <h3>TURKEY</h3>
      <FlagTurkey />
      <Topics />
      <div className="content">
        <GeneralTurkey />
        <NeighborsTurkey />
        <OpeningsTurkey />
        <HelpfulResourcesTurkey />
      </div>
    </div>
  );
};

export default StrategyTurkey;
