import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import StrategyGermany from "../components/strategyGermany/StrategyGermany";

const Germany = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <BaseMap />
                <Legend />
            </div>
            <div className="right">
                <Navbar />
                <StrategyGermany />
            </div>
        </div>
    </div>
  );
};

export default Germany;