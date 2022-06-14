import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const PicardyOpening = () => {
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
              <h5>The Picardy Opening</h5>
              <p>
                F Bre - Pic <br />A Mar - Spa <br />A Par - Bur
              </p>
              <p>
                Though rarely seen, moving the fleet to Picardy gives France the
                opportunity to influence the fate of Belgium without
                antagonizing England with a move to the English Channel.
                However, this move violates the sound strategic principle that
                fleets should usually be placed in open water rather than on the
                coastline in order to maximize tactical options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicardyOpening;
