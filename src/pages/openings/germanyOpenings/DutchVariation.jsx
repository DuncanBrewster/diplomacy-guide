import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnGermany from "../../../components/returnRoutes/ReturnGermany";

const DutchVariation = () => {
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
            <ReturnGermany />
            <div className="content">
              <h5>The Dutch Variation</h5>
              <p>
                F Kie - Hol <br />A Mun - Ruh <br />A Ber - Kie
              </p>
              <p>
                Those who think that Denmark can still be captured later prefer
                this move - it guarantees Holland. Of course, keep in mind that
                Scandinavia can be taken very quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutchVariation;
