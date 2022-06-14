import React from "react";
import FlagGermany from "../flags/FlagGermany";
import Topics from "../Topics";
import GeneralGermany from "./bodyGermany/GeneralGermany";
import HelpfulResourcesGermany from "./bodyGermany/HelpfulResourcesGermany";
import NeighborsGermany from "./bodyGermany/NeighborsGermany";
import OpeningsGermany from "./bodyGermany/OpeningsGermany";

const StrategyGermany = () => {
  return (
    <div className="bodySection">
      <h3>GERMANY</h3>
      <FlagGermany />
      <Topics />
      <div className="content">
        <GeneralGermany />
        <NeighborsGermany />
        <OpeningsGermany />
        <HelpfulResourcesGermany />
      </div>
    </div>
  );
};

export default StrategyGermany;
