import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import StrategyItaly from "../components/strategyItaly/StrategyItaly";


const Italy = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <BaseMap />
                <Legend />
            </div>
            <div className="right">
                <Navbar />
                <StrategyItaly />
            </div>
        </div>
    </div>
  )
}

export default Italy;