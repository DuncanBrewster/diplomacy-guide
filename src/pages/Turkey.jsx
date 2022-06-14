import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import StrategyTurkey from "../components/strategyTurkey/StrategyTurkey";

const Turkey = () => {
  return (
    <div className="container">
    <div className="wrapper">
        <div className="left">
            <BaseMap />
            <Legend />
        </div>
        <div className="right">
            <Navbar />
            <StrategyTurkey />
        </div>
    </div>
</div>
  )
}

export default Turkey;