import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const VineyardVariation = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <BaseMap />
          <Legend />
        </div>
        <div className="right">
          <Navbar />
          <div className="bodySection">
            <ReturnFrance />
            <div className="content">
              <h5>The Vineyard Variation</h5>
              <p>
                F Bre - MAO <br />A Mar - Bur <br />A Par - Gas
              </p>
              <p>
                An alternative to the Burgundy variation, this move order is
                arguably tactically stronger since standing off Germany in
                Burgundy with Marseilles rather than Paris gives greater
                leverage over Iberia in case of an Italian move to Piedmont in
                Spring 1901. Moving Paris to Gascony also offers the possibility
                of convoying Gascony to Portugal in Fall 1901, thus maintaining
                the fleet in Mid-Atlantic. This helps build trust with Germany
                and affords a stronger footing for an invasion of England or
                Italy in 1902.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VineyardVariation;
