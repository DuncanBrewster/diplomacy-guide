import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import StrategyFrance from "../components/strategyFrance/StrategyFrance";

const France = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <BaseMap />
                <Legend />
            </div>
            <div className="right">
                <Navbar />
                <StrategyFrance />
            </div>
        </div>
    </div>
  );
};

export default France;