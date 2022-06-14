import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnEngland from "../../../components/returnRoutes/ReturnEngland";

const EdinburghSplit = () => {
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
            <ReturnEngland />
            <div className="content">
              <h5>The Edinburgh Split</h5>
              <p>
                F Lon - ENG <br />F Edi - NWG <br />A Lvp - Edi
              </p>
              <p>
                The pro-French Split opening (or, at least, as pro-French as an
                opening to the Channel can be). Allows convoy to Norway, with
                England using the Channel fleet to influence Belgium or pressure
                Brest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdinburghSplit;
