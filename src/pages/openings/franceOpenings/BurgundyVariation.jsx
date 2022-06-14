import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const BurgundyVariation = () => {
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
              <h5>The Burgundy Variation</h5>
              <p>
                F Bre - MAO <br />A Mar - Spa <br />A Par - Bur
              </p>
              <p>
                Second in popularity only to the Maginot Opening is the Burgundy
                variation. France claims SPA, and can guarantee himself POR,
                while still having a stake in the argument over BEL or at least
                keeping Germany out of BUR. The Burgundy bothers England a
                little over BEL and Germany a little over the move to BUR, but
                antagonizes neither too strongly. An extremely strong,
                theoretical opening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgundyVariation;
