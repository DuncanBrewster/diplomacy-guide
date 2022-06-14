import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const SouthernHedgehog = () => {
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
            <ReturnAustria />
            <div className="content">
              <h5>Southern Hedgehog</h5>
              <p>A Bud - Ser<br /> F Tri - Ven<br /> A Vie - Gal</p>
              <p>
                The Southern Hedgehog sends the Budapest army south to pick up
                Serbia instead of east to hit Russia. This opening doesn't put
                nearly as much pressure on Russia as the move to Rumania does, but
                it does secure a build against everything but the absurdly rare
                German incursion into Bohemia. This opening is the quintessential
                Hedgehog opening; it is the least committal, with enough defensive
                moves to protect itself from all realistic threats without
                agitating any neighbors who weren't already committed to attacking
                Austria in the first place, and it ensures a build to use against
                whichever neighbor has given Austria most reason for mistrust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthernHedgehog;
