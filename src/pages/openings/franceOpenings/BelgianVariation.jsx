import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const BelgianVariation = () => {
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
              <h5>The Belgian Variation</h5>
              <p>
                F Bre - MAO <br />A Mar - Bur <br />A Par - Pic
              </p>
              <p>
                More aggressive than the Burgundy Variation, this opening
                guarantees France a shot at BEL in the fall, in addition to
                picking up an Iberian neutral. Somewhat anti-German, this
                opening aims to get armies to the German border as rapidly as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelgianVariation;
