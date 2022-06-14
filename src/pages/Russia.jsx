import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import StrategyRussia from "../components/strategyRussia/StrategyRussia";

const Russia = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <BaseMap />
                <Legend />
            </div>
            <div className="right">
                <Navbar />
                <StrategyRussia />
            </div>
        </div>
    </div>
  )
}

export default Russia;