import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import StrategyEngland from '../components/strategyEngland/StrategyEngland';

const England = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <BaseMap />
                <Legend />
            </div>
            <div className="right">
                <Navbar />
                <StrategyEngland />
            </div>
        </div>
    </div>
  );
};

export default England;