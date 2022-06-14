import React from 'react';
import BaseMap from "../components/maps/BaseMap";
import Legend from "../components/legend/Legend";
import Navbar from "../components/navbar/Navbar";
import TheBasics from "../components/theBasics/TheBasics";

const Home = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <BaseMap />
                <Legend />
            </div>
            <div className="right">
                <Navbar />
                <TheBasics />
            </div>
        </div>
    </div>
  );
};

export default Home;